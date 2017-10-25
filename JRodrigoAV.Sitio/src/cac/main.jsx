"use strict";
var signalR = require('@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final');
//import React from 'react';
import { render } from 'react-dom';
//import axios from 'axios';
import { Players } from './players.jsx';
import { Login } from './login.jsx';
import { BlackCard } from './blackcard.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            gameStarted: false,
            joined: false,
            players: [],
            gameCard: {}
        };
        this.joinGame = this.joinGame.bind(this);
        this.startStopGame = this.startStopGame.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    gameConnection
    setupHub() {
        var transportType = signalR.TransportType.WebSockets;
        //can also be ServerSentEvents or LongPolling
        var logger = new signalR.ConsoleLogger(signalR.LogLevel.Information);
        var gameHub = new signalR.HttpConnection(`http://${document.location.host}/game`, {
            transport: transportType,
            logger: logger
        });
        this.gameConnection = new signalR.HubConnection(gameHub, logger);

        this.gameConnection.onClosed = e => {
            console.log('Connection closed');
        };

        this.gameConnection.on('PlayerJoined', (playerList) => {
            //console.log(`Player ${playerName} joined the game.`);            
            this.setState({
                players: playerList
            });
        });

        this.gameConnection.on('PlayerLeft', (playerList) => {
            //console.log(`Player ${playerName} left the game.`);            
            this.setState({
                players: playerList
            });
        });

        this.gameConnection.on('GameStarted', (gameState) => this.setState({ gameStarted: gameState.started, gameCard: gameState.gameCard }));
        this.gameConnection.on('GameStopped', () => this.setState({ gameStarted: false, gameCard: {} }));

        this.gameConnection.start().then(() => this.gameConnection.invoke('JoinGame', this.state.playerName).then(result => {
            //console.log(result);
            this.setState({
                joined: result.joined,
                gameStarted: result.gameState.started
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
        if (this.state.joined === false) {
            if (typeof (this.state.playerName) === "string") {
                this.setupHub();
            }
        } else {
            this.gameConnection.invoke('LeaveGame').then(() => {
                this.setState({
                    joined: false,
                    players: []
                });
                this.gameConnection.stop().catch(err => console.log(`Error closing connection ${err}`));
            });
        }

    }

    startStopGame(event) {
        event.preventDefault();
        if (this.state.gameStarted) {
            this.gameConnection.invoke('StopGame');
        } else {
            this.gameConnection.invoke('StartGame');
        }
    }

    render() {
        const isJoined = this.state.joined;
        const isStarted = this.state.gameStarted;
        const playerName = this.state.playerName;
        const players = this.state.players;
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
            <div className="col-md-12 col-lg-8">Hi</div>
        </div>;
    }
}

render(<App />, document.getElementById('app'));