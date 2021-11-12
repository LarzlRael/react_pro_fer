import { useReducer } from "react";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterAction from './actions/actions';


const INITIAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    change: 0,
}


export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch(CounterAction.doReset());
    }
    const increaseBy = (value: number) => {
        dispatch(CounterAction.doIncreaseBy(value));
    }
    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
            {JSON.stringify(counterState, null, 2)}
            <button
                onClick={handleReset}
            >Reset</button>
            <button
                onClick={() => increaseBy(1)}
            >+1</button>
            <button
                onClick={() => increaseBy(5)}
            >+5</button>
            <button
                onClick={() => increaseBy(10)}
            >+10</button>
        </>
    )
}
