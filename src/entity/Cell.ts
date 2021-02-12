import { LocationPoint } from "./LocationPoint";

export class Cell {
    private locationPoint: LocationPoint;
    private leftWall: boolean;
    private rightWall: boolean;
    private topWall: boolean;
    private bottomWall: boolean;
    private visited: boolean;

    constructor(xCoord: number, yCoord: number) {
        this.locationPoint = new LocationPoint(xCoord, yCoord);
        this.leftWall = true;
        this.rightWall = true;
        this.topWall = true;
        this.bottomWall = true;
        this.visited = false;
    }

    hasLeftWallWith(cell: Cell) {
        return this.isRightNeighourWith(cell) && this.hasLeftWall() && cell.hasRightWall();
    }

    hasRightWallWith(cell: Cell) {
        return this.isLeftNeighourWith(cell) && this.hasRightWall() && cell.hasLeftWall();
    }

    hasTopWallWith(cell: Cell) {
        return this.isBottomNeighbourWith(cell) && this.hasTopWall() && cell.hasBottomWall();
    }

    hasBottomWallWith(cell: Cell) {
        return this.isTopNeighbourWith(cell) && this.hasBottomWall() && cell.hasTopWall();
    }

    isLeftNeighourWith(cell: Cell) {
        return (this.locationPoint.getXCoord() - cell.getXCoord()) === -1;
    }

    isRightNeighourWith(cell: Cell) {
        return (this.locationPoint.getXCoord() - cell.getXCoord()) === 1;
    }

    isTopNeighbourWith(cell: Cell) {
        return (this.locationPoint.getYCoord() - cell.getYCoord()) === -1;
    }

    isBottomNeighbourWith(cell: Cell) {
        return (this.locationPoint.getYCoord() - cell.getYCoord()) === 1;
    }

    hasLeftWall() {
        return this.leftWall;
    }

    hasRightWall() {
        return this.rightWall;
    }

    hasTopWall() {
        return this.topWall;
    }

    hasBottomWall() {
        return this.bottomWall;
    }

    getXCoord() {
        return this.locationPoint.getXCoord();
    }

    getYCoord() {
        return this.locationPoint.getYCoord();
    }

    isVisited() {
        return this.visited;
    }

    makeVisited() {
        this.visited = true;
    }

    removeLeftWall() {
        this.leftWall = false;
    }

    removeRightWall() {
        this.rightWall = false;
    }

    removeTopWall() {
        this.topWall = false;
    }

    removeBottomWall() {
        this.bottomWall = false;
    }
}