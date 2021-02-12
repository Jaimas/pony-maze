"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("entity/Game");
var LocationPoint_1 = require("entity/LocationPoint");
var Maze_1 = require("entity/Maze");
var Monster_1 = require("entity/Monster");
var Player_1 = require("entity/Player");
var Direction_1 = require("utils/Direction");
describe('Game', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Should build valid object', function () {
        var game = new Game_1.Game(1, 15, 20, "Name");
        expect(game.getMaze()).toBeInstanceOf(Maze_1.Maze);
        expect(game.getPlayer()).toBeInstanceOf(Player_1.Player);
        expect(game.getMonster()).toBeInstanceOf(Monster_1.Monster);
        expect(game.isFinished()).toBeFalsy();
    });
    describe('moveToDirection', function () {
        it('Should let move movable object to left direction', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var player = game.getPlayer();
            var oldXCoord = player.getLocation().getXCoord();
            game.moveToDirection(player, Direction_1.Direction.LEFT);
            expect(oldXCoord).toEqual(10);
            expect(player.getLocation().getXCoord()).toEqual(9);
        });
        it('Should let move movable object to right direction', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var player = game.getPlayer();
            var oldXCoord = player.getLocation().getXCoord();
            game.moveToDirection(player, Direction_1.Direction.RIGHT);
            expect(oldXCoord).toEqual(10);
            expect(player.getLocation().getXCoord()).toEqual(11);
        });
        it('Should let move movable object to up direction', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var player = game.getPlayer();
            var oldYCoord = player.getLocation().getYCoord();
            game.moveToDirection(player, Direction_1.Direction.UP);
            expect(oldYCoord).toEqual(0);
            expect(player.getLocation().getYCoord()).toEqual(-1);
        });
        it('Should let move movable object to down direction', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var player = game.getPlayer();
            var oldYCoord = player.getLocation().getYCoord();
            game.moveToDirection(player, Direction_1.Direction.DOWN);
            expect(oldYCoord).toEqual(0);
            expect(player.getLocation().getYCoord()).toEqual(1);
        });
    });
    describe('moveToRandomDirection', function () {
        it('Should move player to random direction', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var player = game.getPlayer();
            var oldPlayerLocation = player.getLocation();
            game.moveToRandomDirection(player);
            expect(oldPlayerLocation.getXCoord() !== player.getLocation().getXCoord() ||
                oldPlayerLocation.getXCoord() !== player.getLocation().getYCoord());
        });
    });
    describe('finishGame', function () {
        it('Should mark game as finished', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            game.finishGame();
            expect(game.isFinished()).toBeTruthy();
        });
    });
    describe('isWon', function () {
        it('Should return false as player not yet won a game', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            expect(game.isWon()).toBeFalsy();
        });
        it('Should return true when player reached endpoint location', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var playerLocation = game.getPlayer().getLocation();
            // tslint:disable-next-line
            game.getMaze()['endPoint'] = new LocationPoint_1.LocationPoint(playerLocation.getXCoord(), playerLocation.getYCoord());
            expect(game.isWon()).toBeTruthy();
        });
    });
    describe('isLost', function () {
        it('Should return false as player not yet lost the game', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            expect(game.isLost()).toBeFalsy();
        });
        it('Should return true when player are in the same location as monster', function () {
            var game = new Game_1.Game(1, 15, 20, "Name");
            var playerLocation = game.getPlayer().getLocation();
            // tslint:disable-next-line
            game.getMonster()['locationPoint'] = new LocationPoint_1.LocationPoint(playerLocation.getXCoord(), playerLocation.getYCoord());
            expect(game.isLost()).toBeTruthy();
        });
    });
});
//# sourceMappingURL=Game.test.js.map