export class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const playerName = this.props.playerName;
        const isJoined = this.props.joined;
        let renderResult = null;
        const isStarted = this.props.started;
        const startButton = <button type="button" className="btn btn-success btn-sm" onClick={this.props.startStopGame}>Start Game</button>;
        const stopButon = <button type="button" className="btn btn-danger btn-sm" onClick={this.props.startStopGame}>Stop Game</button>;
        let gameButton = startButton;
        if (isStarted) {
            gameButton = stopButon;
        }
        if (!isJoined) {
            renderResult = <form onSubmit={this.props.onJoin}>
                <input name="playerName" placeholder="Player Name" type="text" className="form-control" value={playerName} onChange={this.props.handleInput} required />
                <button type="submit" className="btn btn-default">Join</button>                
            </form>
        } else {
            renderResult = <form onSubmit={this.props.onJoin}>
                <div className="form-group">
                    <label className="control-label">Welcome {playerName}</label>&nbsp;
                    <button type="submit" className="btn btn-default btn-sm">Leave</button>&nbsp;
                    {gameButton}
                </div>
            </form>;
        }
        return renderResult;
    }
}