"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Footer =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Footer, _HTMLElement);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n        <div class=\"p-5 pref-footer\">\n            <div class=\"prelative container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-4 col-12\">\n                        <div class=\"logo mb-4\">\n                            <img src=\"../../assets/img/logo-head.png\" alt=\"logo\" height=\"35\">\n                        </div>\n                        <p class=\"about-us mb-4\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae facilisi consequat donec turpis aliquam at. Egestas arcu ut.</p>\n                        <ul class=\"social-media d-flex align-items-center p-0\">\n                            <li class=\"item\">\n                                <a href=\"#\" class=\"link p-2 d-inline-block\"><i class=\"fab fa-youtube\"></i></a>\n                            </li>\n                            <li class=\"item ml-2\">\n                                <a href=\"#\" class=\"link p-2 d-inline-block\"><i class=\"fab fa-facebook-square\"></i></a>\n                            </li>\n                            <li class=\"item ml-2\">\n                                <a href=\"#\" class=\"link p-2 d-inline-block\"><i class=\"fab fa-twitter\"></i></a>\n                            </li>\n                            <li class=\"item ml-2\">\n                                <a href=\"#\" class=\"link p-2 d-inline-block\"><i class=\"fab fa-instagram\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-12 mt-3\">\n                        <ul class=\"footer-link p-0\">\n                            <li class=\"item text-bold\">My Buddy School</li>\n                            <li class=\"item\"><a href=\"\">About Us</a></li>\n                            <li class=\"item\"><a href=\"\">Contact Us</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-12 mt-3\">\n                        <ul class=\"footer-link p-0\">\n                            <li class=\"item text-bold\">Menu</li>\n                            <li class=\"item\"><a href=\"\">Dashboard</a></li>\n                            <li class=\"item\"><a href=\"\">Course</a></li>\n                            <li class=\"item\"><a href=\"\">My Course</a></li>\n                            <li class=\"item\"><a href=\"\">Inbox</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"col-lg-2 col-md-2 col-12 mt-3\">\n                        <ul class=\"footer-link p-0\">\n                            <li class=\"item text-bold\">For users</li>\n                            <li class=\"item\"><a href=\"\">Login</a></li>\n                            <li class=\"item\"><a href=\"\">Register</a></li>\n                            <li class=\"item\"><a href=\"\">Account</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer py-2\">\n            <p class=\"text-white text-center m-0\">\xA9 2020 My Buddy School.</p>\n        </footer>\n    ";
    }
  }]);

  return Footer;
}(_wrapNativeSuper(HTMLElement));

customElements.define('footer-component', Footer);