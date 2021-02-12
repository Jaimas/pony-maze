"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maze_1 = require("entity/Maze");
var lodash_1 = require("lodash");
var Config_1 = require("config/Config");
describe('Maze', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Should build valid object', function () {
        var maze = new Maze_1.Maze(1, 15, 20);
        expect(lodash_1.isObject(maze)).toBeTruthy();
        expect(isFinite(maze.id)).toBeTruthy();
        expect(lodash_1.isArray(maze.cells)).toBeTruthy();
        expect(maze.startPoint).toBeDefined();
        expect(maze.endPoint).toBeDefined();
    });
    it('Should return valid amount of rows and columns for the cell grid', function () {
        var rowsAmount = 15;
        var columnsInRowAmount = 20;
        var cells = new Maze_1.Maze(1, rowsAmount, columnsInRowAmount).cells;
        expect(cells.length).toEqual(rowsAmount);
        expect(cells[10].length).toEqual(columnsInRowAmount);
    });
    it('Should throw error are not in config range', function () {
        try {
            var maze = new Maze_1.Maze(1, Config_1.config.minMazeRows - 1, Config_1.config.maxMazeColumns + 1);
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid rows or columns count');
        }
    });
    it('Should throw error if rows and column counts are invalid', function () {
        try {
            var maze = new Maze_1.Maze(1, NaN, NaN);
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid rows or columns count');
        }
    });
    it('Should throw error if rows and column counts are Infinity', function () {
        try {
            var maze = new Maze_1.Maze(1, Infinity, Infinity);
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid rows or columns count');
        }
    });
});
//# sourceMappingURL=Maze.test.js.map