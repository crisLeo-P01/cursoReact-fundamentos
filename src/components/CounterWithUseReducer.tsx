import { useReducer } from "react"

type State = { count: number }
type Action = { type: 'increment' | 'decrement' }

const reducer = (state: State, action: Action): State => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <>
            <p>Contador: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})} className="border-neutral-800 bg-neutral-700 m-1 p-1 cursor-pointer">Incrementar</button>
            <button onClick={() => dispatch({type: 'decrement'})} className="border-neutral-800 bg-neutral-700 m-1 p-1 cursor-pointer">Decrementar</button>
        </>
    )
}

export default Counter