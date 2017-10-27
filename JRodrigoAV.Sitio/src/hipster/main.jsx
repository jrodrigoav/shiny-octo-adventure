"use strict";
import { Utils } from './localstate'
import { render } from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedState: Utils.state()
        };
        this.incCounter=this.incCounter.bind(this);
    }
    componentDidMount() {
        
    }
    incCounter(event){
        event.preventDefault();
        Utils.incCounter();        
        this.setState({
            sharedState:Utils.state()
        });
    }
    render() {
        return <div className="row">
            <div className="col">
                <h1>Hi</h1>
                <button type="button" onClick={this.incCounter}>{this.state.sharedState.Counter}</button>
            </div>
        </div>;
    }
}

render(<App />, document.getElementById('app'));