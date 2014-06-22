(function() {
  new Vue({
    el: "#todoapp",
    data: {
      todos: [],
      newTodo: "",
      editedTodo: null
    },
    methods: {
      addTodo: function() {
        var value;
        value = this.newTodo && this.newTodo.trim();
        if (!value) {
          return;
        }
        this.todos.push({
          title: value,
          completed: false
        });
        return this.newTodo = "";
      },
      editTodo: function(todo) {
        this.beforeEditCache = todo.title;
        return this.editedTodo = todo;
      },
      doneEdit: function(todo) {
        this.editedTodo = null;
        todo.title = todo.title.trim();
        return console.log(todo.title);
      },
      cancelEdit: function(todo) {
        this.editedTodo = null;
        return todo.title = this.beforeEditCache;
      },
      deleteTodo: function(todo) {
        return this.todos.$remove(todo.$data);
      }
    }
  });

}).call(this);
