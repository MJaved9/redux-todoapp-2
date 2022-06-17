import { AddTodo, AddTodo_Error, AddTodo_Loading, AddTodo_Success, DeleteTodo, GetTodo_Error, GetTodo_Loading, GetTodo_Success } from "./actionType";

const init={
    getTodos:{
        loading:false,
        error:false,
        data:[]
    },
    addttodos:{
        loading:false,
        error:false,
        data:{}
    }
                   
             
}


export const todoReducer=(state=init,{type,payLoad})=>{
switch(type){
    case AddTodo_Loading:{
        return {...state,addttodos:{...state.addttodos,loading:true}}
    }
    case AddTodo_Error:{
        return {...state,addttodos:{...state.addttodos,error:true,loading:false}}
    }
   case AddTodo_Success:{

       return {...state,addttodos:{...state.addttodos,loading:false,data:payLoad},
       getTodos:{loading:false,error:false,data:[...state.getTodos.data,payLoad]}};
   }
  
   case GetTodo_Success:{
       return {...state,getTodos:{...state.getTodos,loading:false,data:payLoad}}
   }
   case GetTodo_Loading:{
    return {...state,getTodos:{...state.getTodos,loading:true}}
}
   case GetTodo_Error:{
return {...state,getTodos:{...state.getTodos,loading:false,error:true}}
   }
   default:{
       return state;
   }
}
return 0;
}