"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = require("entity/Cell");
var Game_1 = require("entity/Game");
var lodash_1 = require("lodash");
var MazeUtils_1 = require("utils/MazeUtils");
describe('MazeUtils', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    describe('getCellsGrid', function () {
        it('should construct valid cells grid', function () {
            var cells = MazeUtils_1.getCellsGrid(16, 20);
            expect(cells.length).toEqual(16);
            expect(cells[0].length).toEqual(20);
            expect(cells[0][0]).toBeInstanceOf(Cell_1.Cell);
        });
    });
    describe('getStartPoint', function () {
        it('should return valid start location point', function () {
            var location = MazeUtils_1.getStartPoint(20);
            expect(location.getXCoord()).toEqual(10);
            expect(location.getYCoord()).toEqual(0);
        });
    });
    describe('getEndPoint', function () {
        it('should return valid end location point', function () {
            var location = MazeUtils_1.getEndPoint(16, 20);
            expect(location.getXCoord()).toEqual(10);
            expect(location.getYCoord()).toEqual(15);
        });
    });
    describe('removeWallBetweenTwoCells', function () {
        it('Should remove left&right walls between two cells', function () {
            var cellA = new Cell_1.Cell(1, 1);
            var cellB = new Cell_1.Cell(0, 1);
            MazeUtils_1.removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasLeftWall()).toBeFalsy();
            expect(cellB.hasRightWall()).toBeFalsy();
        });
        it('Should remove right&left walls between two cells', function () {
            var cellA = new Cell_1.Cell(0, 1);
            var cellB = new Cell_1.Cell(1, 1);
            MazeUtils_1.removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasRightWall()).toBeFalsy();
            expect(cellB.hasLeftWall()).toBeFalsy();
        });
        it('Should remove top&bottom walls between two cells', function () {
            var cellA = new Cell_1.Cell(1, 1);
            var cellB = new Cell_1.Cell(1, 0);
            MazeUtils_1.removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasTopWall()).toBeFalsy();
            expect(cellB.hasBottomWall()).toBeFalsy();
        });
        it('Should remove bottom&top walls between two cells', function () {
            var cellA = new Cell_1.Cell(1, 0);
            var cellB = new Cell_1.Cell(1, 1);
            MazeUtils_1.removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasBottomWall()).toBeFalsy();
            expect(cellB.hasTopWall()).toBeFalsy();
        });
    });
    describe('getHTMLTableOfGame', function () {
        var game = new Game_1.Game(1, 15, 20, "Name");
        it('getHTMLTableOfGame is defined', function () {
            expect(MazeUtils_1.getHTMLTableOfGame).toBeDefined();
        });
        it('Should build valid HTML and not fail', function () {
            var html = MazeUtils_1.getHTMLTableOfGame(game);
            expect(lodash_1.isString(html)).toBeTruthy();
            expect(lodash_1.isEmpty(html)).toBeFalsy();
        });
    });
});
//# sourceMappingURL=MazeUtils.test.js.map