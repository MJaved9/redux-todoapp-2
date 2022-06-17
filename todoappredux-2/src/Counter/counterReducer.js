import { Count_Dec, Count_Int } from "./actionType";

const init={
    count:0
}

export const countReducer=(state=init,{type,payLoad})=>{
switch(type){
    case Count_Int:{
        state.count=state.count+payLoad;
        return {...state};
    }
    case Count_Dec:{
        state.count=state.count-payLoad;
        return {...state};
    }
    default:{
        return state;
    }
}
}