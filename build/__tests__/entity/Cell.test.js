"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = require("entity/Cell");
describe('Cell', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Should build valid object', function () {
        var cell = new Cell_1.Cell(1, 2);
        expect(cell.getXCoord()).toEqual(1);
        expect(cell.getYCoord()).toEqual(2);
        expect(cell.hasLeftWall()).toBeTruthy();
        expect(cell.hasRightWall()).toBeTruthy();
        expect(cell.hasTopWall()).toBeTruthy();
        expect(cell.hasBottomWall()).toBeTruthy();
        expect(cell.isVisited()).toBeFalsy();
    });
    it('Should let to modify state of the object', function () {
        var cell = new Cell_1.Cell(1, 2);
        cell.makeVisited();
        cell.removeLeftWall();
        cell.removeRightWall();
        cell.removeTopWall();
        cell.removeBottomWall();
        expect(cell.isVisited()).toBeTruthy();
        expect(cell.hasLeftWall()).toBeFalsy();
        expect(cell.hasRightWall()).toBeFalsy();
        expect(cell.hasTopWall()).toBeFalsy();
        expect(cell.hasBottomWall()).toBeFalsy();
    });
    describe('hasLeftWallWith', function () {
        it('Should return true if has left wall', function () {
            var cellA = new Cell_1.Cell(1, 0);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.hasLeftWallWith(cellB)).toBeTruthy();
        });
        it('Should return false if has not left wall', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(1, 0);
            expect(cellA.hasLeftWallWith(cellB)).toBeFalsy();
        });
    });
    describe('hasRightWallWith', function () {
        it('Should return true if has right wall', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(1, 0);
            expect(cellA.hasRightWallWith(cellB)).toBeTruthy();
        });
        it('Should return false if has not right wall', function () {
            var cellA = new Cell_1.Cell(1, 0);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.hasRightWallWith(cellB)).toBeFalsy();
        });
    });
    describe('hasTopWallWith', function () {
        it('Should return true if has top wall', function () {
            var cellA = new Cell_1.Cell(0, 1);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.hasTopWallWith(cellB)).toBeTruthy();
        });
        it('Should return false if has not top wall', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(0, 1);
            expect(cellA.hasTopWallWith(cellB)).toBeFalsy();
        });
    });
    describe('hasBottomWallWith', function () {
        it('Should return true if has bottom wall', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(0, 1);
            expect(cellA.hasBottomWallWith(cellB)).toBeTruthy();
        });
        it('Should return false if has not bottom wall', function () {
            var cellA = new Cell_1.Cell(0, 1);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.hasBottomWallWith(cellB)).toBeFalsy();
        });
    });
    describe('isLeftNeighourWith', function () {
        it('Should return true if left neighbour', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(1, 0);
            expect(cellA.isLeftNeighourWith(cellB)).toBeTruthy();
        });
        it('Should return false if not left neighbour', function () {
            var cellA = new Cell_1.Cell(1, 0);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.isLeftNeighourWith(cellB)).toBeFalsy();
        });
    });
    describe('isRightNeighourWith', function () {
        it('Should return true if right neighbour', function () {
            var cellA = new Cell_1.Cell(1, 0);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.isRightNeighourWith(cellB)).toBeTruthy();
        });
        it('Should return false if not right neighbour', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(1, 0);
            expect(cellA.isRightNeighourWith(cellB)).toBeFalsy();
        });
    });
    describe('isTopNeighbourWith', function () {
        it('Should return true if top neighbour', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(0, 1);
            expect(cellA.isTopNeighbourWith(cellB)).toBeTruthy();
        });
        it('Should return false if not top neighbour', function () {
            var cellA = new Cell_1.Cell(0, 1);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.isTopNeighbourWith(cellB)).toBeFalsy();
        });
    });
    describe('isBottomNeighbourWith', function () {
        it('Should return true if bottom neighbour', function () {
            var cellA = new Cell_1.Cell(0, 1);
            var cellB = new Cell_1.Cell(0, 0);
            expect(cellA.isBottomNeighbourWith(cellB)).toBeTruthy();
        });
        it('Should return false if not bottom neighbour', function () {
            var cellA = new Cell_1.Cell(0, 0);
            var cellB = new Cell_1.Cell(0, 1);
            expect(cellA.isBottomNeighbourWith(cellB)).toBeFalsy();
        });
    });
});
//# sourceMappingURL=Cell.test.js.map