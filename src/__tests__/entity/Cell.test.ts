import { Cell } from "entity/Cell";

describe('Cell', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Should build valid object', () => {
        const cell = new Cell(1, 2);
        expect(cell.getXCoord()).toEqual(1);
        expect(cell.getYCoord()).toEqual(2);
        expect(cell.hasLeftWall()).toBeTruthy();
        expect(cell.hasRightWall()).toBeTruthy();
        expect(cell.hasTopWall()).toBeTruthy();
        expect(cell.hasBottomWall()).toBeTruthy();
        expect(cell.isVisited()).toBeFalsy();
    });

    it('Should let to modify state of the object', () => {
        const cell = new Cell(1, 2);
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

    describe('hasLeftWallWith', () => {
        it('Should return true if has left wall', () => {
            const cellA = new Cell(1, 0);
            const cellB = new Cell(0, 0);
            expect(cellA.hasLeftWallWith(cellB)).toBeTruthy();
        });

        it('Should return false if has not left wall', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(1, 0);
            expect(cellA.hasLeftWallWith(cellB)).toBeFalsy();
        });
    });

    describe('hasRightWallWith', () => {
        it('Should return true if has right wall', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(1, 0);
            expect(cellA.hasRightWallWith(cellB)).toBeTruthy();
        });

        it('Should return false if has not right wall', () => {
            const cellA = new Cell(1, 0);
            const cellB = new Cell(0, 0);
            expect(cellA.hasRightWallWith(cellB)).toBeFalsy();
        });
    });

    describe('hasTopWallWith', () => {
        it('Should return true if has top wall', () => {
            const cellA = new Cell(0, 1);
            const cellB = new Cell(0, 0);
            expect(cellA.hasTopWallWith(cellB)).toBeTruthy();
        });

        it('Should return false if has not top wall', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(0, 1);
            expect(cellA.hasTopWallWith(cellB)).toBeFalsy();
        });
    });

    describe('hasBottomWallWith', () => {
        it('Should return true if has bottom wall', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(0, 1);
            expect(cellA.hasBottomWallWith(cellB)).toBeTruthy();
        });

        it('Should return false if has not bottom wall', () => {
            const cellA = new Cell(0, 1);
            const cellB = new Cell(0, 0);
            expect(cellA.hasBottomWallWith(cellB)).toBeFalsy();
        });
    });

    describe('isLeftNeighourWith', () => {
        it('Should return true if left neighbour', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(1, 0);
            expect(cellA.isLeftNeighourWith(cellB)).toBeTruthy();
        });

        it('Should return false if not left neighbour', () => {
            const cellA = new Cell(1, 0);
            const cellB = new Cell(0, 0);
            expect(cellA.isLeftNeighourWith(cellB)).toBeFalsy();
        });
    });

    describe('isRightNeighourWith', () => {
        it('Should return true if right neighbour', () => {
            const cellA = new Cell(1, 0);
            const cellB = new Cell(0, 0);
            expect(cellA.isRightNeighourWith(cellB)).toBeTruthy();
        });

        it('Should return false if not right neighbour', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(1, 0);
            expect(cellA.isRightNeighourWith(cellB)).toBeFalsy();
        });
    });

    describe('isTopNeighbourWith', () => {
        it('Should return true if top neighbour', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(0, 1);
            expect(cellA.isTopNeighbourWith(cellB)).toBeTruthy();
        });

        it('Should return false if not top neighbour', () => {
            const cellA = new Cell(0, 1);
            const cellB = new Cell(0, 0);
            expect(cellA.isTopNeighbourWith(cellB)).toBeFalsy();
        });
    });

    describe('isBottomNeighbourWith', () => {
        it('Should return true if bottom neighbour', () => {
            const cellA = new Cell(0, 1);
            const cellB = new Cell(0, 0);
            expect(cellA.isBottomNeighbourWith(cellB)).toBeTruthy();
        });

        it('Should return false if not bottom neighbour', () => {
            const cellA = new Cell(0, 0);
            const cellB = new Cell(0, 1);
            expect(cellA.isBottomNeighbourWith(cellB)).toBeFalsy();
        });
    });
});