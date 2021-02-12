"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.getConfig = void 0;
var dotenv_1 = require("dotenv");
var lodash_1 = require("lodash");
var NumberUtils_1 = require("../utils/NumberUtils");
var getConfig = function () {
    var conf = dotenv_1.config().parsed;
    if (!conf || !isValidConfig(conf)) {
        throw Error('Invalid configuration, unable to start application');
    }
    return {
        port: NumberUtils_1.parseInteger(conf.PORT),
        logLevel: conf.LOG_LEVEL,
        minMazeRows: NumberUtils_1.parseInteger(conf.MIN_MAZE_ROWS),
        maxMazeRows: NumberUtils_1.parseInteger(conf.MAX_MAZE_ROWS),
        minMazeColumns: NumberUtils_1.parseInteger(conf.MIN_MAZE_COLUMNS),
        maxMazeColumns: NumberUtils_1.parseInteger(conf.MAX_MAZE_COLUMNS)
    };
};
exports.getConfig = getConfig;
var isValidConfig = function (conf) { return (conf &&
    lodash_1.isFinite(Number(conf.PORT)) &&
    lodash_1.isString(conf.LOG_LEVEL) &&
    lodash_1.isFinite(Number(conf.MIN_MAZE_ROWS)) &&
    lodash_1.isFinite(Number(conf.MAX_MAZE_ROWS)) &&
    lodash_1.isFinite(Number(conf.MIN_MAZE_COLUMNS)) &&
    lodash_1.isFinite(Number(conf.MAX_MAZE_COLUMNS))); };
exports.config = exports.getConfig();
//# sourceMappingURL=Config.js.map