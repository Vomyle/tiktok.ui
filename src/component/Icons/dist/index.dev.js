"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icons = require("./Icons");

Object.keys(_Icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Icons[key];
    }
  });
});