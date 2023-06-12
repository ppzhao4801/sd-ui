"use strict";

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

// global sessionStorage
var Base = require("lowdb/adapters/Base");

var SessionStorage = (function (_Base) {
  _inherits(SessionStorage, _Base);

  function SessionStorage() {
    _classCallCheck(this, SessionStorage);

    return _possibleConstructorReturn(
      this,
      (SessionStorage.__proto__ || Object.getPrototypeOf(SessionStorage)).apply(this, arguments)
    );
  }

  _createClass(SessionStorage, [
    {
      key: "read",
      value: function read() {
        var data = sessionStorage.getItem(this.source);
        if (data) {
          return this.deserialize(data);
        } else {
          sessionStorage.setItem(this.source, this.serialize(this.defaultValue));
          return this.defaultValue;
        }
      },
    },
    {
      key: "write",
      value: function write(data) {
        sessionStorage.setItem(this.source, this.serialize(data));
      },
    },
  ]);

  return SessionStorage;
})(Base);

module.exports = SessionStorage;
