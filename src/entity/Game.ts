import { Maze } from "./Maze";
import { Player } from "./Player";
import { Monster } from "./Monster";
import { Direction } from "../utils/Direction";
import { Movable } from "./Movable";
import { random } from "lodash";

export class Game {
    private player: Player;
    private maze: Maze;
    private monster: Monster;
    private finish: boolean;

    constructor(mazeId: number, mazeWidth: number, mazeHeight: number, playerName: string) {
        this.maze = new Maze(mazeId, mazeWidth, mazeHeight);
        this.player = new Player(playerName, this.maze.startPoint);
        this.monster = new Monster(this.maze.endPoint);
        this.finish = false;
    }

    getMaze() {
        return this.maze;
    }

    getPlayer() {
        return this.player;
    }

    getMonster() {
        return this.monster;
    }

    moveToDirection(movable: Movable, direction: Direction) {
        switch(direction) {
            case Direction.LEFT: {
               movable.moveLeft();
               break;
            }
            case Direction.RIGHT: {
                movable.moveRight();
                break;
            }
            case Direction.UP: {
                movable.moveUp();
                break;
            }
            case Direction.DOWN: {
                movable.moveDown();
                break;
            }
        }
    }

    moveToRandomDirection(movable: Movable) {
        const walkableDirections = this.maze.getWalkableDirections(movable.getLocation());
        const randomDirectionIndex = random(0, walkableDirections.length -1);
        this.moveToDirection(movable, walkableDirections[randomDirectionIndex]);
    }

    finishGame() {
        this.finish = true;
    }

    isFinished() {
        return this.finish;
    }

    isWon() {
        const playerLocation = this.player.getLocation();
        const endPointLocation = this.maze.endPoint;
        return playerLocation.getXCoord() === endPointLocation.getXCoord() &&
            playerLocation.getYCoord() === endPointLocation.getYCoord();
    }

    isLost() {
        const playerLocation = this.player.getLocation();
        const monsterLocation = this.monster.getLocation();
        return playerLocation.getXCoord() === monsterLocation.getXCoord() &&
            playerLocation.getYCoord() === monsterLocation.getYCoord();
    }
}
