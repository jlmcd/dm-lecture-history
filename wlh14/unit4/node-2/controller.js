const todos = []
let id = 0

module.exports = {
  getTodos: (req, res) => {
    res.status(200).send(todos)
  },
  addTodo: (req, res) => {
    // * first add the task object
    todos.push({
      task: req.body.newItem,
      complete: false,
      id: id
    })
    // * increment id
    id++
    // * Send the updated todos Array
    res.status(201).send(todos)
  },
  updateTodo: (req, res) => {
    // * find the object's index
    const {id} = req.params
    const index = todos.findIndex(item => item.id === +id)
    // * change that object's "complete" property and anything else
    const updatedTodo = {...todos[index], ...req.body}
    // * Replace the old task object with the updated task object
    todos[index] = updatedTodo
    // * send my updated array back
    res.status(200).send(todos)
  },
  deleteTodo: (req, res) => {
    // * Find the object's index
    const {id} = req.params
    const index = todos.findIndex(item => item.id === +id)
    // * Splice out the object at that index
    todos.splice(index, 1)
    // * Return the updated array
    res.status(200).send(todos)
  }
}