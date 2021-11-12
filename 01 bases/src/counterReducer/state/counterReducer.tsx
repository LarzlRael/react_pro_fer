import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
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