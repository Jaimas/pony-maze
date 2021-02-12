"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inRangeInclusively = exports.parseInteger = exports.isInteger = void 0;
var lodash_1 = require("lodash");
var isInteger = function (val) {
    return !lodash_1.isNull(val) && isFinite(Number(val));
};
exports.isInteger = isInteger;
var parseInteger = function (val) {
    return exports.isInteger(val) ? Number(val) : 0;
};
exports.parseInteger = parseInteger;
var inRangeInclusively = function (val, start, end) {
    return exports.isInteger(val) &&
        exports.isInteger(start) &&
        exports.isInteger(end) &&
        lodash_1.inRange(val, start, end + 1);
};
exports.inRangeInclusively = inRangeInclusively;
//# sourceMappingURL=NumberUtils.js.map