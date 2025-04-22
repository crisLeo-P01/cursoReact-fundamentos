import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(3)

    return (
        <>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)} className='bg-neutral-900 p-3'>Incrementar</button>
            <button onClick={() => setCount(count - 1)} className='bg-neutral-900 p-3'>Decrementar</button>
        </>
    )
}

export default Counter