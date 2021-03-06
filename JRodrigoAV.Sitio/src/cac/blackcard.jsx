
export class BlackCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const blackCard = this.props.blackCard;
        let result = null;
        if (blackCard.id) {
            result = blackCard.text;
        }
        else {
            result = blackCard.text ? blackCard.text : 'N/A';
        }
        return <div className="card">
            <div className="card-body text-light bg-dark rounded">
                {result}
            </div>
        </div>;
    }
}