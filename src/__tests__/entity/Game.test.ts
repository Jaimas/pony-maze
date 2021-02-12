import { Game } from "entity/Game";
import { LocationPoint } from "entity/LocationPoint";
import { Maze } from "entity/Maze";
import { Monster } from "entity/Monster";
import { Player } from "entity/Player";
import { Direction } from "utils/Direction";

describe('Game', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Should build valid object', () => {
        const game = new Game(1, 15, 20, "Name");
        expect(game.getMaze()).toBeInstanceOf(Maze);
        expect(game.getPlayer()).toBeInstanceOf(Player);
        expect(game.getMonster()).toBeInstanceOf(Monster);
        expect(game.isFinished()).toBeFalsy();
    });

    describe('moveToDirection', () => {
        it('Should let move movable object to left direction', () => {
            const game = new Game(1, 15, 20, "Name");
            const player = game.getPlayer();
            const oldXCoord = player.getLocation().getXCoord();

            game.moveToDirection(player, Direction.LEFT);
            expect(oldXCoord).toEqual(10);
            expect(player.getLocation().getXCoord()).toEqual(9);
        });

        it('Should let move movable object to right direction', () => {
            const game = new Game(1, 15, 20, "Name");
            const player = game.getPlayer();
            const oldXCoord = player.getLocation().getXCoord();

            game.moveToDirection(player, Direction.RIGHT);
            expect(oldXCoord).toEqual(10);
            expect(player.getLocation().getXCoord()).toEqual(11);
        });

        it('Should let move movable object to up direction', () => {
            const game = new Game(1, 15, 20, "Name");
            const player = game.getPlayer();
            const oldYCoord = player.getLocation().getYCoord();

            game.moveToDirection(player, Direction.UP);
            expect(oldYCoord).toEqual(0);
            expect(player.getLocation().getYCoord()).toEqual(-1);
        });

        it('Should let move movable object to down direction', () => {
            const game = new Game(1, 15, 20, "Name");
            const player = game.getPlayer();
            const oldYCoord = player.getLocation().getYCoord();

            game.moveToDirection(player, Direction.DOWN);
            expect(oldYCoord).toEqual(0);
            expect(player.getLocation().getYCoord()).toEqual(1);
        });
    });

    describe('moveToRandomDirection', () => {
        it('Should move player to random direction', () => {
            const game = new Game(1, 15, 20, "Name");
            const player = game.getPlayer();
            const oldPlayerLocation = player.getLocation();

            game.moveToRandomDirection(player);
            expect(
                oldPlayerLocation.getXCoord() !== player.getLocation().getXCoord() ||
                oldPlayerLocation.getXCoord() !== player.getLocation().getYCoord()
            )
        });
    });

    describe('finishGame', () => {
        it('Should mark game as finished', () => {
            const game = new Game(1, 15, 20, "Name");
            game.finishGame();
            expect(game.isFinished()).toBeTruthy();
        });
    });

    describe('isWon', () => {
        it('Should return false as player not yet won a game', () => {
            const game = new Game(1, 15, 20, "Name");
            expect(game.isWon()).toBeFalsy();
        });

        it('Should return true when player reached endpoint location', () => {
            const game = new Game(1, 15, 20, "Name");
            const playerLocation = game.getPlayer().getLocation();
            // tslint:disable-next-line
            game.getMaze()['endPoint'] = new LocationPoint(playerLocation.getXCoord(), playerLocation.getYCoord());
            expect(game.isWon()).toBeTruthy();
        });
    });

    describe('isLost', () => {
        it('Should return false as player not yet lost the game', () => {
            const game = new Game(1, 15, 20, "Name");
            expect(game.isLost()).toBeFalsy();
        });

        it('Should return true when player are in the same location as monster', () => {
            const game = new Game(1, 15, 20, "Name");
            const playerLocation = game.getPlayer().getLocation();
            // tslint:disable-next-line
            game.getMonster()['locationPoint'] = new LocationPoint(playerLocation.getXCoord(), playerLocation.getYCoord());
            expect(game.isLost()).toBeTruthy();
        });
    });
});