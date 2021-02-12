"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("entity/Player");
var LocationPoint_1 = require("entity/LocationPoint");
var LOCATION = new LocationPoint_1.LocationPoint(1, 2);
describe('Player', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Should build valid object', function () {
        var monster = new Player_1.Player("Player Name", LOCATION);
        expect(monster.getName()).toEqual("Player Name");
        expect(monster.getLocation().getXCoord()).toEqual(1);
        expect(monster.getLocation().getYCoord()).toEqual(2);
    });
    it('Should let move player left', function () {
        var monster = new Player_1.Player("Player Name", LOCATION);
        monster.moveLeft();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() - 1);
    });
    it('Should let move player right', function () {
        var monster = new Player_1.Player("Player Name", LOCATION);
        monster.moveRight();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() + 1);
    });
    it('Should let move player up', function () {
        var monster = new Player_1.Player("Player Name", LOCATION);
        monster.moveUp();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getYCoord() - 1);
    });
    it('Should let move player down', function () {
        var monster = new Player_1.Player("Player Name", LOCATION);
        monster.moveDown();
        expect(monster.getLocation().getYCoord()).toEqual(LOCATION.getYCoord() + 1);
    });
});
//# sourceMappingURL=Player.test.js.map