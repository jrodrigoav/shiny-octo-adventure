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
/******/ 		"solicacrio": 0
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
/******/ 	deferredModules.push(["./src/solicacrio/main.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/solicacrio/app.jsx":
/*!********************************!*\
  !*** ./src/solicacrio/app.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _whitecard = __webpack_require__(/*! ./whitecard.jsx */ \"./src/solicacrio/whitecard.jsx\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = exports.App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n        _this.state = {\n            blackCard: {},\n            whiteCards: [],\n            selectedCards: [],\n            buildResult: 'Hello World'\n        };\n        _this.selectCard = _this.selectCard.bind(_this);\n        _this.sendCards = _this.sendCards.bind(_this);\n        _this.theseSuck = _this.theseSuck.bind(_this);\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'selectCard',\n        value: function selectCard(card) {\n            var that = this;\n            var cards = that.state.whiteCards.slice(0);\n            var selectedCards = that.state.selectedCards.slice(0);\n            var pick = that.state.blackCard.pick;\n            _lodash2.default.forEach(cards, function (o) {\n                if (o.id === card.id) {\n                    if (o.selected) {\n                        o.selected = false;\n                        _lodash2.default.remove(selectedCards, function (sc) {\n                            return sc === card.id;\n                        });\n                    } else if (selectedCards.length < pick) {\n                        o.selected = true;\n                        selectedCards.push(o.id);\n                    }\n                }\n            });\n            that.setState({ whiteCards: cards, selectedCards: selectedCards });\n        }\n    }, {\n        key: 'theseSuck',\n        value: function theseSuck(event) {\n            var that = this;\n            event.preventDefault();\n            _axios2.default.get('/api/cards/deal').then(function (response) {\n                return that.setState({ whiteCards: response.data, selectedCards: [] });\n            }, function () {\n                return console.log('error deal');\n            });\n        }\n    }, {\n        key: 'sendCards',\n        value: function sendCards(event) {\n            var that = this;\n            event.preventDefault();\n            if (that.state.selectedCards.length) {\n                var payload = {\n                    Blackcard: that.state.blackCard.id,\n                    Selectedcards: that.state.selectedCards\n                };\n                _axios2.default.post('/api/cards/build', payload).then(function (response) {\n                    return that.setState({ buildResult: response.data });\n                });\n                var cards = that.state.whiteCards.slice(0);\n                cards.forEach(function (o) {\n                    return o.selected = false;\n                });\n                _axios2.default.get('/api/cards/black').then(function (response) {\n                    return that.setState({ blackCard: response.data, selectedCards: [], whiteCards: cards });\n                }, function () {\n                    return console.log('error black');\n                });\n            }\n        }\n    }, {\n        key: 'reset',\n        value: function reset() {\n            var that = this;\n            _axios2.default.get('/api/cards/black').then(function (response) {\n                return that.setState({ blackCard: response.data });\n            }, function () {\n                return console.log('error black');\n            });\n            _axios2.default.get('/api/cards/deal').then(function (response) {\n                return that.setState({ whiteCards: response.data, selectedCards: [] });\n            }, function () {\n                return console.log('error deal');\n            });\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.reset();\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var blackCard = this.state.blackCard;\n            var whiteCards = this.state.whiteCards;\n            var buildResultClass = this.state.buildResult ? 'col-12 alert alert-info text-center' : 'col-12 hidden';\n            var buildResult = this.state.buildResult;\n            var leftCol = null;\n            var rightCol = null;\n            var WhiteCards = null;\n            if (whiteCards.length) {\n                rightCol = whiteCards.map(function (card, i) {\n                    if (i > 4) {\n                        return _react2.default.createElement(_whitecard.WhiteCard, { key: card.id, card: card, onCardSelected: _this2.selectCard });\n                    }\n                });\n                leftCol = whiteCards.map(function (card, i) {\n                    if (i <= 4) {\n                        return _react2.default.createElement(_whitecard.WhiteCard, { key: card.id, card: card, onCardSelected: _this2.selectCard });\n                    }\n                });\n                WhiteCards = _react2.default.createElement(\n                    'div',\n                    { className: 'row' },\n                    _react2.default.createElement(\n                        'p',\n                        { className: 'col-12' },\n                        'Pick ',\n                        blackCard.pick,\n                        ' cards'\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'col' },\n                        _react2.default.createElement(\n                            'ul',\n                            { className: 'list-group' },\n                            leftCol\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'col' },\n                        _react2.default.createElement(\n                            'ul',\n                            { className: 'list-group' },\n                            rightCol\n                        )\n                    )\n                );\n            }\n            return _react2.default.createElement(\n                'div',\n                { className: 'row' },\n                _react2.default.createElement(\n                    'div',\n                    { className: 'col-12' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'card rounded' },\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'card-body bg-dark text-light' },\n                            blackCard.text\n                        ),\n                        _react2.default.createElement(\n                            'button',\n                            { className: 'btn btn-warning', onClick: this.theseSuck },\n                            'These suck'\n                        ),\n                        _react2.default.createElement(\n                            'button',\n                            { className: 'btn btn-primary', onClick: this.sendCards },\n                            'Build'\n                        )\n                    )\n                ),\n                WhiteCards,\n                _react2.default.createElement(\n                    'div',\n                    { className: buildResultClass, style: {\n                            minHeigth: 350 + 'px', paddingTop: 20 + 'px'\n                        } },\n                    _react2.default.createElement(\n                        'h4',\n                        null,\n                        ' ',\n                        buildResult\n                    )\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n//# sourceURL=webpack:///./src/solicacrio/app.jsx?");

/***/ }),

/***/ "./src/solicacrio/main.jsx":
/*!*********************************!*\
  !*** ./src/solicacrio/main.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _app = __webpack_require__(/*! ./app.jsx */ \"./src/solicacrio/app.jsx\");\n\n(0, _reactDom.render)(React.createElement(_app.App, null), document.getElementById('app'));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/solicacrio/main.jsx?");

/***/ }),

/***/ "./src/solicacrio/whitecard.jsx":
/*!**************************************!*\
  !*** ./src/solicacrio/whitecard.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(React) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar WhiteCard = exports.WhiteCard = function (_React$Component) {\n    _inherits(WhiteCard, _React$Component);\n\n    function WhiteCard(props) {\n        _classCallCheck(this, WhiteCard);\n\n        var _this = _possibleConstructorReturn(this, (WhiteCard.__proto__ || Object.getPrototypeOf(WhiteCard)).call(this, props));\n\n        _this.selectCard = _this.selectCard.bind(_this);\n        return _this;\n    }\n\n    _createClass(WhiteCard, [{\n        key: 'selectCard',\n        value: function selectCard(event) {\n            event.preventDefault();\n            this.props.onCardSelected(this.props.card);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var cardClasslist = 'list-group-item';\n            if (this.props.card.selected) {\n                cardClasslist = cardClasslist + ' active';\n            }\n            return React.createElement(\n                'li',\n                { className: cardClasslist, onClick: this.selectCard },\n                this.props.card.text\n            );\n        }\n    }]);\n\n    return WhiteCard;\n}(React.Component);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ \"./node_modules/react/index.js\")))\n\n//# sourceURL=webpack:///./src/solicacrio/whitecard.jsx?");

/***/ })

/******/ });