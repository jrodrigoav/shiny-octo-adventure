"use strict";
import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { WhiteCard } from './whitecard.jsx';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blackCard: {},
            whiteCards: [],
            selectedCards: [],
            buildResult: 'Hello World'
        };
        this.selectCard = this.selectCard.bind(this);
        this.sendCards = this.sendCards.bind(this);
        this.theseSuck = this.theseSuck.bind(this);
    }
    selectCard(card) {
        var that = this;
        var cards = that.state.whiteCards.slice(0);
        var selectedCards = that.state.selectedCards.slice(0);
        var pick = that.state.blackCard.pick;
        _.forEach(cards, function (o) {
            if (o.id === card.id) {
                if (o.selected) {
                    o.selected = false;
                    _.remove(selectedCards, function (sc) {
                        return sc === card.id;
                    });
                }
                else if (selectedCards.length < pick) {
                    o.selected = true;
                    selectedCards.push(o.id);
                }
            }
        });
        that.setState({ whiteCards: cards, selectedCards: selectedCards });
    }

    theseSuck(event) {
        var that = this;
        event.preventDefault();
        axios.get('/api/cards/deal').then((response) => that.setState({ whiteCards: response.data, selectedCards: [] }), () => console.log('error deal'));
    }
    sendCards(event) {
        var that = this;
        event.preventDefault();
        if (that.state.selectedCards.length) {
            var payload = {
                Blackcard: that.state.blackCard.id,
                Selectedcards: that.state.selectedCards
            };
            axios.post('/api/cards/build', payload).then((response) => that.setState({ buildResult: response.data }));
            var cards = that.state.whiteCards.slice(0);
            cards.forEach(o => o.selected = false);
            axios.get('/api/cards/black').then((response) => that.setState({ blackCard: response.data, selectedCards: [], whiteCards: cards }), () => console.log('error black'));
        }

    }
    reset() {
        var that = this;
        axios.get('/api/cards/black').then((response) => that.setState({ blackCard: response.data }), () => console.log('error black'));
        axios.get('/api/cards/deal').then((response) => that.setState({ whiteCards: response.data, selectedCards: [] }), () => console.log('error deal'));
    }

    componentDidMount() {
        this.reset();
    }

    render() {
        const blackCard = this.state.blackCard;
        const whiteCards = this.state.whiteCards;
        const buildResultClass = this.state.buildResult ? 'col-12 alert alert-info text-center' : 'col-12 hidden';
        const buildResult = this.state.buildResult;
        let leftCol = null;
        let rightCol = null;
        let WhiteCards = null;
        if (whiteCards.length) {
            rightCol = whiteCards.map((card, i) => {
                if (i > 4) {
                    return <WhiteCard key={card.id} card={card} onCardSelected={this.selectCard} />;
                }
            });
            leftCol = whiteCards.map((card, i) => {
                if (i <= 4) {
                    return <WhiteCard key={card.id} card={card} onCardSelected={this.selectCard} />;
                }
            });
            WhiteCards = <div className="row">
                <p className="col-12">Pick {blackCard.pick} cards</p>
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
        return <div className="row">
            <div className="col-12">
                <div className="card rounded">
                    <div className="card-body bg-dark text-light">
                        {blackCard.text}
                    </div>
                    <button className="btn btn-warning" onClick={this.theseSuck}>These suck</button>
                    <button className="btn btn-primary" onClick={this.sendCards}>Build</button>
                </div>
            </div>
            {WhiteCards}
            <div className={buildResultClass} style={{
                minHeigth: 350 + 'px', paddingTop: 20 + 'px'
            }}>
                < h4 > {buildResult}</h4>
            </div>
        </div >;
    }
}