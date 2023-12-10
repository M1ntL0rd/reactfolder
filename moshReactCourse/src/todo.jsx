import React from 'react';
import { ACTIONS } from './AIExample.jsx';

export default function Todo({ todo, dispatch }) {
  return (
    <div className='todo'>
        <span style={{  color: todo.complete ? 'green' : 'black' }} >{ todo.name }</span>
        <button onClick={()=> dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}> {todo.complete ? 'Complete✅' : 'Incomplete'} </button>
        <button onClick={()=> dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })}>Delete</button>
    </div>
  )
}
