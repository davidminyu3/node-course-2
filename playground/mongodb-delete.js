// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destruction of the line above

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('@@@ connected to mongodb server @@@');  

  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'somethinggg to do'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log('unable to deleteMany:', err);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Meet up'}).then((res) => {
  //   console.log(res);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({_id: ObjectId("5c3fffa487065d55c16db239")}).then((res) => {
  //   console.log(res);
  // });

  // db.close();
});