import { Cell } from "./Cell";
import { config } from '../config/Config';
import { remove, random, forEach, compact } from 'lodash';
import { LocationPoint } from "./LocationPoint";
import { inRangeInclusively } from "../utils/NumberUtils";
import { Direction } from "../utils/Direction";
import { getEndPoint, getStartPoint, removeWallBetweenTwoCells, getCellsGrid } from "../utils/MazeUtils";

export class Maze {
    private rowsCount: number;
    private columnsCount: number;
    id: number;
    cells: Cell[][];
    startPoint: LocationPoint;
    endPoint: LocationPoint;

    constructor(id: number, rowsCount: number, columnsCount: number) {
        if (!this.isValidRowsAndColumnsCounts(rowsCount, columnsCount)) {
            throw Error('Invalid rows or columns count');
        }

        this.id = id;
        this.rowsCount = rowsCount;
        this.columnsCount = columnsCount;
        this.cells = getCellsGrid(rowsCount, columnsCount);
        this.startPoint = getStartPoint(this.columnsCount);
        this.endPoint = getEndPoint(this.rowsCount, this.columnsCount);
        this.constructMaze();
    }

    constructMaze() {
        const startCell = this.getCellByCoord(this.startPoint.getXCoord(), this.startPoint.getYCoord());
        this.removeWallsBetweenNeighboars(startCell);
    }

    removeWallsBetweenNeighboars(selectedCell: Cell) {
        this.markCellAsVisited(selectedCell);
        const notVisitedNeighbourCells = this.getNotVisitedNeighbourCells(selectedCell);

        while (notVisitedNeighbourCells.length > 0) {
            const randomNeighbourCell = this.getRandomNeighbourFromList(notVisitedNeighbourCells);
            if (!this.isCellVisited(randomNeighbourCell)) {
                removeWallBetweenTwoCells(selectedCell, randomNeighbourCell);
            }
            remove(notVisitedNeighbourCells, randomNeighbourCell);
            this.removeWallsBetweenNeighboars(randomNeighbourCell);
        }
    }

    getNotVisitedNeighbourCells(currentCell: Cell) {
        return this.getNeighbourCells(currentCell).filter(cell => !this.isCellVisited(cell));
    }

    getNeighbourCells(cell: Cell) {
        const neighbourCells: Cell[] = [];

        if (inRangeInclusively(cell.getXCoord(), 1, this.columnsCount -1)) {
            const leftNeighbourCell = this.getCellByCoord(cell.getXCoord() -1, cell.getYCoord());
            neighbourCells.push(leftNeighbourCell);
        }

        if(inRangeInclusively(cell.getXCoord(), 0, this.columnsCount -2)) {
            const rightNeighbourCell = this.getCellByCoord(cell.getXCoord() +1, cell.getYCoord());
            neighbourCells.push(rightNeighbourCell);
        }

        if(inRangeInclusively(cell.getYCoord(), 1, this.rowsCount -1)) {
            const topNeighbourCell = this.getCellByCoord(cell.getXCoord(), cell.getYCoord() -1);
            neighbourCells.push(topNeighbourCell);
        }

        if(inRangeInclusively(cell.getYCoord(), 0, this.rowsCount -2)) {
            const bottomNeighbourCell = this.getCellByCoord(cell.getXCoord(), cell.getYCoord() +1);
            neighbourCells.push(bottomNeighbourCell);
        }

        return compact(neighbourCells);
    }

    getRandomNeighbourFromList(neighbourCells : Cell[]) {
        const randomNeighbourIndex = random(0, neighbourCells.length -1);
        return neighbourCells[randomNeighbourIndex];
    }

    isValidRowsAndColumnsCounts(rowsCount: number, columnsCount: number) {
        return inRangeInclusively(rowsCount, config.minMazeRows, config.maxMazeRows) &&
            inRangeInclusively(columnsCount, config.minMazeColumns, config.maxMazeColumns);
    }

    getRowsCount() {
        return this.rowsCount;
    }

    getColumnsCount() {
        return this.columnsCount;
    }

    getCellByCoord(x: number, y: number) {
        return this.cells[y][x];
    }

    isCellVisited(cell: Cell) {
        return this.getCellByCoord(cell.getXCoord(), cell.getYCoord()).isVisited();
    }

    markCellAsVisited(cell: Cell) {
        return this.getCellByCoord(cell.getXCoord(), cell.getYCoord()).makeVisited();
    }

    getWalkableDirections(currentLocation: LocationPoint) {
        const directions: Direction[] = [];
        const currentCell = this.getCellByCoord(currentLocation.getXCoord(), currentLocation.getYCoord());
        const neighbourCells = this.getNeighbourCells(currentCell);

        forEach(neighbourCells, neighbourCell => {
            if (currentCell.isRightNeighourWith(neighbourCell) && !currentCell.hasLeftWallWith(neighbourCell)) {
                directions.push(Direction.LEFT);
            }
            if (currentCell.isLeftNeighourWith(neighbourCell) && !currentCell.hasRightWallWith(neighbourCell)) {
                directions.push(Direction.RIGHT);
            }
            if (currentCell.isBottomNeighbourWith(neighbourCell) && !currentCell.hasTopWallWith(neighbourCell)) {
                directions.push(Direction.UP);
            }
            if (currentCell.isTopNeighbourWith(neighbourCell) && !currentCell.hasBottomWallWith(neighbourCell)) {
                directions.push(Direction.DOWN);
            }
        });

        return directions;
    }
}