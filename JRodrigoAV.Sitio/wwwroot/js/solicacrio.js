webpackJsonp([1],{54:function(e,t,r){"use strict";(function(e){var t=r(3),a=r(55);(0,t.render)(e.createElement(a.App,null),document.getElementById("app"))}).call(t,r(1))},55:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),s=a(r(1)),i=a(r(8)),u=a(r(14)),d=r(56);t.App=function(e){function t(e){n(this,t);var r=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={blackCard:{},whiteCards:[],selectedCards:[],buildResult:"Hello World"},r.selectCard=r.selectCard.bind(r),r.sendCards=r.sendCards.bind(r),r.theseSuck=r.theseSuck.bind(r),r}return c(t,s.default.Component),o(t,[{key:"selectCard",value:function(e){var t=this,r=t.state.whiteCards.slice(0),a=t.state.selectedCards.slice(0),n=t.state.blackCard.pick;u.default.forEach(r,function(t){t.id===e.id&&(t.selected?(t.selected=!1,u.default.remove(a,function(t){return t===e.id})):a.length<n&&(t.selected=!0,a.push(t.id)))}),t.setState({whiteCards:r,selectedCards:a})}},{key:"theseSuck",value:function(e){var t=this;e.preventDefault(),i.default.get("/api/cards/deal").then(function(e){return t.setState({whiteCards:e.data,selectedCards:[]})},function(){return console.log("error deal")})}},{key:"sendCards",value:function(e){var t=this;if(e.preventDefault(),t.state.selectedCards.length){var r={Blackcard:t.state.blackCard.id,Selectedcards:t.state.selectedCards};i.default.post("/api/cards/build",r).then(function(e){return t.setState({buildResult:e.data})});var a=t.state.whiteCards.slice(0);a.forEach(function(e){return e.selected=!1}),i.default.get("/api/cards/black").then(function(e){return t.setState({blackCard:e.data,selectedCards:[],whiteCards:a})},function(){return console.log("error black")})}}},{key:"reset",value:function(){var e=this;i.default.get("/api/cards/black").then(function(t){return e.setState({blackCard:t.data})},function(){return console.log("error black")}),i.default.get("/api/cards/deal").then(function(t){return e.setState({whiteCards:t.data,selectedCards:[]})},function(){return console.log("error deal")})}},{key:"componentDidMount",value:function(){this.reset()}},{key:"render",value:function(){var e=this,t=this.state.blackCard,r=this.state.whiteCards,a=this.state.buildResult?"col-12 alert alert-info text-center":"col-12 hidden",n=this.state.buildResult,l=null,c=null,o=null;return r.length&&(c=r.map(function(t,r){if(r>4)return s.default.createElement(d.WhiteCard,{key:t.id,card:t,onCardSelected:e.selectCard})}),l=r.map(function(t,r){if(r<=4)return s.default.createElement(d.WhiteCard,{key:t.id,card:t,onCardSelected:e.selectCard})}),o=s.default.createElement("div",{className:"row"},s.default.createElement("p",{className:"col-12"},"Pick ",t.pick," cards"),s.default.createElement("div",{className:"col"},s.default.createElement("ul",{className:"list-group"},l)),s.default.createElement("div",{className:"col"},s.default.createElement("ul",{className:"list-group"},c)))),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-12"},s.default.createElement("div",{className:"card rounded"},s.default.createElement("div",{className:"card-body bg-dark text-light"},t.text),s.default.createElement("button",{className:"btn btn-warning",onClick:this.theseSuck},"These suck"),s.default.createElement("button",{className:"btn btn-primary",onClick:this.sendCards},"Build"))),o,s.default.createElement("div",{className:a,style:{minHeigth:"350px",paddingTop:"20px"}},s.default.createElement("h4",null," ",n)))}}]),t}()},56:function(e,t,r){"use strict";(function(e){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}();t.WhiteCard=function(t){function c(e){r(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return t.selectCard=t.selectCard.bind(t),t}return n(c,e.Component),l(c,[{key:"selectCard",value:function(e){e.preventDefault(),this.props.onCardSelected(this.props.card)}},{key:"render",value:function(){var t="list-group-item";return this.props.card.selected&&(t+=" active"),e.createElement("li",{className:t,onClick:this.selectCard},this.props.card.text)}}]),c}()}).call(t,r(1))}},[54]);
//# sourceMappingURL=solicacrio.js.map