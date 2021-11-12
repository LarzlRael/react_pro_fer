import { useCounter } from '../hook/useCounter';

export const CounterHook = () => {

    const { counter, handleClick, counterElement } = useCounter({
        maxCount: 15,
    });

    return (
        <>
            <h1>Counter</h1>
            <h2 ref={counterElement}>Counter Effect: {counter}</h2>
            <button
                onClick={handleClick}
            >+1</button>
        </>
    )
}
