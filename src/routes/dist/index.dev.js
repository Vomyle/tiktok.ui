"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _Home = _interopRequireDefault(require("~/pages/Home"));

var _Following = _interopRequireDefault(require("~/pages/Following"));

var _Upload = _interopRequireDefault(require("~/pages/Upload"));

var _layouts = require("~/layouts");

var _Search = _interopRequireDefault(require("~/pages/Search"));

var _Profile = _interopRequireDefault(require("~/pages/Profile"));

var _config = _interopRequireDefault(require("~/config"));

var _live = _interopRequireDefault(require("~/pages/live"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicRoutes = [{
  path: _config["default"].routes.home,
  component: _Home["default"]
}, {
  path: _config["default"].routes.following,
  component: _Following["default"]
}, {
  path: _config["default"].routes.profile,
  component: _Profile["default"]
}, {
  path: _config["default"].routes.upload,
  component: _Upload["default"]
}, {
  path: _config["default"].routes.search,
  component: _Search["default"],
  layout: _layouts.HeaderOnly
}, {
  path: _config["default"].routes.live,
  component: _live["default"]
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [];
exports.privateRoutes = privateRoutes;