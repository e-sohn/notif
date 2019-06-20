const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors'); 

const usersRouter = require('./routes/usersRouter');  
const PORT = process.env.PORT || 3001;

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(‘/users', usersRouter);                                

app.get('/', async(req, res) => {
  res.json({ msg: 'Welcome to class'})
})

io.on('connection', (socket) => {
  console.log("Connected", socket);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

