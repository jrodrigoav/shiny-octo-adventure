"use strict";
var signalR = require('@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final');
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Players } from './players.jsx';
import { Login } from './login.jsx';
import { BlackCard } from './blackcard.jsx';
import { WhiteCards } from './whitecards.jsx';
import Utils from './localstate';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            started: false,
            joined: false,
            players: [],
            gameCard: {},
            whiteCards: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.joinGame = this.joinGame.bind(this);
        this.startStopGame = this.startStopGame.bind(this);
    }
    gameConnection
    resetClient(component) {
        if (component === undefined) component = this;
        component.setState(Utils.setMultiple({
            joined: false,
            players: [],
            started: false,
            whiteCards: [],
            gameCard: {}
        }));
    }
    setupHub() {
        var transportType = signalR.TransportType.WebSockets;
        //can also be ServerSentEvents or LongPolling
        var logger = new signalR.ConsoleLogger(signalR.LogLevel.Error);
        var gameHub = new signalR.HttpConnection(`${document.location.protocol}//${document.location.host}/game`, {
            transport: transportType,
            logger: logger
        });
        this.gameConnection = new signalR.HubConnection(gameHub, logger);

        this.gameConnection.onClosed = e => {
            console.log('Connection closed');
        };


        this.gameConnection.on('PlayerJoined', (playerList) => {
            this.setState(Utils.setPlayerList(playerList));
        });

        this.gameConnection.on('PlayerLeft', (playerList) => {
            this.setState(Utils.setPlayerList(playerList));
        });

        this.gameConnection.on('GameStarted', (gameState) => this.setState(Utils.setMultiple({ started: gameState.started, gameCard: gameState.gameCard })));
        this.gameConnection.on('GameStopped', () => this.setState(Utils.setMultiple({ started: false, gameCard: {} })));

        this.gameConnection.start().then(() => this.gameConnection.invoke('JoinGame', this.state.playerName).then(result => {
            
            this.setState(Utils.setMultiple({
                joined: result.joined,
                started: result.gameState.started,
                whiteCards: result.whiteCards
            }));
        }), err => {
            console.log('Connection error');
        });
    }
    componentDidMount() {

    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    joinGame(event) {
        event.preventDefault();        
        if (this.state.joined === false) {           
                Utils.setPlayerName(this.state.playerName);
                this.setupHub();            
        } else {
            var that = this;
            this.gameConnection.invoke('LeaveGame').then(() => {
                that.resetClient();
                this.gameConnection.stop().catch(err => console.log(`Error closing connection ${err}`));
            }, (event) => that.resetClient(that));
        }
    }

    startStopGame(event) {
        event.preventDefault();
        if (this.state.started) {
            this.gameConnection.invoke('StopGame');
        } else {
            this.gameConnection.invoke('StartGame');
        }
    }

    render() {
        const playerName = this.state.playerName;
        const players = this.state.players;
        const isJoined = this.state.joined;
        const isStarted = this.state.started;
        const blackCard = this.state.gameCard;
        return <div className="row" >
            <div className="col-md-12 col-lg">
                <Login joined={isJoined} started={isStarted} onJoin={this.joinGame} playerName={playerName} handleInput={this.handleInputChange} startStopGame={this.startStopGame} />
                <Players players={players} />
            </div>
            <div className="col-md-12 col-lg">
                <BlackCard blackCard={blackCard} />
            </div>
            <div className="w-100 d-lg-none d-md-block"></div>
            <div className="col-md-12 col-lg-8">
                <div className="row">

                </div>
            </div>
        </div>;
    }
}