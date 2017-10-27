"use strict";
export let Utils = {
    Counter: 0,
    Text: "Hi",
    incCounter: function () {
        this.Counter++;
    },
    state:function(){
        return {
            Counter:this.Counter,
            Text:this.Text
        };
    }
};