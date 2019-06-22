const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const socket = require('socket.io');

const usersRouter = require('./routes/usersRouter');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/users', usersRouter);

app.get('/', async(req, res) => {
  res.json({ msg: 'Welcome to class'})
})

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);

  socket.on('chat', (data) => {
    io.emit('chat', data);
  });
});
