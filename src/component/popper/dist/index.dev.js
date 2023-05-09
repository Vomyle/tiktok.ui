"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popper = require("./popper");

Object.keys(_popper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _popper[key];
    }
  });
});