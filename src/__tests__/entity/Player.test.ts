import { Player } from "entity/Player";
import { LocationPoint } from "entity/LocationPoint";

const LOCATION = new LocationPoint(1, 2);

describe('Player', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Should build valid object', () => {
        const monster = new Player("Player Name", LOCATION);
        expect(monster.getName()).toEqual("Player Name");
        expect(monster.getLocation().getXCoord()).toEqual(1);
        expect(monster.getLocation().getYCoord()).toEqual(2);
    });

    it('Should let move player left', () => {
        const monster = new Player("Player Name", LOCATION);
        monster.moveLeft();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() -1);
    });

    it('Should let move player right', () => {
        const monster = new Player("Player Name", LOCATION);
        monster.moveRight();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getXCoord() +1);
    });

    it('Should let move player up', () => {
        const monster = new Player("Player Name", LOCATION);
        monster.moveUp();
        expect(monster.getLocation().getXCoord()).toEqual(LOCATION.getYCoord() -1);
    });

    it('Should let move player down', () => {
        const monster = new Player("Player Name", LOCATION);
        monster.moveDown();
        expect(monster.getLocation().getYCoord()).toEqual(LOCATION.getYCoord() +1);
    });
});