new Vue
  el: "#todoapp"
  data:
    todos: []
    newTodo: ""
    editedTodo: null
  methods:
    addTodo: ->
      value = this.newTodo && this.newTodo.trim()
      return if (!value)
      this.todos.push
        title: value
        completed: false
      this.newTodo = ""

    editTodo: (todo) ->
      this.beforeEditCache = todo.title
      this.editedTodo = todo

    doneEdit: (todo) ->
      this.editedTodo = null
      todo.title = todo.title.trim()
      console.log(todo.title)

    cancelEdit: (todo) ->
      this.editedTodo = null
      todo.title = this.beforeEditCache

    deleteTodo: (todo) ->
      this.todos.$remove(todo.$data)







