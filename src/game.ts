import { Game } from "./entity/Game";

export class MazeGame {
    private games: Game[];

    constructor() {
        this.games = [];
    }

    starNewGame = (mazeWidth: number, mazeHeight: number, playerName: string) => {
        const mazeId = this.games.length + 1;
        const game = new Game(mazeId, mazeWidth, mazeHeight, playerName);
        this.games.push(game);

        return mazeId;
    }

    findGameByMazeId(id: number) {
        return this.games.find(game => game.getMaze().id === id);
    }
}