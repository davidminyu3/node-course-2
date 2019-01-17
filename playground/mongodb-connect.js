// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destruction of the line above

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('@@@ connected to mongodb server @@@');
  
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'something to dooo',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Todos', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Daviddd',
    age: 24,
    location: 'Seattle'
  }, (err, result) => {
    if (err) {
      return console.log('err occurred: ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});