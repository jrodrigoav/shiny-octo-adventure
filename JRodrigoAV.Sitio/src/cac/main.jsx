"use strict";
var signalR = require('@aspnet/signalr-client/dist/browser/signalr-client-1.0.0-alpha2-final');
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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    gameConnection
    componentDidMount() {
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
            console.log(`Player ${playerName} joined the game.`);
            var players = this.state.players.slice(0);
            players.push(playerName);
            this.setState({
                players: players
            });
        });

        this.gameConnection.on('PlayerLeft', (playerName) => {
            console.log(`Player ${playerName} left the game.`);
            var playerIndex = this.state.players.indexOf(playerName);            
            var players=this.state.players.slice(0);
            players.splice(playerIndex,1);            
            this.setState({
                players: players
            });
        });

        this.gameConnection.start().catch(err => {
            console.log('Connection error');
        });
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
                this.gameConnection.invoke('JoinGame', this.state.playerName).then(joined => {
                    this.setState({
                        joined: joined
                    });
                });
            }
        } else {
            this.gameConnection.invoke('LeaveGame').then(() => {
                this.setState({
                    joined: false
                });
            });
        }

    }

    render() {
        const isJoined = this.state.joined;
        const playerName = this.state.playerName;
        const players = this.state.players;
        return <div role="main" className="container" >
            <div className="col-xs-12 col-sm-4">
                <Login joined={isJoined} onJoin={this.joinGame} playerName={playerName} handleInput={this.handleInputChange} />
                <Players players={players} />
            </div>
            <div className="col-xs-12 col-sm-8"></div>
        </div>;
    }
}

render(<App />, document.getElementById('app'));