import React, { useState } from 'react'

export default function TodoList({todo}) {
    const [list,setList]=useState([])
    
    const handleTodo=(e)=>{
        e.preventDefault();
        console.log(todo);
        setList([...list,todo]);
    }

  return (
    
    <div className='todoList'>  
        <center>
    <table>
      <th>
        Todo
      </th>
      <tbody>
      {
        list.map((l)=>(
          <tr>
        <td>{l}</td>
        </tr>
        ))
        }
      </tbody>
    </table>
    </center>
    </div>
  )
}
