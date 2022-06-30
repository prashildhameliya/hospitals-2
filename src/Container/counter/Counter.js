
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, icrimentCounter } from '../../redux/action/Counter.Action';
import { counterReducer } from '../../redux/reducer/Counter.Reducer';

function Counter(props) {
    const c = useSelector(state => state.Counter)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(icrimentCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <p>{c.counter}</p>
            <button onClick={() => handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;