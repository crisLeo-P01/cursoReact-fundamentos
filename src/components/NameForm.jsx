import {useState} from 'react'

const NameForm = () => {
    const [name, setName] = useState('')

    return (
        <>
            <input 
            type="text"
            placeholder='Como te llamas?'
            value={name}
            onChange={(event) => setName(event.target.value)}  />

            <p>Hola, bienvenido {name || 'visitante'}</p>
        </>
    )
}

export default NameForm