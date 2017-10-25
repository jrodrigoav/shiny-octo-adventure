import React from 'react';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let playerName = this.props.playerName;
        let isJoined = this.props.joined;
        let players = null;
        if (!isJoined) {
            players = <form onSubmit={this.props.onJoin}>
                <input name="playerName" placeholder="Player Name" type="text" className="form-control" value={playerName} onChange={this.props.handleInput} required />
                <button type="submit" className="btn btn-default">Join</button>
            </form>
        } else {
            players = <form onSubmit={this.props.onJoin}>
                <div className="form-group">
                    <label className="control-label">Welcome {playerName}</label>&nbsp;
                    <button type="submit" className="btn btn-default btn-sm">Leave</button>
                </div>
            </form>;
        }
        return players;
    }
}

export class Players extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let names = this.props.players;
        let result = null;
        if (names.length) {
            result = <ul>
                {names.map((name) => <li key={name}>{name}</li>)}
            </ul>;
        }
        else {
            result = <span className="text text-info">Nobody is playing</span>
        }
        return result;
    }
}
