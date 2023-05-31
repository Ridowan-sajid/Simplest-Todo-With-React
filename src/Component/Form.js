import React, { useState } from 'react'


export default function Form() {
  const [todo, setTodo]=useState("");
  const [list,setList]=useState([])
  const [isEdit,setIsEdit]=useState(false);
  const [editIndex,setEditIndex]=useState();

  const handleChange=(e)=>{
    setTodo(
      e.target.value
    );
  }

  const handleTodo=(e)=>{
      e.preventDefault();

      if(isEdit===true){
        list[editIndex] = todo;
        setList(list);
        setIsEdit(false);
        setTodo("");
      }else{
        setList([...list,todo]);
        setTodo("");
      }

  }

  const editTodo=(i)=>{
    const data=list[i];
    setTodo(data);
    setIsEdit(true);
    setEditIndex(i);
  }
  

  const deleteTodo=(index)=>{
    const newList=list.filter((l,i)=>{
      if(index===i){
        return false;
      }else{
        return true;
      }
    });
    setList(newList);
  }



  return (
    <>
    <form action="" onSubmit={handleTodo}>
        <input type="text" placeholder='Enter a todo' value={todo} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>


    <center>
    <table>
      <th>
        List
      </th>
      <tbody>
      {
        list.map((l,i)=>(
          <tr>
        <td>{l}</td>
        <td><button name='update' onClick={()=>editTodo(i)}>Update</button></td>
        <td><button name='delete' onClick={()=>deleteTodo(i)}>Delete</button></td>
        </tr>
        ))
        }
      </tbody>
    </table>
    </center>

    </>
  )
}
