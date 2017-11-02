"use strict";
import { render } from 'react-dom';
import { App } from './app.jsx';
/*
class Old extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: ''
        };
        this.joinGame = this.joinGame.bind(this);
        this.startStopGame = this.startStopGame.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    gameConnection
    resetClient(component) {
        component.setState({
            joined: false,
            players: [],
            gameStarted: false,
            whiteCards: []
        });
    }
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
        if (this.state.joined === false) {
            if (typeof (this.state.playerName) === "string") {
                var utils = new Utils();
                utils.setPlayerName(this.state.playerName);
                this.setupHub();
            }
        } else {
            var that = this;
            this.gameConnection.invoke('LeaveGame').then(() => {
                this.setState({
                    joined: false,
                    players: []
                });
                this.gameConnection.stop().catch(err => console.log(`Error closing connection ${err}`));
            }, (event) => that.resetClient(that));
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
        const utils = new Utils();
        const isJoined = this.state.joined;
        const isStarted = this.state.gameStarted;
        const playerName = utils.playerName;
        const players = this.state.players;
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
                    <WhiteCards cards={whiteCards} />
                </div>
            </div>
        </div>;
    }
}
*/
render(<App />, document.getElementById('app'));