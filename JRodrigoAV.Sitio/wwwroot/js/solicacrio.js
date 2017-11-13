webpackJsonp([1],{

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _reactDom = __webpack_require__(10);

var _app = __webpack_require__(69);

(0, _reactDom.render)(React.createElement(_app.App, null), document.getElementById('app'));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(18);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(24);

var _lodash2 = _interopRequireDefault(_lodash);

var _whitecard = __webpack_require__(70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = exports.App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            blackCard: {},
            whiteCards: [],
            selectedCards: [],
            buildResult: 'Hello World'
        };
        _this.selectCard = _this.selectCard.bind(_this);
        _this.sendCards = _this.sendCards.bind(_this);
        _this.theseSuck = _this.theseSuck.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'selectCard',
        value: function selectCard(card) {
            var that = this;
            var cards = that.state.whiteCards.slice(0);
            var selectedCards = that.state.selectedCards.slice(0);
            var pick = that.state.blackCard.pick;
            _lodash2.default.forEach(cards, function (o) {
                if (o.id === card.id) {
                    if (o.selected) {
                        o.selected = false;
                        _lodash2.default.remove(selectedCards, function (sc) {
                            return sc === card.id;
                        });
                    } else if (selectedCards.length < pick) {
                        o.selected = true;
                        selectedCards.push(o.id);
                    }
                }
            });
            that.setState({ whiteCards: cards, selectedCards: selectedCards });
        }
    }, {
        key: 'theseSuck',
        value: function theseSuck(event) {
            var that = this;
            event.preventDefault();
            _axios2.default.get('/api/cards/deal').then(function (response) {
                return that.setState({ whiteCards: response.data, selectedCards: [] });
            }, function () {
                return console.log('error deal');
            });
        }
    }, {
        key: 'sendCards',
        value: function sendCards(event) {
            var that = this;
            event.preventDefault();
            if (that.state.selectedCards.length) {
                var payload = {
                    Blackcard: that.state.blackCard.id,
                    Selectedcards: that.state.selectedCards
                };
                _axios2.default.post('/api/cards/build', payload).then(function (response) {
                    return that.setState({ buildResult: response.data });
                });
                var cards = that.state.whiteCards.slice(0);
                cards.forEach(function (o) {
                    return o.selected = false;
                });
                _axios2.default.get('/api/cards/black').then(function (response) {
                    return that.setState({ blackCard: response.data, selectedCards: [], whiteCards: cards });
                }, function () {
                    return console.log('error black');
                });
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            var that = this;
            _axios2.default.get('/api/cards/black').then(function (response) {
                return that.setState({ blackCard: response.data });
            }, function () {
                return console.log('error black');
            });
            _axios2.default.get('/api/cards/deal').then(function (response) {
                return that.setState({ whiteCards: response.data, selectedCards: [] });
            }, function () {
                return console.log('error deal');
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.reset();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var blackCard = this.state.blackCard;
            var whiteCards = this.state.whiteCards;
            var buildResultClass = this.state.buildResult ? 'col-12 alert alert-info text-center' : 'col-12 hidden';
            var buildResult = this.state.buildResult;
            var leftCol = null;
            var rightCol = null;
            var WhiteCards = null;
            if (whiteCards.length) {
                rightCol = whiteCards.map(function (card, i) {
                    if (i > 4) {
                        return _react2.default.createElement(_whitecard.WhiteCard, { key: card.id, card: card, onCardSelected: _this2.selectCard });
                    }
                });
                leftCol = whiteCards.map(function (card, i) {
                    if (i <= 4) {
                        return _react2.default.createElement(_whitecard.WhiteCard, { key: card.id, card: card, onCardSelected: _this2.selectCard });
                    }
                });
                WhiteCards = _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'p',
                        { className: 'col-12' },
                        'Pick ',
                        blackCard.pick,
                        ' cards'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'list-group' },
                            leftCol
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'list-group' },
                            rightCol
                        )
                    )
                );
            }
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'card rounded' },
                        _react2.default.createElement(
                            'div',
                            { className: 'card-body bg-dark text-light' },
                            blackCard.text
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-warning', onClick: this.theseSuck },
                            'These suck'
                        ),
                        _react2.default.createElement(
                            'button',
                            { className: 'btn btn-primary', onClick: this.sendCards },
                            'Build'
                        )
                    )
                ),
                WhiteCards,
                _react2.default.createElement(
                    'div',
                    { className: buildResultClass, style: {
                            minHeigth: 350 + 'px', paddingTop: 20 + 'px'
                        } },
                    _react2.default.createElement(
                        'h4',
                        null,
                        ' ',
                        buildResult
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WhiteCard = exports.WhiteCard = function (_React$Component) {
    _inherits(WhiteCard, _React$Component);

    function WhiteCard(props) {
        _classCallCheck(this, WhiteCard);

        var _this = _possibleConstructorReturn(this, (WhiteCard.__proto__ || Object.getPrototypeOf(WhiteCard)).call(this, props));

        _this.selectCard = _this.selectCard.bind(_this);
        return _this;
    }

    _createClass(WhiteCard, [{
        key: 'selectCard',
        value: function selectCard(event) {
            event.preventDefault();
            this.props.onCardSelected(this.props.card);
        }
    }, {
        key: 'render',
        value: function render() {
            var cardClasslist = 'list-group-item';
            if (this.props.card.selected) {
                cardClasslist = cardClasslist + ' active';
            }
            return React.createElement(
                'li',
                { className: cardClasslist, onClick: this.selectCard },
                this.props.card.text
            );
        }
    }]);

    return WhiteCard;
}(React.Component);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[68]);