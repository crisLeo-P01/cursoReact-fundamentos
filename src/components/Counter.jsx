import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(3)

    return (
        <>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </>
    )
}

export default Counter