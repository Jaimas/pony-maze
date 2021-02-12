import { Cell } from "../entity/Cell";
import { Game } from "../entity/Game";
import { LocationPoint } from "../entity/LocationPoint";
import { isEmpty, toInteger } from "lodash";

const START_CELL_CLASS = "start";
const END_CELL_CLASS = "end";

export const getCellsGrid = (rowsCount: number, columnsCount: number) => {
    const cells:Cell[][] = [];

    for(let rowNumber = 0; rowNumber < rowsCount; rowNumber++) {
        cells[rowNumber] = [];
        for(let columnNumber = 0; columnNumber < columnsCount; columnNumber++) {
            cells[rowNumber][columnNumber] = new Cell(columnNumber, rowNumber);
        }
    }
    return cells;
}

export const getStartPoint = (columnsCount: number) => {
    const columnMiddleIndex = toInteger(columnsCount / 2);
    return new LocationPoint(columnMiddleIndex, 0);
}

export const getEndPoint = (rowsCount: number, columnsCount: number) => {
    const columnMiddleIndex = toInteger(columnsCount / 2);
    const lastRowIndex = rowsCount -1;
    return new LocationPoint(columnMiddleIndex, lastRowIndex);
}

export const removeWallBetweenTwoCells = (cellA: Cell, cellB: Cell) => {
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
}

export const getHTMLTableOfGame = (game: Game) => {
    const maze = game.getMaze();
    let tableHTML = `
        <html>
            <head>
                <link rel="shortcut icon" href="#">
                <style>
                    td {
                        padding: 12px;
                        min-width: 12px;
                        text-align: center;
                    }
                    td.left {
                        border-left: 1px solid #000;
                    }
                    td.right {
                        border-right: 1px solid #000;
                    }
                    td.top {
                        border-top: 1px solid #000;
                    }
                    td.buttom {
                        border-bottom: 1px solid #000;
                    }
                    td.start {
                        background: lightgreen;
                    }
                    td.end {
                        background: coral;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr>
                    <td>/</td>
    `;

    for (let i = 0; i < maze.getColumnsCount(); i++) {
        tableHTML += `<td>${i}</td>`;
    }

    for (let i = 0; i < maze.getRowsCount(); i++) {
        tableHTML += `<tr><td>${i}</td>`;
        for (let j = 0; j < maze.getColumnsCount(); j++) {
            tableHTML += `<td`;

            const cell = maze.cells[i][j];
            let cellClasses = getCellBorderClasses(cell);
            const isStartCell = maze.startPoint.getXCoord() === j && maze.startPoint.getYCoord() === i;
            const isEndCell = maze.endPoint.getXCoord() === j && maze.endPoint.getYCoord() === i;
            const isPlayerLocation = game.getPlayer().getLocation().getXCoord() === j &&
                game.getPlayer().getLocation().getYCoord() === i;
            const isMonsterLocation = game.getMonster().getLocation().getXCoord() === j &&
                game.getMonster().getLocation().getYCoord() === i;

            if (isStartCell) {
                cellClasses += `${START_CELL_CLASS} `;
            }

            if (isEndCell) {
                cellClasses += `${END_CELL_CLASS} `;
            }

            if (!isEmpty(cellClasses)) {
                tableHTML += ` class="${cellClasses}"`;
            }

            tableHTML += `>`;

            if (isPlayerLocation) {
                tableHTML += `P`;
            }

            if (isMonsterLocation) {
                tableHTML += `M`;
            }

            tableHTML += `</td>`;
        }
        tableHTML += `</tr>`;
    }

    tableHTML += `
                    </tr>
                </table>
            </body>
        </html>
        `;
    return tableHTML;
}

const getCellBorderClasses = (cell: Cell) => {
    let classes = ``;

    if (cell.hasLeftWall()) {
        classes += `left `;
    }

    if (cell.hasRightWall()) {
        classes += `right `;
    }

    if (cell.hasTopWall()) {
        classes += `top `;
    }

    if (cell.hasBottomWall()) {
        classes += `buttom `;
    }

    return classes;
};
