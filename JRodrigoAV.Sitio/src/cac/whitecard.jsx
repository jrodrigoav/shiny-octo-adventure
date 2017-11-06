export class WhiteCard extends React.Component {
    constructor(props) {
        super(props);
        this.selectCard = this.selectCard.bind(this);
    }
    selectCard(event) {
        event.preventDefault();
        this.props.onCardSelected(this.props.card);
    }
    render() {
        let cardClasslist = 'list-group-item'
        if (this.props.card.selected) {
            cardClasslist = cardClasslist + ' active';
        }
        return <li className={cardClasslist} onClick={this.selectCard}>{this.props.card.text}</li>;
    }
}