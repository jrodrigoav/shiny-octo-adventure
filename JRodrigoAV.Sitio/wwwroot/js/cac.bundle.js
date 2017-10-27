/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signalr_client__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signalr_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__signalr_client__);


function test() {
    console.log('Testing');
    try {
        var transportType = __WEBPACK_IMPORTED_MODULE_0__signalr_client___default.a.TransportType[getParameterByName('transport')] || __WEBPACK_IMPORTED_MODULE_0__signalr_client___default.a.TransportType.WebSockets;
        var logger = new __WEBPACK_IMPORTED_MODULE_0__signalr_client___default.a.ConsoleLogger(__WEBPACK_IMPORTED_MODULE_0__signalr_client___default.a.LogLevel.Information);
        var connection = new __WEBPACK_IMPORTED_MODULE_0__signalr_client___default.a.HubConnection('/chat', { transport: transportType, logger: logger });
    } catch (e) {
        console.error(e);
    }
}

test();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (f) {
    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        var g;if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }g.signalR = f();
    }
})(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });

            var Base64EncodedHubProtocol = function () {
                function Base64EncodedHubProtocol(protocol) {
                    _classCallCheck(this, Base64EncodedHubProtocol);

                    this.wrappedProtocol = protocol;
                    this.name = this.wrappedProtocol.name;
                    this.type = 1 /* Text */;
                }

                _createClass(Base64EncodedHubProtocol, [{
                    key: "parseMessages",
                    value: function parseMessages(input) {
                        // The format of the message is `size:message;`
                        var pos = input.indexOf(":");
                        if (pos == -1 || input[input.length - 1] != ';') {
                            throw new Error("Invalid payload.");
                        }
                        var lenStr = input.substring(0, pos);
                        if (!/^[0-9]+$/.test(lenStr)) {
                            throw new Error("Invalid length: '" + lenStr + "'");
                        }
                        var messageSize = parseInt(lenStr, 10);
                        // 2 accounts for ':' after message size and trailing ';'
                        if (messageSize != input.length - pos - 2) {
                            throw new Error("Invalid message size.");
                        }
                        var encodedMessage = input.substring(pos + 1, input.length - 1);
                        // atob/btoa are browsers APIs but they can be polyfilled. If this becomes problematic we can use
                        // base64-js module
                        var s = atob(encodedMessage);
                        var payload = new Uint8Array(s.length);
                        for (var i = 0; i < payload.length; i++) {
                            payload[i] = s.charCodeAt(i);
                        }
                        return this.wrappedProtocol.parseMessages(payload.buffer);
                    }
                }, {
                    key: "writeMessage",
                    value: function writeMessage(message) {
                        var payload = new Uint8Array(this.wrappedProtocol.writeMessage(message));
                        var s = "";
                        for (var i = 0; i < payload.byteLength; i++) {
                            s += String.fromCharCode(payload[i]);
                        }
                        // atob/btoa are browsers APIs but they can be polyfilled. If this becomes problematic we can use
                        // base64-js module
                        var encodedMessage = btoa(s);
                        return encodedMessage.length.toString() + ":" + encodedMessage + ";";
                    }
                }]);

                return Base64EncodedHubProtocol;
            }();

            exports.Base64EncodedHubProtocol = Base64EncodedHubProtocol;
        }, {}], 2: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });
            var TextMessageFormat;
            (function (TextMessageFormat) {
                var RecordSeparator = String.fromCharCode(0x1e);
                function write(output) {
                    return "" + output + RecordSeparator;
                }
                TextMessageFormat.write = write;
                function parse(input) {
                    if (input[input.length - 1] != RecordSeparator) {
                        throw new Error("Message is incomplete.");
                    }
                    var messages = input.split(RecordSeparator);
                    messages.pop();
                    return messages;
                }
                TextMessageFormat.parse = parse;
            })(TextMessageFormat = exports.TextMessageFormat || (exports.TextMessageFormat = {}));
            var BinaryMessageFormat;
            (function (BinaryMessageFormat) {
                // The length prefix of binary messages is encoded as VarInt. Read the comment in
                // the BinaryMessageParser.TryParseMessage for details.
                function write(output) {
                    // msgpack5 uses returns Buffer instead of Uint8Array on IE10 and some other browser
                    //  in which case .byteLength does will be undefined
                    var size = output.byteLength || output.length;
                    var lenBuffer = [];
                    do {
                        var sizePart = size & 0x7f;
                        size = size >> 7;
                        if (size > 0) {
                            sizePart |= 0x80;
                        }
                        lenBuffer.push(sizePart);
                    } while (size > 0);
                    // msgpack5 uses returns Buffer instead of Uint8Array on IE10 and some other browser
                    //  in which case .byteLength does will be undefined
                    size = output.byteLength || output.length;
                    var buffer = new Uint8Array(lenBuffer.length + size);
                    buffer.set(lenBuffer, 0);
                    buffer.set(output, lenBuffer.length);
                    return buffer.buffer;
                }
                BinaryMessageFormat.write = write;
                function parse(input) {
                    var result = [];
                    var uint8Array = new Uint8Array(input);
                    var maxLengthPrefixSize = 5;
                    var numBitsToShift = [0, 7, 14, 21, 28];
                    for (var offset = 0; offset < input.byteLength;) {
                        var numBytes = 0;
                        var size = 0;
                        var byteRead = void 0;
                        do {
                            byteRead = uint8Array[offset + numBytes];
                            size = size | (byteRead & 0x7f) << numBitsToShift[numBytes];
                            numBytes++;
                        } while (numBytes < Math.min(maxLengthPrefixSize, input.byteLength - offset) && (byteRead & 0x80) != 0);
                        if ((byteRead & 0x80) !== 0 && numBytes < maxLengthPrefixSize) {
                            throw new Error("Cannot read message size.");
                        }
                        if (numBytes === maxLengthPrefixSize && byteRead > 7) {
                            throw new Error("Messages bigger than 2GB are not supported.");
                        }
                        if (uint8Array.byteLength >= offset + numBytes + size) {
                            // IE does not support .slice() so use subarray
                            result.push(uint8Array.slice ? uint8Array.slice(offset + numBytes, offset + numBytes + size) : uint8Array.subarray(offset + numBytes, offset + numBytes + size));
                        } else {
                            throw new Error("Incomplete message.");
                        }
                        offset = offset + numBytes + size;
                    }
                    return result;
                }
                BinaryMessageFormat.parse = parse;
            })(BinaryMessageFormat = exports.BinaryMessageFormat || (exports.BinaryMessageFormat = {}));
        }, {}], 3: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });
            var HttpError_1 = require("./HttpError");

            var HttpClient = function () {
                function HttpClient() {
                    _classCallCheck(this, HttpClient);
                }

                _createClass(HttpClient, [{
                    key: "get",
                    value: function get(url, headers) {
                        return this.xhr("GET", url, headers);
                    }
                }, {
                    key: "options",
                    value: function options(url, headers) {
                        return this.xhr("OPTIONS", url, headers);
                    }
                }, {
                    key: "post",
                    value: function post(url, content, headers) {
                        return this.xhr("POST", url, headers, content);
                    }
                }, {
                    key: "xhr",
                    value: function xhr(method, url, headers, content) {
                        return new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            xhr.open(method, url, true);
                            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                            if (headers) {
                                headers.forEach(function (value, header) {
                                    return xhr.setRequestHeader(header, value);
                                });
                            }
                            xhr.send(content);
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    resolve(xhr.response || xhr.responseText);
                                } else {
                                    reject(new HttpError_1.HttpError(xhr.statusText, xhr.status));
                                }
                            };
                            xhr.onerror = function () {
                                reject(new HttpError_1.HttpError(xhr.statusText, xhr.status));
                            };
                        });
                    }
                }]);

                return HttpClient;
            }();

            exports.HttpClient = HttpClient;
        }, { "./HttpError": 5 }], 4: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : new P(function (resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var Transports_1 = require("./Transports");
            var HttpClient_1 = require("./HttpClient");
            var ILogger_1 = require("./ILogger");
            var Loggers_1 = require("./Loggers");

            var HttpConnection = function () {
                function HttpConnection(url) {
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                    _classCallCheck(this, HttpConnection);

                    this.features = {};
                    this.logger = Loggers_1.LoggerFactory.createLogger(options.logging);
                    this.url = this.resolveUrl(url);
                    options = options || {};
                    this.httpClient = options.httpClient || new HttpClient_1.HttpClient();
                    this.connectionState = 0 /* Initial */;
                    this.options = options;
                }

                _createClass(HttpConnection, [{
                    key: "start",
                    value: function start() {
                        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            if (!(this.connectionState != 0 /* Initial */)) {
                                                _context.next = 2;
                                                break;
                                            }

                                            return _context.abrupt("return", Promise.reject(new Error("Cannot start a connection that is not in the 'Initial' state.")));

                                        case 2:
                                            this.connectionState = 1 /* Connecting */;
                                            this.startPromise = this.startInternal();
                                            return _context.abrupt("return", this.startPromise);

                                        case 5:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));
                    }
                }, {
                    key: "startInternal",
                    value: function startInternal() {
                        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            var _this = this;

                            var negotiatePayload, negotiateResponse, requestedTransferMode;
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            _context2.prev = 0;
                                            _context2.next = 3;
                                            return this.httpClient.options(this.url);

                                        case 3:
                                            negotiatePayload = _context2.sent;
                                            negotiateResponse = JSON.parse(negotiatePayload);

                                            this.connectionId = negotiateResponse.connectionId;
                                            // the user tries to stop the the connection when it is being started

                                            if (!(this.connectionState == 3 /* Disconnected */)) {
                                                _context2.next = 8;
                                                break;
                                            }

                                            return _context2.abrupt("return");

                                        case 8:
                                            this.url += (this.url.indexOf("?") == -1 ? "?" : "&") + ("id=" + this.connectionId);
                                            this.transport = this.createTransport(this.options.transport, negotiateResponse.availableTransports);
                                            this.transport.onreceive = this.onreceive;
                                            this.transport.onclose = function (e) {
                                                return _this.stopConnection(true, e);
                                            };
                                            requestedTransferMode = this.features.transferMode === 2 /* Binary */
                                            ? 2 /* Binary */
                                            : 1;
                                            _context2.next = 15;
                                            return this.transport.connect(this.url, requestedTransferMode);

                                        case 15:
                                            this.features.transferMode = _context2.sent;

                                            // only change the state if we were connecting to not overwrite
                                            // the state if the connection is already marked as Disconnected
                                            this.changeState(1 /* Connecting */, 2 /* Connected */);
                                            _context2.next = 25;
                                            break;

                                        case 19:
                                            _context2.prev = 19;
                                            _context2.t0 = _context2["catch"](0);

                                            this.logger.log(ILogger_1.LogLevel.Error, "Failed to start the connection. " + _context2.t0);
                                            this.connectionState = 3 /* Disconnected */;
                                            this.transport = null;
                                            throw _context2.t0;

                                        case 25:
                                            ;

                                        case 26:
                                        case "end":
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this, [[0, 19]]);
                        }));
                    }
                }, {
                    key: "createTransport",
                    value: function createTransport(transport, availableTransports) {
                        if (!transport && availableTransports.length > 0) {
                            transport = Transports_1.TransportType[availableTransports[0]];
                        }
                        if (transport === Transports_1.TransportType.WebSockets && availableTransports.indexOf(Transports_1.TransportType[transport]) >= 0) {
                            return new Transports_1.WebSocketTransport(this.logger);
                        }
                        if (transport === Transports_1.TransportType.ServerSentEvents && availableTransports.indexOf(Transports_1.TransportType[transport]) >= 0) {
                            return new Transports_1.ServerSentEventsTransport(this.httpClient, this.logger);
                        }
                        if (transport === Transports_1.TransportType.LongPolling && availableTransports.indexOf(Transports_1.TransportType[transport]) >= 0) {
                            return new Transports_1.LongPollingTransport(this.httpClient, this.logger);
                        }
                        if (this.isITransport(transport)) {
                            return transport;
                        }
                        throw new Error("No available transports found.");
                    }
                }, {
                    key: "isITransport",
                    value: function isITransport(transport) {
                        return (typeof transport === "undefined" ? "undefined" : _typeof(transport)) === "object" && "connect" in transport;
                    }
                }, {
                    key: "changeState",
                    value: function changeState(from, to) {
                        if (this.connectionState == from) {
                            this.connectionState = to;
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: "send",
                    value: function send(data) {
                        if (this.connectionState != 2 /* Connected */) {
                                throw new Error("Cannot send data if the connection is not in the 'Connected' State");
                            }
                        return this.transport.send(data);
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                            var previousState;
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                while (1) {
                                    switch (_context3.prev = _context3.next) {
                                        case 0:
                                            previousState = this.connectionState;

                                            this.connectionState = 3 /* Disconnected */;
                                            _context3.prev = 2;
                                            _context3.next = 5;
                                            return this.startPromise;

                                        case 5:
                                            _context3.next = 9;
                                            break;

                                        case 7:
                                            _context3.prev = 7;
                                            _context3.t0 = _context3["catch"](2);

                                        case 9:
                                            this.stopConnection( /*raiseClosed*/previousState == 2 /* Connected */);

                                        case 10:
                                        case "end":
                                            return _context3.stop();
                                    }
                                }
                            }, _callee3, this, [[2, 7]]);
                        }));
                    }
                }, {
                    key: "stopConnection",
                    value: function stopConnection(raiseClosed, error) {
                        if (this.transport) {
                            this.transport.stop();
                            this.transport = null;
                        }
                        this.connectionState = 3 /* Disconnected */;
                        if (raiseClosed && this.onclose) {
                            this.onclose(error);
                        }
                    }
                }, {
                    key: "resolveUrl",
                    value: function resolveUrl(url) {
                        // startsWith is not supported in IE
                        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
                            return url;
                        }
                        if (typeof window === 'undefined' || !window || !window.document) {
                            throw new Error("Cannot resolve '" + url + "'.");
                        }
                        var parser = window.document.createElement("a");
                        parser.href = url;
                        var baseUrl = !parser.protocol || parser.protocol === ":" ? window.document.location.protocol + "//" + (parser.host || window.document.location.host) : parser.protocol + "//" + parser.host;
                        if (!url || url[0] != '/') {
                            url = '/' + url;
                        }
                        var normalizedUrl = baseUrl + url;
                        this.logger.log(ILogger_1.LogLevel.Information, "Normalizing '" + url + "' to '" + normalizedUrl + "'");
                        return normalizedUrl;
                    }
                }]);

                return HttpConnection;
            }();

            exports.HttpConnection = HttpConnection;
        }, { "./HttpClient": 3, "./ILogger": 7, "./Loggers": 9, "./Transports": 11 }], 5: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });

            var HttpError = function (_Error) {
                _inherits(HttpError, _Error);

                function HttpError(errorMessage, statusCode) {
                    _classCallCheck(this, HttpError);

                    var _this2 = _possibleConstructorReturn(this, (HttpError.__proto__ || Object.getPrototypeOf(HttpError)).call(this, errorMessage));

                    _this2.statusCode = statusCode;
                    return _this2;
                }

                return HttpError;
            }(Error);

            exports.HttpError = HttpError;
        }, {}], 6: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : new P(function (resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var HttpConnection_1 = require("./HttpConnection");
            var Observable_1 = require("./Observable");
            var JsonHubProtocol_1 = require("./JsonHubProtocol");
            var Formatters_1 = require("./Formatters");
            var Base64EncodedHubProtocol_1 = require("./Base64EncodedHubProtocol");
            var ILogger_1 = require("./ILogger");
            var Loggers_1 = require("./Loggers");
            var Transports_1 = require("./Transports");
            exports.TransportType = Transports_1.TransportType;
            var HttpConnection_2 = require("./HttpConnection");
            exports.HttpConnection = HttpConnection_2.HttpConnection;
            var JsonHubProtocol_2 = require("./JsonHubProtocol");
            exports.JsonHubProtocol = JsonHubProtocol_2.JsonHubProtocol;
            var ILogger_2 = require("./ILogger");
            exports.LogLevel = ILogger_2.LogLevel;
            var Loggers_2 = require("./Loggers");
            exports.ConsoleLogger = Loggers_2.ConsoleLogger;
            exports.NullLogger = Loggers_2.NullLogger;

            var HubConnection = function () {
                function HubConnection(urlOrConnection) {
                    var _this3 = this;

                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                    _classCallCheck(this, HubConnection);

                    options = options || {};
                    if (typeof urlOrConnection === "string") {
                        this.connection = new HttpConnection_1.HttpConnection(urlOrConnection, options);
                    } else {
                        this.connection = urlOrConnection;
                    }
                    this.logger = Loggers_1.LoggerFactory.createLogger(options.logging);
                    this.protocol = options.protocol || new JsonHubProtocol_1.JsonHubProtocol();
                    this.connection.onreceive = function (data) {
                        return _this3.processIncomingData(data);
                    };
                    this.connection.onclose = function (error) {
                        return _this3.connectionClosed(error);
                    };
                    this.callbacks = new Map();
                    this.methods = new Map();
                    this.closedCallbacks = [];
                    this.id = 0;
                }

                _createClass(HubConnection, [{
                    key: "processIncomingData",
                    value: function processIncomingData(data) {
                        // Parse the messages
                        var messages = this.protocol.parseMessages(data);
                        for (var i = 0; i < messages.length; ++i) {
                            var message = messages[i];
                            switch (message.type) {
                                case 1 /* Invocation */:
                                    this.invokeClientMethod(message);
                                    break;
                                case 2 /* Result */:
                                case 3 /* Completion */:
                                    var callback = this.callbacks.get(message.invocationId);
                                    if (callback != null) {
                                        if (message.type == 3 /* Completion */) {
                                                this.callbacks.delete(message.invocationId);
                                            }
                                        callback(message);
                                    }
                                    break;
                                default:
                                    this.logger.log(ILogger_1.LogLevel.Warning, "Invalid message type: " + data);
                                    break;
                            }
                        }
                    }
                }, {
                    key: "invokeClientMethod",
                    value: function invokeClientMethod(invocationMessage) {
                        var _this4 = this;

                        var methods = this.methods.get(invocationMessage.target.toLowerCase());
                        if (methods) {
                            methods.forEach(function (m) {
                                return m.apply(_this4, invocationMessage.arguments);
                            });
                            if (!invocationMessage.nonblocking) {
                                // TODO: send result back to the server?
                            }
                        } else {
                            this.logger.log(ILogger_1.LogLevel.Warning, "No client method with the name '" + invocationMessage.target + "' found.");
                        }
                    }
                }, {
                    key: "connectionClosed",
                    value: function connectionClosed(error) {
                        var _this5 = this;

                        var errorCompletionMessage = {
                            type: 3 /* Completion */
                            , invocationId: "-1",
                            error: error ? error.message : "Invocation cancelled due to connection being closed."
                        };
                        this.callbacks.forEach(function (callback) {
                            callback(errorCompletionMessage);
                        });
                        this.callbacks.clear();
                        this.closedCallbacks.forEach(function (c) {
                            return c.apply(_this5, [error]);
                        });
                    }
                }, {
                    key: "start",
                    value: function start() {
                        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var requestedTransferMode, actualTransferMode;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                while (1) {
                                    switch (_context4.prev = _context4.next) {
                                        case 0:
                                            requestedTransferMode = this.protocol.type === 2 /* Binary */ ? 2 /* Binary */
                                            : 1;

                                            this.connection.features.transferMode = requestedTransferMode;
                                            _context4.next = 4;
                                            return this.connection.start();

                                        case 4:
                                            actualTransferMode = this.connection.features.transferMode;
                                            _context4.next = 7;
                                            return this.connection.send(Formatters_1.TextMessageFormat.write(JSON.stringify({ protocol: this.protocol.name })));

                                        case 7:
                                            this.logger.log(ILogger_1.LogLevel.Information, "Using HubProtocol '" + this.protocol.name + "'.");
                                            if (requestedTransferMode === 2 /* Binary */ && actualTransferMode === 1 /* Text */) {
                                                    this.protocol = new Base64EncodedHubProtocol_1.Base64EncodedHubProtocol(this.protocol);
                                                }

                                        case 9:
                                        case "end":
                                            return _context4.stop();
                                    }
                                }
                            }, _callee4, this);
                        }));
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        return this.connection.stop();
                    }
                }, {
                    key: "stream",
                    value: function stream(methodName) {
                        var _this6 = this;

                        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                            args[_key - 1] = arguments[_key];
                        }

                        var invocationDescriptor = this.createInvocation(methodName, args, false);
                        var subject = new Observable_1.Subject();
                        this.callbacks.set(invocationDescriptor.invocationId, function (invocationEvent) {
                            if (invocationEvent.type === 3 /* Completion */) {
                                    var completionMessage = invocationEvent;
                                    if (completionMessage.error) {
                                        subject.error(new Error(completionMessage.error));
                                    } else if (completionMessage.result) {
                                        subject.error(new Error("Server provided a result in a completion response to a streamed invocation."));
                                    } else {
                                        // TODO: Log a warning if there's a payload?
                                        subject.complete();
                                    }
                                } else {
                                subject.next(invocationEvent.item);
                            }
                        });
                        var message = this.protocol.writeMessage(invocationDescriptor);
                        this.connection.send(message).catch(function (e) {
                            subject.error(e);
                            _this6.callbacks.delete(invocationDescriptor.invocationId);
                        });
                        return subject;
                    }
                }, {
                    key: "send",
                    value: function send(methodName) {
                        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                            args[_key2 - 1] = arguments[_key2];
                        }

                        var invocationDescriptor = this.createInvocation(methodName, args, true);
                        var message = this.protocol.writeMessage(invocationDescriptor);
                        return this.connection.send(message);
                    }
                }, {
                    key: "invoke",
                    value: function invoke(methodName) {
                        var _this7 = this;

                        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                            args[_key3 - 1] = arguments[_key3];
                        }

                        var invocationDescriptor = this.createInvocation(methodName, args, false);
                        var p = new Promise(function (resolve, reject) {
                            _this7.callbacks.set(invocationDescriptor.invocationId, function (invocationEvent) {
                                if (invocationEvent.type === 3 /* Completion */) {
                                        var completionMessage = invocationEvent;
                                        if (completionMessage.error) {
                                            reject(new Error(completionMessage.error));
                                        } else {
                                            resolve(completionMessage.result);
                                        }
                                    } else {
                                    reject(new Error("Streaming methods must be invoked using HubConnection.stream"));
                                }
                            });
                            var message = _this7.protocol.writeMessage(invocationDescriptor);
                            _this7.connection.send(message).catch(function (e) {
                                reject(e);
                                _this7.callbacks.delete(invocationDescriptor.invocationId);
                            });
                        });
                        return p;
                    }
                }, {
                    key: "on",
                    value: function on(methodName, method) {
                        if (!methodName || !method) {
                            return;
                        }
                        methodName = methodName.toLowerCase();
                        if (!this.methods.has(methodName)) {
                            this.methods.set(methodName, []);
                        }
                        this.methods.get(methodName).push(method);
                    }
                }, {
                    key: "off",
                    value: function off(methodName, method) {
                        if (!methodName || !method) {
                            return;
                        }
                        methodName = methodName.toLowerCase();
                        var handlers = this.methods.get(methodName);
                        if (!handlers) {
                            return;
                        }
                        var removeIdx = handlers.indexOf(method);
                        if (removeIdx != -1) {
                            handlers.splice(removeIdx, 1);
                        }
                    }
                }, {
                    key: "onclose",
                    value: function onclose(callback) {
                        if (callback) {
                            this.closedCallbacks.push(callback);
                        }
                    }
                }, {
                    key: "createInvocation",
                    value: function createInvocation(methodName, args, nonblocking) {
                        var id = this.id;
                        this.id++;
                        return {
                            type: 1 /* Invocation */
                            , invocationId: id.toString(),
                            target: methodName,
                            arguments: args,
                            nonblocking: nonblocking
                        };
                    }
                }]);

                return HubConnection;
            }();

            exports.HubConnection = HubConnection;
        }, { "./Base64EncodedHubProtocol": 1, "./Formatters": 2, "./HttpConnection": 4, "./ILogger": 7, "./JsonHubProtocol": 8, "./Loggers": 9, "./Observable": 10, "./Transports": 11 }], 7: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });
            var LogLevel;
            (function (LogLevel) {
                LogLevel[LogLevel["Trace"] = 0] = "Trace";
                LogLevel[LogLevel["Information"] = 1] = "Information";
                LogLevel[LogLevel["Warning"] = 2] = "Warning";
                LogLevel[LogLevel["Error"] = 3] = "Error";
                LogLevel[LogLevel["None"] = 4] = "None";
            })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
        }, {}], 8: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });
            var Formatters_1 = require("./Formatters");

            var JsonHubProtocol = function () {
                function JsonHubProtocol() {
                    _classCallCheck(this, JsonHubProtocol);

                    this.name = "json";
                    this.type = 1 /* Text */;
                }

                _createClass(JsonHubProtocol, [{
                    key: "parseMessages",
                    value: function parseMessages(input) {
                        if (!input) {
                            return [];
                        }
                        // Parse the messages
                        var messages = Formatters_1.TextMessageFormat.parse(input);
                        var hubMessages = [];
                        for (var i = 0; i < messages.length; ++i) {
                            hubMessages.push(JSON.parse(messages[i]));
                        }
                        return hubMessages;
                    }
                }, {
                    key: "writeMessage",
                    value: function writeMessage(message) {
                        return Formatters_1.TextMessageFormat.write(JSON.stringify(message));
                    }
                }]);

                return JsonHubProtocol;
            }();

            exports.JsonHubProtocol = JsonHubProtocol;
        }, { "./Formatters": 2 }], 9: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });
            var ILogger_1 = require("./ILogger");

            var NullLogger = function () {
                function NullLogger() {
                    _classCallCheck(this, NullLogger);
                }

                _createClass(NullLogger, [{
                    key: "log",
                    value: function log(logLevel, message) {}
                }]);

                return NullLogger;
            }();

            exports.NullLogger = NullLogger;

            var ConsoleLogger = function () {
                function ConsoleLogger(minimumLogLevel) {
                    _classCallCheck(this, ConsoleLogger);

                    this.minimumLogLevel = minimumLogLevel;
                }

                _createClass(ConsoleLogger, [{
                    key: "log",
                    value: function log(logLevel, message) {
                        if (logLevel >= this.minimumLogLevel) {
                            console.log(ILogger_1.LogLevel[logLevel] + ": " + message);
                        }
                    }
                }]);

                return ConsoleLogger;
            }();

            exports.ConsoleLogger = ConsoleLogger;
            var LoggerFactory;
            (function (LoggerFactory) {
                function createLogger(logging) {
                    if (logging === undefined) {
                        return new ConsoleLogger(ILogger_1.LogLevel.Information);
                    }
                    if (logging === null) {
                        return new NullLogger();
                    }
                    if (logging.log) {
                        return logging;
                    }
                    return new ConsoleLogger(logging);
                }
                LoggerFactory.createLogger = createLogger;
            })(LoggerFactory = exports.LoggerFactory || (exports.LoggerFactory = {}));
        }, { "./ILogger": 7 }], 10: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            Object.defineProperty(exports, "__esModule", { value: true });

            var Subject = function () {
                function Subject() {
                    _classCallCheck(this, Subject);

                    this.observers = [];
                }

                _createClass(Subject, [{
                    key: "next",
                    value: function next(item) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.observers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var observer = _step.value;

                                observer.next(item);
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                }, {
                    key: "error",
                    value: function error(err) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = this.observers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var observer = _step2.value;

                                observer.error(err);
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                }, {
                    key: "complete",
                    value: function complete() {
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = this.observers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var observer = _step3.value;

                                observer.complete();
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                    }
                }, {
                    key: "subscribe",
                    value: function subscribe(observer) {
                        this.observers.push(observer);
                    }
                }]);

                return Subject;
            }();

            exports.Subject = Subject;
        }, {}], 11: [function (require, module, exports) {
            "use strict";
            // Copyright (c) .NET Foundation. All rights reserved.
            // Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

            var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator["throw"](value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        result.done ? resolve(result.value) : new P(function (resolve) {
                            resolve(result.value);
                        }).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            var HttpError_1 = require("./HttpError");
            var ILogger_1 = require("./ILogger");
            var TransportType;
            (function (TransportType) {
                TransportType[TransportType["WebSockets"] = 0] = "WebSockets";
                TransportType[TransportType["ServerSentEvents"] = 1] = "ServerSentEvents";
                TransportType[TransportType["LongPolling"] = 2] = "LongPolling";
            })(TransportType = exports.TransportType || (exports.TransportType = {}));

            var WebSocketTransport = function () {
                function WebSocketTransport(logger) {
                    _classCallCheck(this, WebSocketTransport);

                    this.logger = logger;
                }

                _createClass(WebSocketTransport, [{
                    key: "connect",
                    value: function connect(url, requestedTransferMode) {
                        var _this8 = this;

                        return new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket = new WebSocket(url);
                            if (requestedTransferMode == 2 /* Binary */) {
                                    webSocket.binaryType = "arraybuffer";
                                }
                            webSocket.onopen = function (event) {
                                _this8.logger.log(ILogger_1.LogLevel.Information, "WebSocket connected to " + url);
                                _this8.webSocket = webSocket;
                                resolve(requestedTransferMode);
                            };
                            webSocket.onerror = function (event) {
                                reject();
                            };
                            webSocket.onmessage = function (message) {
                                _this8.logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) data received: " + message.data);
                                if (_this8.onreceive) {
                                    _this8.onreceive(message.data);
                                }
                            };
                            webSocket.onclose = function (event) {
                                // webSocket will be null if the transport did not start successfully
                                if (_this8.onclose && _this8.webSocket) {
                                    if (event.wasClean === false || event.code !== 1000) {
                                        _this8.onclose(new Error("Websocket closed with status code: " + event.code + " (" + event.reason + ")"));
                                    } else {
                                        _this8.onclose();
                                    }
                                }
                            };
                        });
                    }
                }, {
                    key: "send",
                    value: function send(data) {
                        if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
                            this.webSocket.send(data);
                            return Promise.resolve();
                        }
                        return Promise.reject("WebSocket is not in the OPEN state");
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        if (this.webSocket) {
                            this.webSocket.close();
                            this.webSocket = null;
                        }
                    }
                }]);

                return WebSocketTransport;
            }();

            exports.WebSocketTransport = WebSocketTransport;

            var ServerSentEventsTransport = function () {
                function ServerSentEventsTransport(httpClient, logger) {
                    _classCallCheck(this, ServerSentEventsTransport);

                    this.httpClient = httpClient;
                    this.logger = logger;
                }

                _createClass(ServerSentEventsTransport, [{
                    key: "connect",
                    value: function connect(url, requestedTransferMode) {
                        var _this9 = this;

                        if (typeof EventSource === "undefined") {
                            Promise.reject("EventSource not supported by the browser.");
                        }
                        this.url = url;
                        return new Promise(function (resolve, reject) {
                            var eventSource = new EventSource(_this9.url);
                            try {
                                eventSource.onmessage = function (e) {
                                    if (_this9.onreceive) {
                                        try {
                                            _this9.logger.log(ILogger_1.LogLevel.Trace, "(SSE transport) data received: " + e.data);
                                            _this9.onreceive(e.data);
                                        } catch (error) {
                                            if (_this9.onclose) {
                                                _this9.onclose(error);
                                            }
                                            return;
                                        }
                                    }
                                };
                                eventSource.onerror = function (e) {
                                    reject();
                                    // don't report an error if the transport did not start successfully
                                    if (_this9.eventSource && _this9.onclose) {
                                        _this9.onclose(new Error(e.message || "Error occurred"));
                                    }
                                };
                                eventSource.onopen = function () {
                                    _this9.logger.log(ILogger_1.LogLevel.Information, "SSE connected to " + _this9.url);
                                    _this9.eventSource = eventSource;
                                    // SSE is a text protocol
                                    resolve(1 /* Text */);
                                };
                            } catch (e) {
                                return Promise.reject(e);
                            }
                        });
                    }
                }, {
                    key: "send",
                    value: function send(data) {
                        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                while (1) {
                                    switch (_context5.prev = _context5.next) {
                                        case 0:
                                            return _context5.abrupt("return", _send(this.httpClient, this.url, data));

                                        case 1:
                                        case "end":
                                            return _context5.stop();
                                    }
                                }
                            }, _callee5, this);
                        }));
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        if (this.eventSource) {
                            this.eventSource.close();
                            this.eventSource = null;
                        }
                    }
                }]);

                return ServerSentEventsTransport;
            }();

            exports.ServerSentEventsTransport = ServerSentEventsTransport;

            var LongPollingTransport = function () {
                function LongPollingTransport(httpClient, logger) {
                    _classCallCheck(this, LongPollingTransport);

                    this.httpClient = httpClient;
                    this.logger = logger;
                }

                _createClass(LongPollingTransport, [{
                    key: "connect",
                    value: function connect(url, requestedTransferMode) {
                        this.url = url;
                        this.shouldPoll = true;
                        if (requestedTransferMode === 2 /* Binary */ && typeof new XMLHttpRequest().responseType !== "string") {
                            // This will work if we fix: https://github.com/aspnet/SignalR/issues/742
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        this.poll(this.url, requestedTransferMode);
                        return Promise.resolve(requestedTransferMode);
                    }
                }, {
                    key: "poll",
                    value: function poll(url, transferMode) {
                        var _this10 = this;

                        if (!this.shouldPoll) {
                            return;
                        }
                        var pollXhr = new XMLHttpRequest();
                        pollXhr.onload = function () {
                            if (pollXhr.status == 200) {
                                if (_this10.onreceive) {
                                    try {
                                        var response = transferMode === 1 /* Text */
                                        ? pollXhr.responseText : pollXhr.response;
                                        if (response) {
                                            _this10.logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) data received: " + response);
                                            _this10.onreceive(response);
                                        } else {
                                            _this10.logger.log(ILogger_1.LogLevel.Information, "(LongPolling transport) timed out");
                                        }
                                    } catch (error) {
                                        if (_this10.onclose) {
                                            _this10.onclose(error);
                                        }
                                        return;
                                    }
                                }
                                _this10.poll(url, transferMode);
                            } else if (_this10.pollXhr.status == 204) {
                                if (_this10.onclose) {
                                    _this10.onclose();
                                }
                            } else {
                                if (_this10.onclose) {
                                    _this10.onclose(new HttpError_1.HttpError(pollXhr.statusText, pollXhr.status));
                                }
                            }
                        };
                        pollXhr.onerror = function () {
                            if (_this10.onclose) {
                                // network related error or denied cross domain request
                                _this10.onclose(new Error("Sending HTTP request failed."));
                            }
                        };
                        pollXhr.ontimeout = function () {
                            _this10.poll(url, transferMode);
                        };
                        this.pollXhr = pollXhr;
                        this.pollXhr.open("GET", url + "&_=" + Date.now(), true);
                        if (transferMode === 2 /* Binary */) {
                                this.pollXhr.responseType = "arraybuffer";
                            }
                        // TODO: consider making timeout configurable
                        this.pollXhr.timeout = 120000;
                        this.pollXhr.send();
                    }
                }, {
                    key: "send",
                    value: function send(data) {
                        return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                while (1) {
                                    switch (_context6.prev = _context6.next) {
                                        case 0:
                                            return _context6.abrupt("return", _send(this.httpClient, this.url, data));

                                        case 1:
                                        case "end":
                                            return _context6.stop();
                                    }
                                }
                            }, _callee6, this);
                        }));
                    }
                }, {
                    key: "stop",
                    value: function stop() {
                        this.shouldPoll = false;
                        if (this.pollXhr) {
                            this.pollXhr.abort();
                            this.pollXhr = null;
                        }
                    }
                }]);

                return LongPollingTransport;
            }();

            exports.LongPollingTransport = LongPollingTransport;
            var headers = new Map();
            function _send(httpClient, url, data) {
                return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    _context7.next = 2;
                                    return httpClient.post(url, data, headers);

                                case 2:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));
            }
        }, { "./HttpError": 5, "./ILogger": 7 }] }, {}, [6])(6);
});

/***/ })
/******/ ]);