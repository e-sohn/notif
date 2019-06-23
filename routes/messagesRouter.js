const express = require('express');
const { Message } = require('../models');
const { hash, compare, encode, verify, restrict } = require('../auth');

const messagesRouter = express.Router();

messagesRouter.get('/', async (req, res) => {
  try {
    const messages = await Messages.findAll();
    res.json({ messages });
  } catch(e) {
    console.log(e);
    res.stats(500).send(e.message);
  }
});

module.exports = messagesRouter;

