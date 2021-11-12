import { useState } from "react";

interface CounterProps {
    initialValues?: number;
}
interface CounterState {
    counter: number;
    clicks: number;
}
export const CounterBy = ({ initialValues = 5 }: CounterProps) => {

    const [{ clicks, counter }, setCounter] = useState<CounterState>({
        counter: initialValues,
        clicks: 0,
    })
    const handleClick = (value: number) => {
        setCounter(({ clicks, counter }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <h1>Counter: {clicks}</h1>
            <button
                onClick={() => handleClick(1)}
            >+1</button>
            <button
                onClick={() => handleClick(5)}
            >+5</button>
        </>
    )
}
