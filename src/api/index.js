const express = require('express');
const blog = require('./blogs');
const user = require('./user');

const routes = express.Router();

function about(request, response) {
  // Return resume stored in S3?
}

routes.get('/about', about);
routes.use(blog.routes);
routes.use(user.routes);

module.exports = {
  routes
};
