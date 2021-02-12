"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Maze_1 = require("./Maze");
var Player_1 = require("./Player");
var Monster_1 = require("./Monster");
var Direction_1 = require("../utils/Direction");
var lodash_1 = require("lodash");
var Game = /** @class */ (function () {
    function Game(mazeId, mazeWidth, mazeHeight, playerName) {
        this.maze = new Maze_1.Maze(mazeId, mazeWidth, mazeHeight);
        this.player = new Player_1.Player(playerName, this.maze.startPoint);
        this.monster = new Monster_1.Monster(this.maze.endPoint);
        this.finish = false;
    }
    Game.prototype.getMaze = function () {
        return this.maze;
    };
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    Game.prototype.getMonster = function () {
        return this.monster;
    };
    Game.prototype.moveToDirection = function (movable, direction) {
        switch (direction) {
            case Direction_1.Direction.LEFT: {
                movable.moveLeft();
                break;
            }
            case Direction_1.Direction.RIGHT: {
                movable.moveRight();
                break;
            }
            case Direction_1.Direction.UP: {
                movable.moveUp();
                break;
            }
            case Direction_1.Direction.DOWN: {
                movable.moveDown();
                break;
            }
        }
    };
    Game.prototype.moveToRandomDirection = function (movable) {
        var walkableDirections = this.maze.getWalkableDirections(movable.getLocation());
        var randomDirectionIndex = lodash_1.random(0, walkableDirections.length - 1);
        this.moveToDirection(movable, walkableDirections[randomDirectionIndex]);
    };
    Game.prototype.finishGame = function () {
        this.finish = true;
    };
    Game.prototype.isFinished = function () {
        return this.finish;
    };
    Game.prototype.isWon = function () {
        var playerLocation = this.player.getLocation();
        var endPointLocation = this.maze.endPoint;
        return playerLocation.getXCoord() === endPointLocation.getXCoord() &&
            playerLocation.getYCoord() === endPointLocation.getYCoord();
    };
    Game.prototype.isLost = function () {
        var playerLocation = this.player.getLocation();
        var monsterLocation = this.monster.getLocation();
        return playerLocation.getXCoord() === monsterLocation.getXCoord() &&
            playerLocation.getYCoord() === monsterLocation.getYCoord();
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map