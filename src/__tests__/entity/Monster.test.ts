import { Monster } from "entity/Monster";
import { LocationPoint } from "entity/LocationPoint";

const LOCATION = new LocationPoint(1, 2);

describe('Monster', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Should build valid object', () => {
        const monster = new Monster(LOCATION);
        expect(monster.getName()).toEqual("Domokun");
        expect(monster.getLocation().getXCoord()).toEqual(1);
        expect(monster.getLocation().getYCoord()).toEqual(2);
    });

    it('Should let move monster left', () => {
        const monster = new Monster(LOCATION);
        monster.moveLeft();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() -1);
    });

    it('Should let move monster right', () => {
        const monster = new Monster(LOCATION);
        monster.moveRight();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() +1);
    });

    it('Should let move monster up', () => {
        const monster = new Monster(LOCATION);
        monster.moveUp();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getYCoord() -1);
    });

    it('Should let move monster down', () => {
        const monster = new Monster(LOCATION);
        monster.moveDown();
        expect(monster.getLocation().getYCoord()).toEqual(LOCATION.getYCoord() +1);
    });
});