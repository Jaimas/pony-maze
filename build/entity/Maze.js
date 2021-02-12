"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maze = void 0;
var Config_1 = require("../config/Config");
var lodash_1 = require("lodash");
var NumberUtils_1 = require("../utils/NumberUtils");
var Direction_1 = require("../utils/Direction");
var MazeUtils_1 = require("../utils/MazeUtils");
var Maze = /** @class */ (function () {
    function Maze(id, rowsCount, columnsCount) {
        if (!this.isValidRowsAndColumnsCounts(rowsCount, columnsCount)) {
            throw Error('Invalid rows or columns count');
        }
        this.id = id;
        this.rowsCount = rowsCount;
        this.columnsCount = columnsCount;
        this.cells = MazeUtils_1.getCellsGrid(rowsCount, columnsCount);
        this.startPoint = MazeUtils_1.getStartPoint(this.columnsCount);
        this.endPoint = MazeUtils_1.getEndPoint(this.rowsCount, this.columnsCount);
        this.constructMaze();
    }
    Maze.prototype.constructMaze = function () {
        var startCell = this.getCellByCoord(this.startPoint.getXCoord(), this.startPoint.getYCoord());
        this.removeWallsBetweenNeighboars(startCell);
    };
    Maze.prototype.removeWallsBetweenNeighboars = function (selectedCell) {
        this.markCellAsVisited(selectedCell);
        var notVisitedNeighbourCells = this.getNotVisitedNeighbourCells(selectedCell);
        while (notVisitedNeighbourCells.length > 0) {
            var randomNeighbourCell = this.getRandomNeighbourFromList(notVisitedNeighbourCells);
            if (!this.isCellVisited(randomNeighbourCell)) {
                MazeUtils_1.removeWallBetweenTwoCells(selectedCell, randomNeighbourCell);
            }
            lodash_1.remove(notVisitedNeighbourCells, randomNeighbourCell);
            this.removeWallsBetweenNeighboars(randomNeighbourCell);
        }
    };
    Maze.prototype.getNotVisitedNeighbourCells = function (currentCell) {
        var _this = this;
        return this.getNeighbourCells(currentCell).filter(function (cell) { return !_this.isCellVisited(cell); });
    };
    Maze.prototype.getNeighbourCells = function (cell) {
        var neighbourCells = [];
        if (NumberUtils_1.inRangeInclusively(cell.getXCoord(), 1, this.columnsCount - 1)) {
            var leftNeighbourCell = this.getCellByCoord(cell.getXCoord() - 1, cell.getYCoord());
            neighbourCells.push(leftNeighbourCell);
        }
        if (NumberUtils_1.inRangeInclusively(cell.getXCoord(), 0, this.columnsCount - 2)) {
            var rightNeighbourCell = this.getCellByCoord(cell.getXCoord() + 1, cell.getYCoord());
            neighbourCells.push(rightNeighbourCell);
        }
        if (NumberUtils_1.inRangeInclusively(cell.getYCoord(), 1, this.rowsCount - 1)) {
            var topNeighbourCell = this.getCellByCoord(cell.getXCoord(), cell.getYCoord() - 1);
            neighbourCells.push(topNeighbourCell);
        }
        if (NumberUtils_1.inRangeInclusively(cell.getYCoord(), 0, this.rowsCount - 2)) {
            var bottomNeighbourCell = this.getCellByCoord(cell.getXCoord(), cell.getYCoord() + 1);
            neighbourCells.push(bottomNeighbourCell);
        }
        return lodash_1.compact(neighbourCells);
    };
    Maze.prototype.getRandomNeighbourFromList = function (neighbourCells) {
        var randomNeighbourIndex = lodash_1.random(0, neighbourCells.length - 1);
        return neighbourCells[randomNeighbourIndex];
    };
    Maze.prototype.isValidRowsAndColumnsCounts = function (rowsCount, columnsCount) {
        return NumberUtils_1.inRangeInclusively(rowsCount, Config_1.config.minMazeRows, Config_1.config.maxMazeRows) &&
            NumberUtils_1.inRangeInclusively(columnsCount, Config_1.config.minMazeColumns, Config_1.config.maxMazeColumns);
    };
    Maze.prototype.getRowsCount = function () {
        return this.rowsCount;
    };
    Maze.prototype.getColumnsCount = function () {
        return this.columnsCount;
    };
    Maze.prototype.getCellByCoord = function (x, y) {
        return this.cells[y][x];
    };
    Maze.prototype.isCellVisited = function (cell) {
        return this.getCellByCoord(cell.getXCoord(), cell.getYCoord()).isVisited();
    };
    Maze.prototype.markCellAsVisited = function (cell) {
        return this.getCellByCoord(cell.getXCoord(), cell.getYCoord()).makeVisited();
    };
    Maze.prototype.getWalkableDirections = function (currentLocation) {
        var directions = [];
        var currentCell = this.getCellByCoord(currentLocation.getXCoord(), currentLocation.getYCoord());
        var neighbourCells = this.getNeighbourCells(currentCell);
        lodash_1.forEach(neighbourCells, function (neighbourCell) {
            if (currentCell.isRightNeighourWith(neighbourCell) && !currentCell.hasLeftWallWith(neighbourCell)) {
                directions.push(Direction_1.Direction.LEFT);
            }
            if (currentCell.isLeftNeighourWith(neighbourCell) && !currentCell.hasRightWallWith(neighbourCell)) {
                directions.push(Direction_1.Direction.RIGHT);
            }
            if (currentCell.isBottomNeighbourWith(neighbourCell) && !currentCell.hasTopWallWith(neighbourCell)) {
                directions.push(Direction_1.Direction.UP);
            }
            if (currentCell.isTopNeighbourWith(neighbourCell) && !currentCell.hasBottomWallWith(neighbourCell)) {
                directions.push(Direction_1.Direction.DOWN);
            }
        });
        return directions;
    };
    return Maze;
}());
exports.Maze = Maze;
//# sourceMappingURL=Maze.js.map