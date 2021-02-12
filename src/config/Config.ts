import { config as getEnvConfig, DotenvParseOutput } from 'dotenv';
import { isString, isFinite } from 'lodash';
import { parseInteger } from '../utils/NumberUtils';

type Config  = {
    port: number;
    logLevel: string;
    minMazeRows: number;
    maxMazeRows: number;
    minMazeColumns: number;
    maxMazeColumns: number;
}

export const getConfig = (): Config => {
    const conf = getEnvConfig().parsed;

    if(!conf || !isValidConfig(conf)) {
        throw Error('Invalid configuration, unable to start application');
    }

    return {
        port: parseInteger(conf.PORT),
        logLevel: conf.LOG_LEVEL,
        minMazeRows: parseInteger(conf.MIN_MAZE_ROWS),
        maxMazeRows: parseInteger(conf.MAX_MAZE_ROWS),
        minMazeColumns: parseInteger(conf.MIN_MAZE_COLUMNS),
        maxMazeColumns: parseInteger(conf.MAX_MAZE_COLUMNS)
    }
};

const isValidConfig = (conf: DotenvParseOutput | undefined) => (
    conf &&
    isFinite(Number(conf.PORT)) &&
    isString(conf.LOG_LEVEL) &&
    isFinite(Number(conf.MIN_MAZE_ROWS)) &&
    isFinite(Number(conf.MAX_MAZE_ROWS)) &&
    isFinite(Number(conf.MIN_MAZE_COLUMNS)) &&
    isFinite(Number(conf.MAX_MAZE_COLUMNS))
);

export const config: Config = getConfig();



