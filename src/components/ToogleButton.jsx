import { useState } from "react";

const ToggleButton = () => {
    const [isActive, setActive] = useState(false)

    return (
        <button onClick={() => setActive(!isActive)}>
            {isActive ? 'Activo 👍' : 'Inactivo 👎'}
        </button>
    )
}

export default ToggleButton