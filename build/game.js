"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MazeGame = void 0;
var Game_1 = require("./entity/Game");
var MazeGame = /** @class */ (function () {
    function MazeGame() {
        var _this = this;
        this.starNewGame = function (mazeWidth, mazeHeight, playerName) {
            var mazeId = _this.games.length + 1;
            var game = new Game_1.Game(mazeId, mazeWidth, mazeHeight, playerName);
            _this.games.push(game);
            return mazeId;
        };
        this.games = [];
    }
    MazeGame.prototype.findGameByMazeId = function (id) {
        return this.games.find(function (game) { return game.getMaze().id === id; });
    };
    return MazeGame;
}());
exports.MazeGame = MazeGame;
//# sourceMappingURL=game.js.map