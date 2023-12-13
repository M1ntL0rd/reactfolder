import React, { useReducer,useState } from 'react';
import Todo from './todo.jsx';

export const ACTIONS = {
   ADD_TODO:'new_todo',
   TOGGLE_TODO: 'toggle_todo',
   DELETE: 'delete'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            if(action.payload.name == null && todos.name == null)  return
            return [...todos, newTodo(action.payload.name)];
            break;
        case ACTIONS.TOGGLE_TODO:
            return todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            })
            break;
        case ACTIONS.DELETE:
            return todos.filter(todo => todo.id !== action.payload.id)
    }
}

function newTodo(name){
    return { id: Date.now(), name: name, complete: false }
}

function AIExample() {
    const [todos, dispatch] = useReducer(reducer, []);
    const [ name, setName ] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
        setName('')
    }
    console.log(todos)
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Todo: </label>
                <input type="text" id='todo' value={name} onChange={(e)=> setName(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            {todos.map((todo)=> 
            {return <Todo key={todo.id} todo={todo} dispatch={dispatch} />})} 
        </div>
     );
}

export default AIExample;