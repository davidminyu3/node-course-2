const {mongooes} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

const {ObjectID} = require('mongodb');

var id = '5c439f955ea4b8838bdd852d';
var id2 = '5c4116506b3ef9676feac848';

User.findById(id2).then((user) => {
  console.log('email:', user.email);
}).catch((e) => {
  console.log('catched an error');
});


// if (!ObjectID.isValid(id)) {
//   console.log('id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', JSON.stringify(todos, undefined, 2));
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log('Todo by id', JSON.stringify(todo, undefined, 2))
// }).catch((e) => {
//   console.log(e);
// });