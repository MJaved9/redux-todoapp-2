import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, subCount } from '../counter/action';
const Counter = () => {
    const dispatch=useDispatch();
    const state=useSelector((state)=>state.count)
    // console.log(state);
  return (
    <div>
        <h1>Counter</h1>
        <h2>count:-{state.count}</h2>
        <button onClick={()=>addCount(dispatch,1)}>+</button>
        <button onClick={()=>subCount(dispatch,1)}>-</button>
    </div>
  )
}

export default Counter