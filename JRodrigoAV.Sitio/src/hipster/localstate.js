"use strict";
let instance = null;
export class Utils {
    constructor() {
        if (!instance) instance = this;

        this.Time = new Date();
        this.Counter = 0;
        return instance;
    }
    state() {
        return {
            Time: this.Time,
            Counter:this.Counter
        };
    }
    printTime() {
        console.log(this.Time);
    }

    incCounter() {
        this.Counter++;
    }
}