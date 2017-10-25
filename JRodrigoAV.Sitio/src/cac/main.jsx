"use strict";
//var signalR = require('@aspnet/signalr-client/dist/browser/signalr-client-1.0.0-alpha2-final');
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Login, Players } from './players.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            gameStarted: false,
            joined: false,
            players: []
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

        this.gameConnection.on('PlayerJoined', (playerName) => {
            //console.log(`Player ${playerName} joined the game.`);
            var players = this.state.players.slice(0);
            players.push(playerName);
            this.setState({
                players: players
            });
        });

        this.gameConnection.on('PlayerLeft', (playerName) => {
            //console.log(`Player ${playerName} left the game.`);
            var playerIndex = this.state.players.indexOf(playerName);
            var players = this.state.players.slice(0);
            players.splice(playerIndex, 1);
            this.setState({
                players: players
            });
        });

        this.gameConnection.on('GameStarted',()=>this.setState({gameStarted:true}));
        this.gameConnection.on('GameStopped',()=>this.setState({gameStarted:false}));

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
                    players:[]
                });
                this.gameConnection.stop().catch(err => console.log(`Error closing connection ${err}`));
            });
        }

    }

    startStopGame(event){
        event.preventDefault();
        if(this.state.gameStarted)
        {
            this.gameConnection.invoke('StopGame');
        }else{
            this.gameConnection.invoke('StartGame');
        }
    }

    render() {
        const isJoined = this.state.joined;
        const isStarted = this.state.gameStarted;
        const playerName = this.state.playerName;
        const players = this.state.players;
        return <div role="main" className="container" >
            <div className="col-xs-12 col-sm-4">
                <Login joined={isJoined} started={isStarted} onJoin={this.joinGame} playerName={playerName} handleInput={this.handleInputChange} startStopGame={this.startStopGame} />
                <Players players={players} />
            </div>
            <div className="col-xs-12 col-sm-8"></div>
        </div>;
    }
}

render(<App />, document.getElementById('app'));