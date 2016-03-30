'use strict';
var Service = require('./Service');

module.exports = class TodoService extends Service {
  constructor() {
    super();
  }
  
  getTodos() {
    return this.db.any('select * from todo');
  }
  
  getTodoById(id) {
    return this.db.one('select * from todo where id=$1', id);
  }
  
  addNewTodo(newTodo) {
    return this.db.one(
      'insert into todo(item, done, create_date) values($1, $2, $3) returning *',
      [newTodo.item, newTodo.done, newTodo.create_date]
    )
  }
  
  updateTodo(todo) {
    return this.db.one(
      'update todo set item=$1, done=$2 where id=$3 returning *',
      [todo.item, todo.done, todo.id]
    )
  }

  deleteTodo(id) {
    return this.db.one(
      'delete from todo where id=$1 returning *',
      [id]
    )
  }
};
