import express from 'express';
import bodyParser from 'body-parser';
import { Server } from './server';
import { logger } from './logger/Logger';

const server = new Server();
server.start().catch(e => {
  logger.error('Error while starting the server', e);
  process.exit(1);
});