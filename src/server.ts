import { config } from './config/Config';
import express from 'express';
import bodyParser from 'body-parser';
import { Server as HTTPServer } from 'http';
import { logger } from './logger/Logger';
import { configureEndpoints } from './middleware/controller';
import { MazeGame } from './game';

export class Server {
    private app?: express.Express;
    private server?: HTTPServer;

    start = async () => {
        logger.info('Starting Maze game');
        this.app = express();
        this.app.use(bodyParser.json());
        const mazeGame = new MazeGame();

        this.listenToPort(this.app);
        configureEndpoints(this.app, mazeGame);

        logger.info(`Maze game started. Listening on port: ${config.port}`);
    }

    stop = async () => {
        logger.info('Stopping Maze game');
        if (this.server) {
            this.server.close();
        }
    }

    private listenToPort(app: express.Express) {
        this.server = app.listen(config.port);
    }
}