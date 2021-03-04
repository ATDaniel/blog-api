/* eslint-disable space-before-function-paren */
const express = require('express');
const awsServerless = require('aws-serverless-express');
const awsServerlessMiddleware = require('aws-serverless-express/middleware');

const api = require('./api');
// const { errorHandler } = require('./error-handler');
// const { logger } = require('./util');
// const settings = require('./settings');

async function initialize() {
  // logger.debug("Initialize Application");

  const application = express();

  application.use(express.json());
  application.use(awsServerlessMiddleware.eventContext());
  application.use(api.routes);
  // application.use(errorHanlder);
  // application.logger = logger;
  return application;
}

module.exports.handler = async (event, context) => {
  const application = await initialize();
  const server = awsServerless.createServer(application);
  return awsServerless.proxy(server, event, context, 'PROMISE').promise;
};
