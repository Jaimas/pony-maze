import { Maze } from "entity/Maze";
import { isArray, isObject } from 'lodash';
import { config } from "config/Config";

describe('Maze', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Should build valid object', () => {
        const maze = new Maze(1, 15, 20);
        expect(isObject(maze)).toBeTruthy();
        expect(isFinite(maze.id)).toBeTruthy();
        expect(isArray(maze.cells)).toBeTruthy();
        expect(maze.startPoint).toBeDefined();
        expect(maze.endPoint).toBeDefined();
    });

    it('Should return valid amount of rows and columns for the cell grid', () => {
        const rowsAmount = 15;
        const columnsInRowAmount = 20;

        const { cells } = new Maze(1, rowsAmount, columnsInRowAmount);
        expect(cells.length).toEqual(rowsAmount);
        expect(cells[10].length).toEqual(columnsInRowAmount);
    });

    it('Should throw error are not in config range', () => {
        try {
            const maze = new Maze(1, config.minMazeRows - 1, config.maxMazeColumns + 1);
            expect(true).toBeFalsy();
        } catch(e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid rows or columns count');
        }
    });

    it('Should throw error if rows and column counts are invalid', () => {
        try {
            const maze = new Maze(1, NaN, NaN);
            expect(true).toBeFalsy();
        } catch(e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid rows or columns count');
        }
    });

    it('Should throw error if rows and column counts are Infinity', () => {
        try {
            const maze = new Maze(1, Infinity, Infinity);
            expect(true).toBeFalsy();
        } catch(e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid rows or columns count');
        }
    });
});