"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movable = void 0;
var LocationPoint_1 = require("./LocationPoint");
var Movable = /** @class */ (function () {
    function Movable(name, locationPoint) {
        this.name = name;
        this.locationPoint = locationPoint;
    }
    Movable.prototype.getLocation = function () {
        return this.locationPoint;
    };
    Movable.prototype.moveLeft = function () {
        this.locationPoint = new LocationPoint_1.LocationPoint(this.locationPoint.getXCoord() - 1, this.locationPoint.getYCoord());
    };
    Movable.prototype.moveRight = function () {
        this.locationPoint = new LocationPoint_1.LocationPoint(this.locationPoint.getXCoord() + 1, this.locationPoint.getYCoord());
    };
    Movable.prototype.moveUp = function () {
        this.locationPoint = new LocationPoint_1.LocationPoint(this.locationPoint.getXCoord(), this.locationPoint.getYCoord() - 1);
    };
    Movable.prototype.moveDown = function () {
        this.locationPoint = new LocationPoint_1.LocationPoint(this.locationPoint.getXCoord(), this.locationPoint.getYCoord() + 1);
    };
    return Movable;
}());
exports.Movable = Movable;
//# sourceMappingURL=Movable.js.map