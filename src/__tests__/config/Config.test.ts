import { getConfig } from "config/Config";
const originalDotEnv = jest.requireActual('dotenv');

describe('Config', () => {
    it('Canary test', () => {
        expect(true).toBeTruthy();
    });

    it('Sould parse valid config', () => {
        const validConfig = {
            parsed: {
                PORT: '4000',
                LOG_LEVEL: 'info',
                MIN_MAZE_ROWS: '15',
                MAX_MAZE_ROWS: '25',
                MIN_MAZE_COLUMNS: '15',
                MAX_MAZE_COLUMNS: '25',
            }
        }

        originalDotEnv.config = jest.fn().mockImplementation(() => (validConfig));
        expect(getConfig()).toEqual({
            logLevel: 'info',
            maxMazeColumns: 25,
            maxMazeRows: 25,
            minMazeColumns: 15,
            minMazeRows: 15,
            port: 4000
        });
    });

    it('Sould throw error if no config returned', () => {
        originalDotEnv.config = jest.fn().mockImplementation(() => ({}));

        try {
            getConfig();
            expect(true).toBeFalsy();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });

    it('Sould throw error if port is not a number', () => {
        const invalidConfig = {
            parsed: {
                PORT: 'test',
                LOG_LEVEL: 'info',
                MIN_MAZE_ROWS: '15',
                MAX_MAZE_ROWS: '25',
                MIN_MAZE_COLUMNS: '15',
                MAX_MAZE_COLUMNS: '25',
            }
        }
        originalDotEnv.config = jest.fn().mockImplementation(() => (invalidConfig));

        try {
            getConfig();
            expect(true).toBeFalsy();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });

    it('Sould throw error if log level is not a string', () => {
        const invalidConfig = {
            parsed: {
                PORT: '4000',
                LOG_LEVEL: null,
                MIN_MAZE_ROWS: '15',
                MAX_MAZE_ROWS: '25',
                MIN_MAZE_COLUMNS: '15',
                MAX_MAZE_COLUMNS: '25',
            }
        }
        originalDotEnv.config = jest.fn().mockImplementation(() => (invalidConfig));

        try {
            getConfig();
            expect(true).toBeFalsy();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });

    it('Sould throw error if min-max values are not numeric', () => {
        const invalidConfig = {
            parsed: {
                PORT: '4000',
                LOG_LEVEL: 'info',
                MIN_MAZE_ROWS: 'text',
                MAX_MAZE_ROWS: 'text',
                MIN_MAZE_COLUMNS: 'text',
                MAX_MAZE_COLUMNS: 'text',
            }
        }
        originalDotEnv.config = jest.fn().mockImplementation(() => (invalidConfig));

        try {
            getConfig();
            expect(true).toBeFalsy();
        } catch (e) {
            expect(e).toBeInstanceOf(Error);
            expect(e.message).toEqual('Invalid configuration, unable to start application');
        }
    });
});