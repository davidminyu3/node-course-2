const express = require('express');
const bodyParser = require('body-parser'); // convert JSON -> Object

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

const PORT = process.env.port || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(PORT, () => {
  console.log(`@@@ SERVER ON PORT ${PORT} @@@`);
})