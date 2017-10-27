"use strict";
import { Utils } from './localstate'
import { render } from 'react-dom';
const _Utils = new Utils();
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = _Utils.state();
        this.incCounter = this.incCounter.bind(this);
    }
    componentDidMount() {

    }
    incCounter(event) {
        event.preventDefault();
        _Utils.incCounter();
        this.setState(_Utils.state());
    }
    render() {
        return <div className="row">
            <div className="col">
                <h1>Hi</h1>
                <button type="button" className="btn btn-sm btn-default" onClick={this.incCounter}>{this.state.Counter}</button>
            </div>
        </div>;
    }
}

render(<App />, document.getElementById('app'));