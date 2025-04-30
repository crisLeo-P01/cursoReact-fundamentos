import { useState } from "react";

const CounterTs = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <button onClick={increment}>Increment: {count}</button>
    )
}

export default CounterTs