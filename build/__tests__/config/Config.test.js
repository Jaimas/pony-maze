"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("config/Config");
var originalDotEnv = jest.requireActual('dotenv');
describe('Config', function () {
    it('Canary test', function () {
        expect(true).toBeTruthy();
    });
    it('Sould parse valid config', function () {
        var validConfig = {
            parsed: {
                PORT: '4000',
                LOG_LEVEL: 'info',
                MIN_MAZE_ROWS: '15',
                MAX_MAZE_ROWS: '25',
                MIN_MAZE_COLUMNS: '15',
                MAX_MAZE_COLUMNS: '25',
            }
        };
        originalDotEnv.config = jest.fn().mockImplementation(function () { return (validConfig); });
        expect(Config_1.getConfig()).toEqual({
            logLevel: 'info',
            maxMazeColumns: 25,
            maxMazeRows: 25,
            minMazeColumns: 15,
            minMazeRows: 15,
            port: 4000
        });
    });
    it('Sould throw error if no config returned', function () {
        originalDotEnv.config = jest.fn().mockImplementation(function () { return ({}); });
        try {
            Config_1.getConfig();
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });
    it('Sould throw error if port is not a number', function () {
        var invalidConfig = {
            parsed: {
                PORT: 'test',
                LOG_LEVEL: 'info',
                MIN_MAZE_ROWS: '15',
                MAX_MAZE_ROWS: '25',
                MIN_MAZE_COLUMNS: '15',
                MAX_MAZE_COLUMNS: '25',
            }
        };
        originalDotEnv.config = jest.fn().mockImplementation(function () { return (invalidConfig); });
        try {
            Config_1.getConfig();
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });
    it('Sould throw error if log level is not a string', function () {
        var invalidConfig = {
            parsed: {
                PORT: '4000',
                LOG_LEVEL: null,
                MIN_MAZE_ROWS: '15',
                MAX_MAZE_ROWS: '25',
                MIN_MAZE_COLUMNS: '15',
                MAX_MAZE_COLUMNS: '25',
            }
        };
        originalDotEnv.config = jest.fn().mockImplementation(function () { return (invalidConfig); });
        try {
            Config_1.getConfig();
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });
    it('Sould throw error if min-max values are not numeric', function () {
        var invalidConfig = {
            parsed: {
                PORT: '4000',
                LOG_LEVEL: 'info',
                MIN_MAZE_ROWS: 'text',
                MAX_MAZE_ROWS: 'text',
                MIN_MAZE_COLUMNS: 'text',
                MAX_MAZE_COLUMNS: 'text',
            }
        };
        originalDotEnv.config = jest.fn().mockImplementation(function () { return (invalidConfig); });
        try {
            Config_1.getConfig();
            expect(true).toBeFalsy();
        }
        catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });
});
//# sourceMappingURL=Config.test.js.map