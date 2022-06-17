import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, getData } from '../todos/action';

const Todo = () => {
const input=useRef();
    const dispatch=useDispatch();
    const {data,loading,error}=useSelector((state)=>state.todo.getTodos);
    const {loading:addBtnLoading}=useSelector((state)=>state.todo.addttodos)
    console.log(data);
const handleAdd=()=>{
    let value=input.current.value;
   dispatch(addTodo({value:value,isCompleted:false})); 
input.current.value="";
}



useEffect(()=>{
    dispatch(getData());
},[])

if(loading) return <h1>Loading....</h1>
else if(error) return <h1>Somthing went wrong</h1>


  return (
    <div>
        <h1>Todo List</h1>
        <input ref={input} type="text" name="" id="" />
        <button onClick={handleAdd} disabled={addBtnLoading}>add</button>
        {data.map((d)=>{
            return <div key={d.id}>{d.value}</div>
        })
        }
    </div>
  )
}

export default Todo