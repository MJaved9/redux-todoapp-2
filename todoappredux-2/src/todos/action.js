import { AddTodo, AddTodo_Error, AddTodo_Loading, AddTodo_Success, DeleteTodo, GetTodo_Error, GetTodo_Loading, GetTodo_Success } from "./actionType";

import axios from 'axios'
export const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:AddTodo_Loading});
    axios.post("http://localhost:9090/todos",
   payload).then(res=>{
        dispatch({type:AddTodo_Success,payLoad:res.data})
    }).then(err=>dispatch({type:AddTodo_Error}));
    
}



export const getData=()=>(dispatch)=>{
    dispatch({type:GetTodo_Loading});
axios.get("http://localhost:9090/todos").then(res=>{
    dispatch({type:GetTodo_Success,payLoad:res.data})
}).catch(err=>dispatch({type:GetTodo_Error}))
}

