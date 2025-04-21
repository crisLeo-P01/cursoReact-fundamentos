import { useState, useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(err => console.error('Se produjo un error:', err))
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold underline">Lista de usuarios</h1>
            <ul className="mt-3 space-y-2">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {users.map((user) => (
                        <li key={user.id}>
                            <p className="text-lg">Nombre del usuario: {user.name}</p>
                            <p className="text-lg">Ciudad: {user.address.city}</p>
                        </li>

                    ))
                }
            </section>
                
            </ul>
           
        </>
    )
}

export default UserList