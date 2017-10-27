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
