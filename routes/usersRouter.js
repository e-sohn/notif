const express = require('express');
const { User } = require('../models');
const { hash, compare, encode, verify, restrict } = require('../auth');

const usersRouter = express.Router();

//Get all users
usersRouter.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ users });
  } catch (e) {
    console.log(e);
    res.stats(500).send(e.message);
  }
});

//Get a specific user
usersRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ user });
  } catch (e) {
    console.log(e);
    res.stats(500).send(e.message);
  }
});

// Register route
usersRouter.post('/', async (req, res) => {
  try {
    const { email, password, username, image } = req.body;
    if (password) {
      const passwordDigest = await hash(password);
      const user = await User.create({
        email,
        password_digest: passwordDigest,
        username,
      });
      const userData = {
        id: user.id,
        username: user.username,
        email: user.email,
      };

      const token = encode(userData);

      res.json({
        token,
        userData,
      });
    }
  } catch(e) {
    console.error(e);
  }
});

//Login route
usersRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if(user) {
      const authenticated = await compare(password, user.password_digest);
      if (authenticated) {
        const userData = {
          id: user.id,
          username: user.username,
          email: user.email,
        };

        const token = encode(userData);

        res.json({
          token,
          userData,
        });
      }
      return res.status(401).send('Invalid Credentials');
    }
    return res.status(401).send('No User Found');
  } catch(e) {
    console.error(e);
  }
});

module.exports = usersRouter;

