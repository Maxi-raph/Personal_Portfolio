import { r as __toESM } from "../_runtime.mjs";
import { I as require_react } from "./@tanstack/react-router+[...].mjs";
//#region node_modules/react-spinners/esm/helpers/unitConverter.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var cssUnit = {
	cm: true,
	mm: true,
	in: true,
	px: true,
	pt: true,
	pc: true,
	em: true,
	ex: true,
	ch: true,
	rem: true,
	vw: true,
	vh: true,
	vmin: true,
	vmax: true,
	"%": true
};
/**
* If size is a number, append px to the value as default unit.
* If size is a string, validate against list of valid units.
* If unit is valid, return size as is.
* If unit is invalid, console warn issue, replace with px as the unit.
*
* @param {(number | string)} size
* @return {LengthObject} LengthObject
*/
function parseLengthAndUnit(size) {
	if (typeof size === "number") return {
		value: size,
		unit: "px"
	};
	var value;
	var valueString = (size.match(/^[0-9.]*/) || "").toString();
	if (valueString.includes(".")) value = parseFloat(valueString);
	else value = parseInt(valueString, 10);
	var unit = (size.match(/[^0-9]*$/) || "").toString();
	if (cssUnit[unit]) return {
		value,
		unit
	};
	console.warn("React Spinners: ".concat(size, " is not a valid css value. Defaulting to ").concat(value, "px."));
	return {
		value,
		unit: "px"
	};
}
/**
* Take value as an input and return valid css value
*
* @param {(number | string)} value
* @return {string} valid css value
*/
function cssValue(value) {
	var lengthWithunit = parseLengthAndUnit(value);
	return "".concat(lengthWithunit.value).concat(lengthWithunit.unit);
}
//#endregion
//#region node_modules/react-spinners/esm/helpers/animation.js
var createAnimation = function(loaderName, frames, suffix) {
	var animationName = "react-spinners-".concat(loaderName, "-").concat(suffix);
	if (typeof window == "undefined" || !window.document) return animationName;
	var styleEl = document.createElement("style");
	document.head.appendChild(styleEl);
	var styleSheet = styleEl.sheet;
	var keyFrames = "\n    @keyframes ".concat(animationName, " {\n      ").concat(frames, "\n    }\n  ");
	if (styleSheet) styleSheet.insertRule(keyFrames, 0);
	return animationName;
};
//#endregion
//#region node_modules/react-spinners/esm/ClipLoader.js
var __assign = function() {
	__assign = Object.assign || function(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
};
var clip = createAnimation("ClipLoader", "0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}", "clip");
function ClipLoader(_a) {
	var _b = _a.loading, loading = _b === void 0 ? true : _b, _c = _a.color, color = _c === void 0 ? "#000000" : _c, _d = _a.speedMultiplier, speedMultiplier = _d === void 0 ? 1 : _d, _e = _a.cssOverride, cssOverride = _e === void 0 ? {} : _e, _f = _a.size, size = _f === void 0 ? 35 : _f, additionalprops = __rest(_a, [
		"loading",
		"color",
		"speedMultiplier",
		"cssOverride",
		"size"
	]);
	var style = __assign({
		background: "transparent !important",
		width: cssValue(size),
		height: cssValue(size),
		borderRadius: "100%",
		border: "2px solid",
		borderTopColor: color,
		borderBottomColor: "transparent",
		borderLeftColor: color,
		borderRightColor: color,
		display: "inline-block",
		animation: "".concat(clip, " ").concat(.75 / speedMultiplier, "s 0s infinite linear"),
		animationFillMode: "both"
	}, cssOverride);
	if (!loading) return null;
	return import_react.createElement("span", __assign({ style }, additionalprops));
}
//#endregion
export { ClipLoader as t };
