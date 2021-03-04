const express = require('express');

const routes = express.Router();

async function getUser(request, response) {
  // Get specific user
}

routes.get('/user/:userID', getUser);
//routes.post('/user/signup', createUser);
//routes.delete('user)

module.exports = {
  routes
};
