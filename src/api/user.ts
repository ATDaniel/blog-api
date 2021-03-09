import express from 'express';
import 'reflect-metadata';
import connect from '../util/db-connect';
import { User } from '../entity/User';

const userRoutes = express.Router();

async function validateUsername(username) {
  const connection = await connect(User);

  const user: User = await connection.manager.findOne(username);

  if (user.username == username) {
    throw new Error('Username already in use.');
  }
}

async function validateEmail(email) {
  const connection = await connect(User);
  const givenEmail: string = email;

  // Validate that it's something@xyz.com on the frontend before form submission

  const user: User = await connection.manager.findOne(User, {
    email: givenEmail
  });

  if (user.email == givenEmail) {
    throw new Error('Email already in use.');
  }
}

async function getUser(request, response) {
  try {
    const connection = await connect(User);

    const user: User = await connection.manager.findOne(User, {
      username: request.params.userID
    });
    response.json(user);
  } catch (error) {
    console.error(error);
  }
}

async function createUser(request, response) {
  try {
    const connection = await connect(User);
    const username: string = request.body.username;
    const email: string = request.body.email;

    // validateEmail(request.body.email);
    try {
      await validateUsername(username);
      await validateEmail(email);
    } catch (error) {
      console.error(error);
    }

    const user = new User();
    user.username = username;
    user.firstName = request.body.firstName;
    user.lastName = request.body.lastName;
    user.age = request.body.age;

    await connection.manager.save(User, user);
  } catch (error) {
    console.error(error);
  }
}

async function deleteUser(request, response) {
  try {
    const connection = await connect(User);

    await connection.manager.delete(User, request.params.userID);
  } catch (error) {
    console.error(error);
  }
}

userRoutes.get('/user/:userID', getUser);
userRoutes.post('/user/signup', createUser);
userRoutes.delete('./user/:userID', deleteUser);
// routes.delete('user)

export default userRoutes;
