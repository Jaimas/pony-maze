"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHTMLTableOfGame = exports.removeWallBetweenTwoCells = exports.getEndPoint = exports.getStartPoint = exports.getCellsGrid = void 0;
var Cell_1 = require("../entity/Cell");
var LocationPoint_1 = require("../entity/LocationPoint");
var lodash_1 = require("lodash");
var START_CELL_CLASS = "start";
var END_CELL_CLASS = "end";
var getCellsGrid = function (rowsCount, columnsCount) {
    var cells = [];
    for (var rowNumber = 0; rowNumber < rowsCount; rowNumber++) {
        cells[rowNumber] = [];
        for (var columnNumber = 0; columnNumber < columnsCount; columnNumber++) {
            cells[rowNumber][columnNumber] = new Cell_1.Cell(columnNumber, rowNumber);
        }
    }
    return cells;
};
exports.getCellsGrid = getCellsGrid;
var getStartPoint = function (columnsCount) {
    var columnMiddleIndex = lodash_1.toInteger(columnsCount / 2);
    return new LocationPoint_1.LocationPoint(columnMiddleIndex, 0);
};
exports.getStartPoint = getStartPoint;
var getEndPoint = function (rowsCount, columnsCount) {
    var columnMiddleIndex = lodash_1.toInteger(columnsCount / 2);
    var lastRowIndex = rowsCount - 1;
    return new LocationPoint_1.LocationPoint(columnMiddleIndex, lastRowIndex);
};
exports.getEndPoint = getEndPoint;
var removeWallBetweenTwoCells = function (cellA, cellB) {
    if (cellA.isLeftNeighourWith(cellB)) {
        cellA.removeRightWall();
        cellB.removeLeftWall();
    }
    if (cellA.isRightNeighourWith(cellB)) {
        cellA.removeLeftWall();
        cellB.removeRightWall();
    }
    if (cellA.isTopNeighbourWith(cellB)) {
        cellA.removeBottomWall();
        cellB.removeTopWall();
    }
    if (cellA.isBottomNeighbourWith(cellB)) {
        cellA.removeTopWall();
        cellB.removeBottomWall();
    }
};
exports.removeWallBetweenTwoCells = removeWallBetweenTwoCells;
var getHTMLTableOfGame = function (game) {
    var maze = game.getMaze();
    var tableHTML = "\n        <html>\n            <head>\n                <link rel=\"shortcut icon\" href=\"#\">\n                <style>\n                    td {\n                        padding: 12px;\n                        min-width: 12px;\n                        text-align: center;\n                    }\n                    td.left {\n                        border-left: 1px solid #000;\n                    }\n                    td.right {\n                        border-right: 1px solid #000;\n                    }\n                    td.top {\n                        border-top: 1px solid #000;\n                    }\n                    td.buttom {\n                        border-bottom: 1px solid #000;\n                    }\n                    td.start {\n                        background: lightgreen;\n                    }\n                    td.end {\n                        background: coral;\n                    }\n                </style>\n            </head>\n            <body>\n                <table>\n                    <tr>\n                    <td>/</td>\n    ";
    for (var i = 0; i < maze.getColumnsCount(); i++) {
        tableHTML += "<td>" + i + "</td>";
    }
    for (var i = 0; i < maze.getRowsCount(); i++) {
        tableHTML += "<tr><td>" + i + "</td>";
        for (var j = 0; j < maze.getColumnsCount(); j++) {
            tableHTML += "<td";
            var cell = maze.cells[i][j];
            var cellClasses = getCellBorderClasses(cell);
            var isStartCell = maze.startPoint.getXCoord() === j && maze.startPoint.getYCoord() === i;
            var isEndCell = maze.endPoint.getXCoord() === j && maze.endPoint.getYCoord() === i;
            var isPlayerLocation = game.getPlayer().getLocation().getXCoord() === j &&
                game.getPlayer().getLocation().getYCoord() === i;
            var isMonsterLocation = game.getMonster().getLocation().getXCoord() === j &&
                game.getMonster().getLocation().getYCoord() === i;
            if (isStartCell) {
                cellClasses += START_CELL_CLASS + " ";
            }
            if (isEndCell) {
                cellClasses += END_CELL_CLASS + " ";
            }
            if (!lodash_1.isEmpty(cellClasses)) {
                tableHTML += " class=\"" + cellClasses + "\"";
            }
            tableHTML += ">";
            if (isPlayerLocation) {
                tableHTML += "P";
            }
            if (isMonsterLocation) {
                tableHTML += "M";
            }
            tableHTML += "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "\n                    </tr>\n                </table>\n            </body>\n        </html>\n        ";
    return tableHTML;
};
exports.getHTMLTableOfGame = getHTMLTableOfGame;
var getCellBorderClasses = function (cell) {
    var classes = "";
    if (cell.hasLeftWall()) {
        classes += "left ";
    }
    if (cell.hasRightWall()) {
        classes += "right ";
    }
    if (cell.hasTopWall()) {
        classes += "top ";
    }
    if (cell.hasBottomWall()) {
        classes += "buttom ";
    }
    return classes;
};
//# sourceMappingURL=MazeUtils.js.map