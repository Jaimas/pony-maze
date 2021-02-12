import express from "express";
import { MazeGame } from "game";
import { isEmpty, isString, isUndefined } from "lodash";
import { isInteger } from "../utils/NumberUtils";
import { getHTMLTableOfGame } from "../utils/MazeUtils";
import { isDirection } from "../utils/Direction";

export function configureEndpoints(app: express.Express, mazeGame: MazeGame) {
  app.post("/pony-challenge/maze", (req, res) => {
    let response;

    try {
      response = getParsedMazeCreationRequestBody(req.body);
    } catch (e) {
      res.sendStatus(400).end();
      return;
    }

    const { mazeWidth, mazeHeight, playerName } = response;
    const mazeId = mazeGame.starNewGame(
      mazeWidth,
      mazeHeight,
      playerName
    );

    res.status(201);
    res.json({
      maze_id: mazeId,
    });
  });

  app.get("/pony-challenge/maze/:mazeId", (req, res) => {
    const mazeId = Number(req.params.mazeId);
    if (!isInteger(mazeId)) {
      res.sendStatus(400).end();
      return;
    }

    const game = mazeGame.findGameByMazeId(mazeId);
    if (isUndefined(game)) {
      res.sendStatus(404).end();
      return;
    }

    const playerLocation = game.getPlayer().getLocation();
    const monsterLocation = game.getMonster().getLocation();

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

  app.post("/pony-challenge/maze/:mazeId", (req, res) => {
    const mazeId = Number(req.params.mazeId);
    const direction = req.body.direction;

    if (!isInteger(mazeId) || !isDirection(direction)) {
      res.sendStatus(400).end();
      return;
    }

    const game = mazeGame.findGameByMazeId(mazeId);
    if (isUndefined(game)) {
      res.sendStatus(404).end();
      return;
    }

    const walkableDirections = game.getMaze().getWalkableDirections(game.getPlayer().getLocation());
    if (!walkableDirections.includes(direction)) {
      res.status(400);
      res.json({
        message: `You can't move there!`
      });
      return;
    }

    if (game.isFinished()) {
      res.status(200);
      res.json({
        message: `Game is already finished!`
      });
      return;
    }

    game.moveToDirection(game.getPlayer(), direction);
    game.moveToRandomDirection(game.getMonster());

    if (game.isWon() || game.isLost()) {
      game.finishGame();
      res.status(200);
      res.json({
        message: game.getPlayer().getName() + (game.isWon() ? `, you won the game!` : `, you lost the game!`)
      });
      return;
    }

    res.sendStatus(200).end();
  });

  app.get("/pony-challenge/maze/:mazeId/print", (req, res) => {
    const mazeId = Number(req.params.mazeId);
    if (!isInteger(mazeId)) {
      res.sendStatus(400).end();
      return;
    }

    const foundGame = mazeGame.findGameByMazeId(mazeId);
    if (isUndefined(foundGame)) {
      res.sendStatus(404).end();
      return;
    }

    const mazeTableHTML = getHTMLTableOfGame(foundGame);

    res.status(200);
    res.send(mazeTableHTML);
  });

  const getParsedMazeCreationRequestBody = (body: any) => {
    const mazeWidth = body["maze-width"];
    const mazeHeight = body["maze-height"];
    const playerName = body["maze-player-name"];

    if (
      !isInteger(mazeWidth) ||
      !isInteger(mazeHeight) ||
      !isString(playerName) ||
      isEmpty(playerName)
    ) {
      throw Error("Invalid request body");
    }

    return {
      mazeWidth: Number(mazeWidth),
      mazeHeight: Number(mazeHeight),
      playerName: playerName as string
    };
  };
}
