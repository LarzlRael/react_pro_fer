import { useReducer } from "react";

interface CounterState {
    counter: number;
    previus: number;
    change: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previus: 0,
    change: 0,
}
type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                change: 0,
                previus: 0,
            }
        case 'increaseBy':
            return {
                previus: state.counter,
                counter: state.counter + action.payload.value,
                change: state.counter + 1,
            }


        default:
            return state;
    }
}
export const CounterReducerComponent = () => {

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({
            type: 'reset',
        });
    }
    const increaseBy = (value: number) => {
        dispatch({
            type: 'increaseBy',
            payload: { value }
        });
    }
    return (
        <>
            <h1>Counter Reducer</h1>
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
