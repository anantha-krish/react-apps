import React,{useState} from 'react'

function TodoInput() {
    
    const [newTodo, setNewTodo] = useState('')

    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(newTodo)
    }
    
    return (
        <div>
            <form onSubmit={formSubmit}>
            <input type="text" name="newTodo" id="newTodo" onChange={(e)=>setNewTodo(e.target.value)}/>
            <input type="submit" value="add"/>
            </form>
        </div>
    )
}

export default TodoInput
