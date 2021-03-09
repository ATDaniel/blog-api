/* eslint-disable space-before-function-paren */
import express from 'express';
import awsServerless from 'aws-serverless-express';
import awsServerlessMiddleware from 'aws-serverless-express/middleware';
import reflect from 'reflect-metadata';

import routes from './api';
// const { errorHandler } = require('./error-handler');
// const { logger } = require('./util');
// const settings = require('./settings');

async function initialize() {
  // logger.debug("Initialize Application");

  const application = express();

  application.use(express.json());
  application.use(awsServerlessMiddleware.eventContext());
  application.use(routes);
  // application.use(errorHanlder);
  // application.logger = logger;
  return application;
}

module.exports.handler = async (event, context) => {
  const application = await initialize();
  const server = awsServerless.createServer(application);
  return awsServerless.proxy(server, event, context, 'PROMISE').promise;
};
