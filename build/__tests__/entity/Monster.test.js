"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monster_1 = require("entity/Monster");
var LocationPoint_1 = require("entity/LocationPoint");
var LOCATION = new LocationPoint_1.LocationPoint(1, 2);
describe('Monster', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Should build valid object', function () {
        var monster = new Monster_1.Monster(LOCATION);
        expect(monster.getName()).toEqual("Domokun");
        expect(monster.getLocation().getXCoord()).toEqual(1);
        expect(monster.getLocation().getYCoord()).toEqual(2);
    });
    it('Should let move monster left', function () {
        var monster = new Monster_1.Monster(LOCATION);
        monster.moveLeft();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() - 1);
    });
    it('Should let move monster right', function () {
        var monster = new Monster_1.Monster(LOCATION);
        monster.moveRight();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() + 1);
    });
    it('Should let move monster up', function () {
        var monster = new Monster_1.Monster(LOCATION);
        monster.moveUp();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getYCoord() - 1);
    });
    it('Should let move monster down', function () {
        var monster = new Monster_1.Monster(LOCATION);
        monster.moveDown();
        expect(monster.getLocation().getYCoord()).toEqual(LOCATION.getYCoord() + 1);
    });
});
//# sourceMappingURL=Monster.test.js.map