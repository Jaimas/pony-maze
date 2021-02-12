"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Movable_1 = require("./Movable");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, locationPoint) {
        return _super.call(this, name, locationPoint) || this;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    return Player;
}(Movable_1.Movable));
exports.Player = Player;
//# sourceMappingURL=Player.js.map