import { useState } from "react";

interface CounterProps {
    initialValues: number;
}
export const Counter = ({ initialValues }: CounterProps) => {

    const [counter, setCounter] = useState(initialValues)
    const handleClick = () => {
        setCounter(prev => prev + 1);

    }
    return (
        <>
            <h1>Counter: {counter}</h1>
            <button
                onClick={handleClick}
            >+1</button>
        </>
    )
}
