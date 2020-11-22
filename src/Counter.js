import React from 'react';
import {useDispatch} from 'react-redux';
import { increment, decrement} from './actions/increment';

export const Counter = () => {
    const dispatch=useDispatch();
    const count =0;
    return (
        <div>
            <h1>Total Movies : {count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}
