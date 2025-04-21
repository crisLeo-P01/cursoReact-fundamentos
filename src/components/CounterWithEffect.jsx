import { useState, useEffect } from 'react'

const CounterWithEffect = () => {
    const [count, setCount] = useState(0)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if(clicked) {
            console.log(`El contandor cambio a: ${count}`);    
        }
    }, [ count, clicked ])

    const handleClick = () => {
        setCount( count + 1 )
        setClicked(true)
    }

    return (
        <>
            <p>El contador esta en: {count}</p>
            <button onClick={ handleClick }>Incrementar</button>
        </>
    )
}

export default CounterWithEffect