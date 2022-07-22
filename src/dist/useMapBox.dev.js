"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useMapbox;

var _react = require("react");

var _mapboxGl = _interopRequireDefault(require("mapbox-gl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useMapbox(containerRef) {
  _mapboxGl["default"].accessToken = "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
  (0, _react.useLayoutEffect)(function () {
    var map = new _mapboxGl["default"].Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.61192, 55.76199],
      zoom: 10
    });
  }, []);
}