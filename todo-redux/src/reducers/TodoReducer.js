
const initialState = {}

 const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
    
   case 'TODO_DONE':
    return state

    case 'TODO_ADD':
    return state

    default:
        return state
    }
}
export default TodoReducer;