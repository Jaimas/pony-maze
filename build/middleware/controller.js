"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureEndpoints = void 0;
var lodash_1 = require("lodash");
var NumberUtils_1 = require("../utils/NumberUtils");
var MazeUtils_1 = require("../utils/MazeUtils");
var Direction_1 = require("../utils/Direction");
function configureEndpoints(app, mazeGame) {
    app.post("/pony-challenge/maze", function (req, res) {
        var response;
        try {
            response = getParsedMazeCreationRequestBody(req.body);
        }
        catch (e) {
            res.sendStatus(400).end();
            return;
        }
        var mazeWidth = response.mazeWidth, mazeHeight = response.mazeHeight, playerName = response.playerName;
        var mazeId = mazeGame.starNewGame(mazeWidth, mazeHeight, playerName);
        res.status(201);
        res.json({
            maze_id: mazeId,
        });
    });
    app.get("/pony-challenge/maze/:mazeId", function (req, res) {
        var mazeId = Number(req.params.mazeId);
        if (!NumberUtils_1.isInteger(mazeId)) {
            res.sendStatus(400).end();
            return;
        }
        var game = mazeGame.findGameByMazeId(mazeId);
        if (lodash_1.isUndefined(game)) {
            res.sendStatus(404).end();
            return;
        }
        var playerLocation = game.getPlayer().getLocation();
        var monsterLocation = game.getMonster().getLocation();
        res.status(302);
        res.json({
            playerLocation: {
                x: playerLocation.getXCoord(),
                y: playerLocation.getYCoord(),
            },
            monsterLocation: {
                x: monsterLocation.getXCoord(),
                y: monsterLocation.getYCoord(),
            },
            walkableDirections: game.getMaze().getWalkableDirections(game.getPlayer().getLocation())
        });
    });
    app.post("/pony-challenge/maze/:mazeId", function (req, res) {
        var mazeId = Number(req.params.mazeId);
        var direction = req.body.direction;
        if (!NumberUtils_1.isInteger(mazeId) || !Direction_1.isDirection(direction)) {
            res.sendStatus(400).end();
            return;
        }
        var game = mazeGame.findGameByMazeId(mazeId);
        if (lodash_1.isUndefined(game)) {
            res.sendStatus(404).end();
            return;
        }
        var walkableDirections = game.getMaze().getWalkableDirections(game.getPlayer().getLocation());
        if (!walkableDirections.includes(direction)) {
            res.status(400);
            res.json({
                message: "You can't move there!"
            });
            return;
        }
        if (game.isFinished()) {
            res.status(200);
            res.json({
                message: "Game is already finished!"
            });
            return;
        }
        game.moveToDirection(game.getPlayer(), direction);
        game.moveToRandomDirection(game.getMonster());
        if (game.isWon() || game.isLost()) {
            game.finishGame();
            res.status(200);
            res.json({
                message: game.getPlayer().getName() + (game.isWon() ? ", you won the game!" : ", you lost the game!")
            });
            return;
        }
        res.sendStatus(200).end();
    });
    app.get("/pony-challenge/maze/:mazeId/print", function (req, res) {
        var mazeId = Number(req.params.mazeId);
        if (!NumberUtils_1.isInteger(mazeId)) {
            res.sendStatus(400).end();
            return;
        }
        var foundGame = mazeGame.findGameByMazeId(mazeId);
        if (lodash_1.isUndefined(foundGame)) {
            res.sendStatus(404).end();
            return;
        }
        var mazeTableHTML = MazeUtils_1.getHTMLTableOfGame(foundGame);
        res.status(200);
        res.send(mazeTableHTML);
    });
    var getParsedMazeCreationRequestBody = function (body) {
        var mazeWidth = body["maze-width"];
        var mazeHeight = body["maze-height"];
        var playerName = body["maze-player-name"];
        if (!NumberUtils_1.isInteger(mazeWidth) ||
            !NumberUtils_1.isInteger(mazeHeight) ||
            !lodash_1.isString(playerName) ||
            lodash_1.isEmpty(playerName)) {
            throw Error("Invalid request body");
        }
        return {
            mazeWidth: Number(mazeWidth),
            mazeHeight: Number(mazeHeight),
            playerName: playerName
        };
    };
}
exports.configureEndpoints = configureEndpoints;
//# sourceMappingURL=controller.js.map