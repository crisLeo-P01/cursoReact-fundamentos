import { useState, useEffect } from "react";

const UserListWithLoading = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                
                if(!response.ok) {
                    throw new Error('Error al obtener los datos.')
                }

                const data = await response.json()
                setUsers(data)
            } catch(error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [])

    if(isLoading) {
        return <p>Cargando...</p>
    }

    if(error) {
        return (
            <div className="text-center">
                <p className="text-red-500">Error: {error.message}</p>
                <button 
                    className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => window.location.reload()}>
                        Reintentar
                </button>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">Lista de usuarios</h1>
            <ul className="mt-3 space-y-2">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {users.map((user) => (
                            <li key={user.id}>
                                <h5 className="text-lg">Nombre del usuario: {user.name}</h5>
                                <p className="text-lg">Ciudad: {user.address.city}</p>
                            </li>

                        ))
                    }
                </section>
            </ul>
           
        </>
    )
}

export default UserListWithLoading