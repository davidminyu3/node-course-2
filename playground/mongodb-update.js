// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destruction of the line above

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('@@@ connected to mongodb server @@@');  

  const db = client.db('TodoApp');

  findOneAndUpdate(filter, update, options, callback)
  db.collection('Todos').findOneAndUpdate(
    { // filter
      _id: new ObjectID("5c3fff8b37601155bd3fd5cb")
    }, { // update
      $set: {completed: false}
    }, { // options
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });

  db.collection('Users').findOneAndUpdate(
    {
      _id: new ObjectID("5c3fffa487065d55c16db239")
    }, {
      $inc: { age: -1 },
      $set: { name: 'David'}
    }, {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });  
  // db.close();
});