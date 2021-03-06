"use strict";
let instance = null;
class Utils{
    constructor() {
        if (!instance) instance = this;  
        this._state = {
            playerName: '',
            started:false,
            joined: false,
            players:[],
            gameCard:{},
            whiteCards: []
        };
        return instance;
    }
    setMultiple(propertiesObject = {}) {
        this._state = Object.assign({}, this._state, propertiesObject);          
        return this.state();
    }

    setPlayerName(playerName = '') {
        if (typeof (playerName) === 'string' && playerName) {
           this.setMultiple({
                playerName: playerName
            });               
        }
        return this.state();
    }

    setPlayerList(playerList = []) {
        this.setMultiple({
            players: playerList
        });  
        return this.state();
    }

    state() {
        return this._state;
    }
}

export default (new Utils);