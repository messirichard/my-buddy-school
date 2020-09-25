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

var HeaderAfter =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(HeaderAfter, _HTMLElement);

  function HeaderAfter() {
    _classCallCheck(this, HeaderAfter);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderAfter).apply(this, arguments));
  }

  _createClass(HeaderAfter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n        <div class=\"drawer drawer-left slide\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"drawer-1-title\" aria-hidden=\"true\" id=\"drawer-1\">\n            <div class=\"drawer-content drawer-content-scrollable\" role=\"document\">\n                <div class=\"drawer-header\">\n                    <h4 class=\"drawer-title\" id=\"drawer-1-title\">\n                        <img src=\"../../assets/img/logo-head.png\" alt=\"logo\" height=\"25\">\n                    </h4>\n                </div>\n                <div class=\"drawer-body\">\n                    <form class=\"form-inline my-2 my-lg-0 search-form\">\n                        <div class=\"input-group w-100\">\n                            <input type=\"text\" class=\"form-control input-search\" placeholder=\"Search\" name=\"key\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn-search\">\n                                    <img src=\"../../assets/img/search.png\" alt=\"\">\n                                </button>\n                            </div>\n                        </div>\n                    </form>\n\n                    <ul class=\"navbar-nav border-top mt-2\">\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link text-primary pt-2 pb-2\"><i class=\"fas fa-tachometer-alt\"></i> Dashboard</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link text-primary pt-2 pb-2\"><i class=\"fas fa-book-open\"></i> Course</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link text-primary pt-2 pb-2\"><i class=\"fas fa-user-graduate\"></i> My Course</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link text-primary pt-2 pb-2\"><i class=\"fas fa-user\"></i> Profile</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link text-primary pt-2 pb-2\"><i class=\"fas fa-comment-alt\"></i> Message</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a href=\"#\" class=\"nav-link text-primary pt-2 pb-2\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"drawer-footer\">\n                    <div class=\"profile d-flex flex-row align-items-first\">\n                        <div class=\"img-profile\">\n                            <img src=\"../../assets/img/profile.jpg\" alt=\"profile\" class=\"img-fit rounded\">\n                        </div>\n                        <div class=\"detail ml-1\">\n                            <p class=\"text-bold\">Hi, Bambang</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <nav class=\"navbar navbar-expand-lg navbar-light m-navbar\">\n            <div class=\"container headerss\">\n                <a class=\"navbar-brand\" href=\"#\">\n                    <img src=\"../../assets/img/logo-head.png\" alt=\"logo\">\n                </a>\n                <button class=\"navbar-toggler\" data-toggle=\"drawer\" data-target=\"#drawer-1\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                \n                <div class=\"d-flex flex-row align-items-center justiy-content-between w-100\">\n                    <div class=\"collapse navbar-collapse\">\n                        <ul class=\"navbar-nav mr-auto\">\n                            <li class=\"nav-item\">\n                                <a href=\"#\" class=\"nav-link text-black d-flex align-items-center\">Dashboard</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a href=\"#\" class=\"nav-link text-black d-flex align-items-center\">Course</a>\n                            </li>\n                        </ul>\n\n                        <form class=\"form-inline my-2 my-lg-0 search-form\">\n                            <div class=\"input-group w-100\">\n                                <input type=\"text\" class=\"form-control input-search\" placeholder=\"Search\" name=\"key\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn-search\">\n                                        <img src=\"../../assets/img/search.png\" alt=\"\">\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item d-flex align-items-center\">\n                                <a href=\"#\" class=\"nav-link text-black\">My Course</a>\n                            </li>\n                            <li class=\"nav-item d-flex align-items-center\">\n                                <a href=\"#\" class=\"nav-link\">\n                                    <img src=\"../../assets/img/mail.png\" alt=\"mail\">\n                                    <span class=\"badge badge-pill badge-warning text-white badge-mail\">1</span>\n                                </a>\n                            </li>\n                            <li class=\"nav-item dropdown\">\n                                <a href=\"#\" class=\"nav-link d-flex flex-row align-items-center dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <p class=\"m-0 text-black\">Hi, Derry</p>\n                                    <img src=\"../../assets/img/profile.jpg\" alt=\"profile\" class=\"img-fit ml-1 rounded-circle\">\n                                </a>\n                                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                    <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                                    <a class=\"dropdown-item\" href=\"#\">My Course</a>\n                                    <a class=\"dropdown-item\" href=\"#\">Message</a>\n                                    <a class=\"dropdown-item text-danger\" href=\"#\">Logout</a>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </nav>\n    ";
    }
  }]);

  return HeaderAfter;
}(_wrapNativeSuper(HTMLElement));

var HeaderBefore =
/*#__PURE__*/
function (_HTMLElement2) {
  _inherits(HeaderBefore, _HTMLElement2);

  function HeaderBefore() {
    _classCallCheck(this, HeaderBefore);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderBefore).apply(this, arguments));
  }

  _createClass(HeaderBefore, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n        <nav class=\"navbar navbar-expand-lg navbar-light bg-light m-navbar\">\n        <div class=\"container headerss\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <img src=\"../../assets/img/logo-head.png\" alt=\"logo\">\n            </a>\n            <ul class=\"navbar-nav ml-auto d-flex flex-row\">\n                <li class=\"nav-item d-flex align-items-center mr-1\">\n                    <a href=\"#\" class=\"nav-link btn btn-signin text-white\">SIGN IN</a>\n                </li>\n                <li class=\"nav-item d-flex align-items-center\">\n                    <a href=\"#\" class=\"nav-link btn btn-signup\">SIGN UP</a>\n                </li>\n            </ul>\n        </div>\n    </nav>    \n    ";
    }
  }]);

  return HeaderBefore;
}(_wrapNativeSuper(HTMLElement));

var HeaderCourse =
/*#__PURE__*/
function (_HTMLElement3) {
  _inherits(HeaderCourse, _HTMLElement3);

  function HeaderCourse() {
    _classCallCheck(this, HeaderCourse);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderCourse).apply(this, arguments));
  }

  _createClass(HeaderCourse, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n        <div class=\"heads-covers\">\n        <nav class=\"navbar navbar-expand-lg navbar-light m-navbar\">\n            <div class=\"container headerss\">\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n                    data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                    All Course <i class=\"far fa-chevron-down\"></i>\n                </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">All Course <span class=\"sr-only\">(current)</span></a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Primary School (SD)</a>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Junior High School (SMP)</a>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Senior High School (SMA)</a>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Higher School (PT)</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">Other</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    </div>   \n    ";
    }
  }]);

  return HeaderCourse;
}(_wrapNativeSuper(HTMLElement));

customElements.define('header-after', HeaderAfter);
customElements.define('header-course', HeaderCourse);
customElements.define('header-before', HeaderBefore);