"use strict";
var signalR = require('@aspnet/signalr-client/dist/browser/signalr-clientES5-1.0.0-alpha2-final');
import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import _ from 'lodash';
import { Players } from './players.jsx';
import { Login } from './login.jsx';
import { BlackCard } from './blackcard.jsx';
import { WhiteCards } from './whitecards.jsx';
//import Utils from './localstate';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            started: false,
            joined: false,
            players: [],
            gameCard: {},
            whiteCards: [],
            selectedCards: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.joinGame = this.joinGame.bind(this);
        this.startStopGame = this.startStopGame.bind(this);
        this.selectCard = this.selectCard.bind(this);
    }
    gameConnection
    resetClient(component) {
        if (component === undefined) component = this;
        component.setState({
            joined: false,
            players: [],
            started: false,
            whiteCards: [],
            selectedCards: [],
            gameCard: {}
        });
    }
    setupHub() {
        var transportType = signalR.TransportType.WebSockets;
        //can also be ServerSentEvents or LongPolling
        var logger = new signalR.ConsoleLogger(signalR.LogLevel.Error);
        var gameHub = new signalR.HttpConnection(`${document.location.protocol}//${document.location.host}/game`, {
            transport: transportType,
            logger: logger
        });
        var that = this;
        this.gameConnection = new signalR.HubConnection(gameHub, logger);

        that.gameConnection.onClosed = e => {
            console.log('Connection closed');
        };


        that.gameConnection.on('PlayerJoined', (playerList) => {
            that.setState({ players: playerList });
        });

        that.gameConnection.on('PlayerLeft', (playerList) => {
            that.setState({ players: playerList });
        });

        that.gameConnection.on('GameStarted', (gameState) => that.setState({ started: gameState.started, gameCard: gameState.gameCard }));
        that.gameConnection.on('GameStopped', () => that.setState({ started: false, gameCard: {} }));


        that.gameConnection.start().then(() => that.gameConnection.invoke('JoinGame', that.state.playerName).then(result => {

            that.setState({
                joined: result.joined,
                started: result.gameState.started,
                whiteCards: result.whiteCards,
                selectedCards: []
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

    selectCard(card) {
        var that = this;
        var cards = that.state.whiteCards.slice(0);
        var selectedCards = that.state.selectedCards.slice(0);
        var pick = that.state.gameCard.pick;
        _.forEach(cards, function (o) {
            if (o.id === card.id) {
                if (o.selected) {
                    o.selected = false;
                    _.remove(selectedCards, function (sc) {
                        return sc === card.id;
                    });
                }
                else if (selectedCards.length < pick) {
                    o.selected = true;
                    selectedCards.push(o.id);
                }
            }
        });
        that.setState({ whiteCards: cards, selectedCards: selectedCards });
    }

    render() {
        const playerName = this.state.playerName;
        const players = this.state.players;
        const isJoined = this.state.joined;
        const isStarted = this.state.started;
        const blackCard = this.state.gameCard;
        const whiteCards = this.state.whiteCards;
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
                    <WhiteCards cards={whiteCards} blackcard={blackCard} whiteCardSelected={this.selectCard} />                    
                </div>
            </div>
        </div>;
    }
}