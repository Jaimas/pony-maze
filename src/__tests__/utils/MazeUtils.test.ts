import { Cell } from "entity/Cell";
import { Game } from "entity/Game";
import { isEmpty, isString } from "lodash";
import { getHTMLTableOfGame, removeWallBetweenTwoCells, getStartPoint, getEndPoint, getCellsGrid } from "utils/MazeUtils";

describe('MazeUtils', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    describe('getCellsGrid', () => {
        it('should construct valid cells grid', () => {
            const cells = getCellsGrid(16, 20);
            expect(cells.length).toEqual(16);
            expect(cells[0].length).toEqual(20);
            expect(cells[0][0]).toBeInstanceOf(Cell);
        });
    });

    describe('getStartPoint', () => {
        it('should return valid start location point', () => {
            const location = getStartPoint(20);
            expect(location.getXCoord()).toEqual(10);
            expect(location.getYCoord()).toEqual(0);
        });
    });

    describe('getEndPoint', () => {
        it('should return valid end location point', () => {
            const location = getEndPoint(16, 20);
            expect(location.getXCoord()).toEqual(10);
            expect(location.getYCoord()).toEqual(15);
        });
    });

    describe('removeWallBetweenTwoCells', () => {
        it('Should remove left&right walls between two cells', () => {
            const cellA = new Cell(1, 1);
            const cellB = new Cell(0, 1);
            removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasLeftWall()).toBeFalsy();
            expect(cellB.hasRightWall()).toBeFalsy();
        });

        it('Should remove right&left walls between two cells', () => {
            const cellA = new Cell(0, 1);
            const cellB = new Cell(1, 1);
            removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasRightWall()).toBeFalsy();
            expect(cellB.hasLeftWall()).toBeFalsy();
        });

        it('Should remove top&bottom walls between two cells', () => {
            const cellA = new Cell(1, 1);
            const cellB = new Cell(1, 0);
            removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasTopWall()).toBeFalsy();
            expect(cellB.hasBottomWall()).toBeFalsy();
        });

        it('Should remove bottom&top walls between two cells', () => {
            const cellA = new Cell(1, 0);
            const cellB = new Cell(1, 1);
            removeWallBetweenTwoCells(cellA, cellB);
            expect(cellA.hasBottomWall()).toBeFalsy();
            expect(cellB.hasTopWall()).toBeFalsy();
        });
    });

    describe('getHTMLTableOfGame', () => {
        const game = new Game(1, 15, 20, "Name");

        it('getHTMLTableOfGame is defined', () => {
            expect(getHTMLTableOfGame).toBeDefined();
        });

        it('Should build valid HTML and not fail', () => {
            const html = getHTMLTableOfGame(game);
            expect(isString(html)).toBeTruthy();
            expect(isEmpty(html)).toBeFalsy();
        });
    });
});