import { useState, useEffect } from "react";

const SearchPost = () => {
    const [query, setQuery] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.error('Se produjo un error:', err))
    }, [query])

    return (
        <>
            <h1 className="text-3xl font-bold underline">Lista de usuarios</h1>

            <input className="bg-gray-800" type="text" placeholder="Buscar por título" value={query} onChange={(event) => setQuery(event.target.value)} />

            <ul className="mt-3 space-y-2">
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
                
            </ul>
        </>
    )
}


export default SearchPost