"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDirection = exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["UP"] = "up";
    Direction["DOWN"] = "down";
    Direction["LEFT"] = "left";
    Direction["RIGHT"] = "right";
})(Direction = exports.Direction || (exports.Direction = {}));
var isDirection = function (val) {
    return Object.values(Direction).includes(val);
};
exports.isDirection = isDirection;
//# sourceMappingURL=Direction.js.map