export type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    | { type: 'reset' }

export const doReset = (): CounterAction => ({
    type: 'reset',
})


// actions creators
//dorest
export const doIncreaseBy = (value: number): CounterAction => ({
    type: 'increaseBy',
    payload: { value }
})