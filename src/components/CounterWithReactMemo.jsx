import React, { useCallback, useMemo, useState } from "react"

const Child = React.memo(({ counter }) => {
    console.log('Renderizando Child');
    
    return <p>Contador: { counter }</p>
})

const CounterWithReactMemo = () => {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(() => {
        setCounter(prev => prev + 1)
    })

    function ExpensiveCalculation({ num }) {
        const result = useMemo(() => {
            console.log('Calculando...')
            return num * 2 
        }, [num])
        
        return <p>Resultado: { result }</p>
    }

    return (
        <>
            <button onClick={ increment }>Incrementar</button>

            <Child counter={ counter }/>

            <ExpensiveCalculation num={ counter }/>
        </>

    )
}

export default CounterWithReactMemo