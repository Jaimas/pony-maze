"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var LocationPoint_1 = require("./LocationPoint");
var Cell = /** @class */ (function () {
    function Cell(xCoord, yCoord) {
        this.locationPoint = new LocationPoint_1.LocationPoint(xCoord, yCoord);
        this.leftWall = true;
        this.rightWall = true;
        this.topWall = true;
        this.bottomWall = true;
        this.visited = false;
    }
    Cell.prototype.hasLeftWallWith = function (cell) {
        return this.isRightNeighourWith(cell) && this.hasLeftWall() && cell.hasRightWall();
    };
    Cell.prototype.hasRightWallWith = function (cell) {
        return this.isLeftNeighourWith(cell) && this.hasRightWall() && cell.hasLeftWall();
    };
    Cell.prototype.hasTopWallWith = function (cell) {
        return this.isBottomNeighbourWith(cell) && this.hasTopWall() && cell.hasBottomWall();
    };
    Cell.prototype.hasBottomWallWith = function (cell) {
        return this.isTopNeighbourWith(cell) && this.hasBottomWall() && cell.hasTopWall();
    };
    Cell.prototype.isLeftNeighourWith = function (cell) {
        return (this.locationPoint.getXCoord() - cell.getXCoord()) === -1;
    };
    Cell.prototype.isRightNeighourWith = function (cell) {
        return (this.locationPoint.getXCoord() - cell.getXCoord()) === 1;
    };
    Cell.prototype.isTopNeighbourWith = function (cell) {
        return (this.locationPoint.getYCoord() - cell.getYCoord()) === -1;
    };
    Cell.prototype.isBottomNeighbourWith = function (cell) {
        return (this.locationPoint.getYCoord() - cell.getYCoord()) === 1;
    };
    Cell.prototype.hasLeftWall = function () {
        return this.leftWall;
    };
    Cell.prototype.hasRightWall = function () {
        return this.rightWall;
    };
    Cell.prototype.hasTopWall = function () {
        return this.topWall;
    };
    Cell.prototype.hasBottomWall = function () {
        return this.bottomWall;
    };
    Cell.prototype.getXCoord = function () {
        return this.locationPoint.getXCoord();
    };
    Cell.prototype.getYCoord = function () {
        return this.locationPoint.getYCoord();
    };
    Cell.prototype.isVisited = function () {
        return this.visited;
    };
    Cell.prototype.makeVisited = function () {
        this.visited = true;
    };
    Cell.prototype.removeLeftWall = function () {
        this.leftWall = false;
    };
    Cell.prototype.removeRightWall = function () {
        this.rightWall = false;
    };
    Cell.prototype.removeTopWall = function () {
        this.topWall = false;
    };
    Cell.prototype.removeBottomWall = function () {
        this.bottomWall = false;
    };
    return Cell;
}());
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map