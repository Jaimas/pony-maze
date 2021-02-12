import { createLogger, transports } from 'winston';
import { config } from '../config/Config';

export const logger = createLogger({
    level: config.logLevel,
    transports: [new transports.Console()]
});