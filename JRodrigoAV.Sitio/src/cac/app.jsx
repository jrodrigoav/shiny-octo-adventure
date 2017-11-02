"use strict";
var signalR = require('@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final');
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Players } from './players.jsx';
import { Login } from './login.jsx';
import { BlackCard } from './blackcard.jsx';
import { WhiteCards } from './whitecards.jsx';
import Utils  from './localstate';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.joinGame = this.joinGame.bind(this);
    }
    gameConnection
    setupHub() {
        var transportType = signalR.TransportType.WebSockets;
        //can also be ServerSentEvents or LongPolling
        var logger = new signalR.ConsoleLogger(signalR.LogLevel.Error);
        var gameHub = new signalR.HttpConnection(`http://${document.location.host}/game`, {
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

        //this.gameConnection.on('GameStarted', (gameState) => this.setState({ gameStarted: gameState.started, gameCard: gameState.gameCard }));
        //this.gameConnection.on('GameStopped', () => this.setState({ gameStarted: false, gameCard: {} }));

        this.gameConnection.start().then(() => this.gameConnection.invoke('JoinGame', this.state.playerName).then(result => {
            //console.log(result);
            this.setState({
                joined: result.joined,
                gameStarted: result.gameState.started,
                whiteCards: result.whiteCards
            });
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
        Utils.setPlayerName(this.state.playerName);   
    }



    render() {        
        const playerName = this.state.playerName;      
        return <div className="row" >
            <div className="col-md-12 col-lg">
                
            </div>
            <div className="col-md-12 col-lg">
            
            </div>
            <div className="w-100 d-lg-none d-md-block"></div>
            <div className="col-md-12 col-lg-8">
                <div className="row">
            
                </div>
            </div>
        </div>;
    }
}