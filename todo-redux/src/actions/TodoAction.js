
const TODO_DONE = 'TODO_DONE'
const TODO_ADD = 'TODO_ADD'

function doneTodo()
{
    return { type: TODO_DONE}
}

function addTodo()
{
    return { type: TODO_ADD}
}