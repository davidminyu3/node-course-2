// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destruction of the line above

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('@@@ connected to mongodb server @@@');  

  const db = client.db('TodoApp');

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('unable to fetch data', err);
  });

  db.collection('Users').find({name: 'David'}).toArray().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log('err: ', err);
  });

  db.collection('Todos').find(
    {_id: new ObjectID('5c3ff7e83c5deb113ea26475')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch data', err);
  });

  // db.close();
});
