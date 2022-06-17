
import { Count_Dec, Count_Int } from "./actionType";


export const addCount=(dispatch,value)=>{
    dispatch({type:Count_Int,payLoad:value})
};
export const subCount=(dispatch,value)=>{
    dispatch({type:Count_Dec,payLoad:value})
};