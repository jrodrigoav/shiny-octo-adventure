"use strict";
import { render } from 'react-dom';
import { App } from './app.jsx';
/*
class Old extends React.Component {
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