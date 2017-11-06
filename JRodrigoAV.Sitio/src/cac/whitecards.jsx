import { WhiteCard } from './whitecard.jsx';


export class WhiteCards extends React.Component {
    constructor(props) {
        super(props);
        this.selectCard = this.selectCard.bind(this);
    }
    selectCard(card) {        
        this.props.whiteCardSelected(card);
    }
    render() {
        const cards = this.props.cards;
        const pick = this.props.blackcard.pick;
        let leftCol = null;
        let rightCol = null;
        let result = null;
        if (cards.length) {
            rightCol = cards.map((card, i) => {
                if (i > 4) {
                    return <WhiteCard key={card.id} card={card} onCardSelected={this.selectCard} />;
                }
            });
            leftCol = cards.map((card, i) => {
                if (i <= 4) {
                    return <WhiteCard key={card.id} card={card} onCardSelected={this.selectCard} />;
                }
            });
            result = <div className="row">
                <h4 className="col-12">Pick {pick} cards</h4>
                <div className="col">
                    <ul className="list-group">
                        {leftCol}
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-group">
                        {rightCol}
                    </ul>
                </div>
            </div>;
        }
        else {
            result = <h3>No white cards.</h3>;
        }
        return <div className="col">
            {result}
        </div>;

    }
}