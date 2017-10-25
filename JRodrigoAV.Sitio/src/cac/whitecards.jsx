export class WhiteCards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const cards = this.props.cards;
        let result = null;
        if (cards.length) {
            result = cards.map(card => <li className="list-group-item" key={card.id}>{card.text}</li>);
        }
        else {
            result = <li></li>;
        }
        return <div className="col">
            <ul className="list-group">
                {result}
            </ul>
        </div>;

    }
}