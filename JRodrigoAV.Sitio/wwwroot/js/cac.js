/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"cac": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/cac/main.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cac/app.jsx":
/*!*************************!*\
  !*** ./src/cac/app.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _players = __webpack_require__(/*! ./players.jsx */ \"./src/cac/players.jsx\");\n\nvar _login = __webpack_require__(/*! ./login.jsx */ \"./src/cac/login.jsx\");\n\nvar _blackcard = __webpack_require__(/*! ./blackcard.jsx */ \"./src/cac/blackcard.jsx\");\n\nvar _whitecards = __webpack_require__(/*! ./whitecards.jsx */ \"./src/cac/whitecards.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar signalR = __webpack_require__(/*! @aspnet/signalr */ \"./node_modules/@aspnet/signalr/dist/esm/index.js\");\n\n//import Utils from './localstate';\n\nvar App = exports.App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            playerName: '',\n            started: false,\n            joined: false,\n            players: [],\n            gameCard: {},\n            whiteCards: [],\n            selectedCards: [],\n            votes: []\n        };\n        _this.handleInputChange = _this.handleInputChange.bind(_this);\n        _this.joinGame = _this.joinGame.bind(_this);\n        _this.startStopGame = _this.startStopGame.bind(_this);\n        _this.selectCard = _this.selectCard.bind(_this);\n        _this.sendCards = _this.sendCards.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'resetClient',\n        value: function resetClient(component) {\n            if (component === undefined) component = this;\n            component.setState({\n                joined: false,\n                players: [],\n                started: false,\n                whiteCards: [],\n                selectedCards: [],\n                gameCard: {},\n                votes: []\n            });\n        }\n    }, {\n        key: 'setupHub',\n        value: function setupHub() {\n            var transportType = signalR.HttpTransportType.WebSockets;\n            //can also be ServerSentEvents or LongPolling        \n            var that = this;\n            that.gameConnection = new signalR.HubConnectionBuilder().withUrl(document.location.protocol + '//' + document.location.host + '/game', {\n                transport: transportType\n            }).build();\n\n            that.gameConnection.onClosed = function (e) {\n                console.log('Connection closed');\n            };\n\n            that.gameConnection.on('PlayerJoined', function (playerList) {\n                that.setState({ players: playerList });\n            });\n\n            that.gameConnection.on('PlayerLeft', function (playerList) {\n                that.setState({ players: playerList });\n            });\n\n            that.gameConnection.on('GameStarted', function (gameState) {\n                return that.setState({ started: gameState.started, gameCard: gameState.gameCard });\n            });\n            that.gameConnection.on('GameStopped', function () {\n                return that.setState({ started: false, gameCard: {}, votes: [] });\n            });\n            that.gameConnection.on('ReceiveCards', function (cards) {\n                var shuffledCards = _lodash2.default.shuffle(that.state.whiteCards.slice(0).concat(cards));\n                that.setState({ whiteCards: shuffledCards });\n            });\n            that.gameConnection.on('ReceiveChoices', function (votes) {\n                return that.setState({ votes: votes, gameCard: { text: 'Time to vote!' } });\n            });\n\n            that.gameConnection.start().then(function () {\n                return that.gameConnection.invoke('JoinGame', that.state.playerName).then(function (result) {\n\n                    that.setState({\n                        joined: result.joined,\n                        started: result.gameState.started,\n                        whiteCards: result.whiteCards,\n                        selectedCards: []\n                    });\n                });\n            }, function (err) {\n                console.log('Connection error');\n            });\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {}\n    }, {\n        key: 'handleInputChange',\n        value: function handleInputChange(event) {\n            var target = event.target;\n            var value = target.type === 'checkbox' ? target.checked : target.value;\n            var name = target.name;\n\n            this.setState(_defineProperty({}, name, value));\n        }\n    }, {\n        key: 'joinGame',\n        value: function joinGame(event) {\n            event.preventDefault();\n            if (this.state.joined === false) {\n                this.setupHub();\n            } else {\n                var that = this;\n                that.gameConnection.invoke('LeaveGame').then(function () {\n                    that.resetClient();\n                    that.gameConnection.stop().catch(function (err) {\n                        return console.log('Error closing connection ' + err);\n                    });\n                }, function (event) {\n                    return that.resetClient(that);\n                });\n            }\n        }\n    }, {\n        key: 'startStopGame',\n        value: function startStopGame(event) {\n            event.preventDefault();\n            if (this.state.started) {\n                this.gameConnection.invoke('StopGame');\n            } else {\n                this.gameConnection.invoke('StartGame');\n            }\n        }\n    }, {\n        key: 'selectCard',\n        value: function selectCard(card) {\n            var that = this;\n            var cards = that.state.whiteCards.slice(0);\n            var selectedCards = that.state.selectedCards.slice(0);\n            var pick = that.state.gameCard.pick;\n            _lodash2.default.forEach(cards, function (o) {\n                if (o.id === card.id) {\n                    if (o.selected) {\n                        o.selected = false;\n                        _lodash2.default.remove(selectedCards, function (sc) {\n                            return sc === card.id;\n                        });\n                    } else if (selectedCards.length < pick) {\n                        o.selected = true;\n                        selectedCards.push(o.id);\n                    }\n                }\n            });\n            that.setState({ whiteCards: cards, selectedCards: selectedCards });\n        }\n    }, {\n        key: 'sendCards',\n        value: function sendCards(event) {\n            event.preventDefault();\n            var that = this;\n            var selectedCards = that.state.selectedCards.slice(0);\n            var cards = that.state.whiteCards.slice(0);\n            _lodash2.default.remove(cards, function (c) {\n                return c.selected;\n            });\n            that.setState({ whiteCards: cards, selectedCards: [] });\n            that.gameConnection.invoke(\"SendCards\", that.state.selectedCards);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var playerName = this.state.playerName;\n            var players = this.state.players;\n            var isJoined = this.state.joined;\n            var isStarted = this.state.started;\n            var blackCard = this.state.gameCard;\n            var whiteCards = this.state.whiteCards;\n            var votes = null;\n            if (this.state.votes.length) {\n                votes = this.state.votes.map(function (v) {\n                    return _react2.default.createElement(\n                        'li',\n                        { key: v.key },\n                        v.value,\n                        ' ',\n                        _react2.default.createElement(\n                            'button',\n                            { className: 'btn btn-sm btn-info' },\n                            _react2.default.createElement('i', { className: 'fa fa-thumbs-up', 'aria-hidden': 'true' })\n                        )\n                    );\n                });\n            }\n            var sendCards = null;\n            if (isStarted && blackCard.pick) {\n                sendCards = _react2.default.createElement(\n                    'div',\n                    { className: 'col-12' },\n                    _react2.default.createElement(\n                        'h4',\n                        { className: 'text-info' },\n                        'Pick ',\n                        blackCard.pick,\n                        ' cards ',\n                        _react2.default.createElement(\n                            'button',\n                            { className: 'btn btn-success', onClick: this.sendCards },\n                            'Send'\n                        )\n                    )\n                );\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg' },\n                    _react2.default.createElement(_login.Login, { joined: isJoined, started: isStarted, onJoin: this.joinGame, playerName: playerName, handleInput: this.handleInputChange, startStopGame: this.startStopGame }),\n                    _react2.default.createElement(_players.Players, { players: players })\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg' },\n                    _react2.default.createElement(_blackcard.BlackCard, { blackCard: blackCard })\n                ),\n                _react2.default.createElement('div', { className: 'w-100 d-lg-none d-md-block' }),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-md-12 col-lg-8' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'row' },\n                        sendCards,\n                        _react2.default.createElement(_whitecards.WhiteCards, { cards: whiteCards, blackcard: blackCard, whiteCardSelected: this.selectCard })\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'row' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'col' },\n                            _react2.default.createElement(\n                                'h4',\n                                { className: 'text-info' },\n                                'Respuestas'\n                            ),\n                            _react2.default.createElement(\n                                'ul',\n                                null,\n                                votes\n                            )\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n//# sourceURL=webpack:///./src/cac/app.jsx?");

/***/ }),

/***/ "./src/cac/blackcard.jsx":
/*!*******************************!*\
  !*** ./src/cac/blackcard.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BlackCard = exports.BlackCard = function (_React$Component) {\n    _inherits(BlackCard, _React$Component);\n\n    function BlackCard(props) {\n        _classCallCheck(this, BlackCard);\n\n        return _possibleConstructorReturn(this, (BlackCard.__proto__ || Object.getPrototypeOf(BlackCard)).call(this, props));\n    }\n\n    _createClass(BlackCard, [{\n        key: \"render\",\n        value: function render() {\n            var blackCard = this.props.blackCard;\n            var result = null;\n            if (blackCard.id) {\n                result = blackCard.text;\n            } else {\n                result = blackCard.text ? blackCard.text : 'N/A';\n            }\n            return React.createElement(\n                \"div\",\n                { className: \"card\" },\n                React.createElement(\n                    \"div\",\n                    { className: \"card-body text-light bg-dark rounded\" },\n                    result\n                )\n            );\n        }\n    }]);\n\n    return BlackCard;\n}(React.Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/cac/blackcard.jsx?");

/***/ }),

/***/ "./src/cac/login.jsx":
/*!***************************!*\
  !*** ./src/cac/login.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = exports.Login = function (_React$Component) {\n    _inherits(Login, _React$Component);\n\n    function Login(props) {\n        _classCallCheck(this, Login);\n\n        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n    }\n\n    _createClass(Login, [{\n        key: \"render\",\n        value: function render() {\n            var playerName = this.props.playerName;\n            var isJoined = this.props.joined;\n            var renderResult = null;\n            var isStarted = this.props.started;\n            var startButton = React.createElement(\n                \"button\",\n                { type: \"button\", className: \"btn btn-success btn-sm\", onClick: this.props.startStopGame },\n                \"Start Game\"\n            );\n            var stopButon = React.createElement(\n                \"button\",\n                { type: \"button\", className: \"btn btn-danger btn-sm\", onClick: this.props.startStopGame },\n                \"Stop Game\"\n            );\n            var gameButton = startButton;\n            if (isStarted) {\n                gameButton = stopButon;\n            }\n            if (!isJoined) {\n                renderResult = React.createElement(\n                    \"form\",\n                    { onSubmit: this.props.onJoin },\n                    React.createElement(\"input\", { name: \"playerName\", placeholder: \"Player Name\", type: \"text\", className: \"form-control\", value: playerName, onChange: this.props.handleInput, required: true }),\n                    React.createElement(\n                        \"button\",\n                        { type: \"submit\", className: \"btn btn-default\" },\n                        \"Join\"\n                    )\n                );\n            } else {\n                renderResult = React.createElement(\n                    \"form\",\n                    { onSubmit: this.props.onJoin },\n                    React.createElement(\n                        \"div\",\n                        { className: \"form-group\" },\n                        React.createElement(\n                            \"label\",\n                            { className: \"control-label\" },\n                            \"Welcome \",\n                            playerName\n                        ),\n                        \"\\xA0\",\n                        React.createElement(\n                            \"button\",\n                            { type: \"submit\", className: \"btn btn-default btn-sm\" },\n                            \"Leave\"\n                        ),\n                        \"\\xA0\",\n                        gameButton\n                    )\n                );\n            }\n            return renderResult;\n        }\n    }]);\n\n    return Login;\n}(React.Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/cac/login.jsx?");

/***/ }),

/***/ "./src/cac/main.jsx":
/*!**************************!*\
  !*** ./src/cac/main.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _app = __webpack_require__(/*! ./app.jsx */ \"./src/cac/app.jsx\");\n\n(0, _reactDom.render)(React.createElement(_app.App, null), document.getElementById('app'));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/cac/main.jsx?");

/***/ }),

/***/ "./src/cac/players.jsx":
/*!*****************************!*\
  !*** ./src/cac/players.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Players = exports.Players = function (_React$Component) {\n    _inherits(Players, _React$Component);\n\n    function Players(props) {\n        _classCallCheck(this, Players);\n\n        return _possibleConstructorReturn(this, (Players.__proto__ || Object.getPrototypeOf(Players)).call(this, props));\n    }\n\n    _createClass(Players, [{\n        key: \"render\",\n        value: function render() {\n            var names = this.props.players;\n            var result = null;\n            if (names.length) {\n                result = React.createElement(\n                    \"ul\",\n                    null,\n                    names.map(function (name) {\n                        return React.createElement(\n                            \"li\",\n                            { key: name },\n                            name\n                        );\n                    })\n                );\n            } else {\n                result = React.createElement(\n                    \"span\",\n                    { className: \"text text-info\" },\n                    \"Nobody is playing\"\n                );\n            }\n            return result;\n        }\n    }]);\n\n    return Players;\n}(React.Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/cac/players.jsx?");

/***/ }),

/***/ "./src/cac/whitecard.jsx":
/*!*******************************!*\
  !*** ./src/cac/whitecard.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WhiteCard = exports.WhiteCard = function (_React$Component) {\n    _inherits(WhiteCard, _React$Component);\n\n    function WhiteCard(props) {\n        _classCallCheck(this, WhiteCard);\n\n        var _this = _possibleConstructorReturn(this, (WhiteCard.__proto__ || Object.getPrototypeOf(WhiteCard)).call(this, props));\n\n        _this.selectCard = _this.selectCard.bind(_this);\n        return _this;\n    }\n\n    _createClass(WhiteCard, [{\n        key: 'selectCard',\n        value: function selectCard(event) {\n            event.preventDefault();\n            this.props.onCardSelected(this.props.card);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var cardClasslist = 'list-group-item';\n            if (this.props.card.selected) {\n                cardClasslist = cardClasslist + ' active';\n            }\n            return React.createElement(\n                'li',\n                { className: cardClasslist, onClick: this.selectCard },\n                this.props.card.text\n            );\n        }\n    }]);\n\n    return WhiteCard;\n}(React.Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/cac/whitecard.jsx?");

/***/ }),

/***/ "./src/cac/whitecards.jsx":
/*!********************************!*\
  !*** ./src/cac/whitecards.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.WhiteCards = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _whitecard = __webpack_require__(/*! ./whitecard.jsx */ \"./src/cac/whitecard.jsx\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WhiteCards = exports.WhiteCards = function (_React$Component) {\n    _inherits(WhiteCards, _React$Component);\n\n    function WhiteCards(props) {\n        _classCallCheck(this, WhiteCards);\n\n        var _this = _possibleConstructorReturn(this, (WhiteCards.__proto__ || Object.getPrototypeOf(WhiteCards)).call(this, props));\n\n        _this.selectCard = _this.selectCard.bind(_this);\n        return _this;\n    }\n\n    _createClass(WhiteCards, [{\n        key: \"selectCard\",\n        value: function selectCard(card) {\n            this.props.whiteCardSelected(card);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _this2 = this;\n\n            var cards = this.props.cards;\n            var leftCol = null;\n            var rightCol = null;\n            var result = null;\n            if (cards.length) {\n                rightCol = cards.map(function (card, i) {\n                    if (i > 4) {\n                        return React.createElement(_whitecard.WhiteCard, { key: card.id, card: card, onCardSelected: _this2.selectCard });\n                    }\n                });\n                leftCol = cards.map(function (card, i) {\n                    if (i <= 4) {\n                        return React.createElement(_whitecard.WhiteCard, { key: card.id, card: card, onCardSelected: _this2.selectCard });\n                    }\n                });\n                result = React.createElement(\n                    \"div\",\n                    { className: \"row\" },\n                    React.createElement(\n                        \"div\",\n                        { className: \"col\" },\n                        React.createElement(\n                            \"ul\",\n                            { className: \"list-group\" },\n                            leftCol\n                        )\n                    ),\n                    React.createElement(\n                        \"div\",\n                        { className: \"col\" },\n                        React.createElement(\n                            \"ul\",\n                            { className: \"list-group\" },\n                            rightCol\n                        )\n                    )\n                );\n            } else {\n                result = React.createElement(\n                    \"h3\",\n                    null,\n                    \"No white cards.\"\n                );\n            }\n            return React.createElement(\n                \"div\",\n                { className: \"col\" },\n                result\n            );\n        }\n    }]);\n\n    return WhiteCards;\n}(React.Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/cac/whitecards.jsx?");

/***/ })

/******/ });