import useCounter from "../hooks/useCounter"

const CounterWithCustomHook = () => {
    const { increment,
        decrement,
        reset,
        count } = useCounter(10)

    return (
        <>
            <p>Contador: {count}</p>
            <button onClick={increment} className="bg-blue-600 p-2 m-2">👍 Incrementar</button>
            <button onClick={decrement} className="bg-blue-600 p-2 m-2">👎 Decrementar</button>
            <button onClick={reset} className="bg-red-600 p-2 m-2">Resetear</button>
        </>
    )
}

export default CounterWithCustomHook