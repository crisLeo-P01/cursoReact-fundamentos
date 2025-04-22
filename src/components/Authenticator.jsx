import { useState, createContext, useContext } from "react";

// ------ Este ejemplo muestra cómo manejar un estado de autenticación

// Crear el Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username) => setUser({ name: username });
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para consumir el contexto
const useAuth = () => useContext(AuthContext);

const LoginButton = () => {
    const { login } = useAuth();
    return <button onClick={() => login("Usuario")} className='bg-neutral-600 cursor-pointer m-1 p-1'>Iniciar Sesión</button>;
};

const LogoutButton = () => {
    const { logout } = useAuth();
    return <button onClick={logout} className='bg-red-600 cursor-pointer m-1 p-1'>Cerrar Sesión</button>;
};

const UserInfo = () => {
    const { user } = useAuth();
    return <div>{user ? `Hola, ${user.name}` : "No has iniciado sesión"}</div>;
};

const Authenticator = () => {
    return (
        <AuthProvider>
            <div className='bg-neutral-900 p-3'>
                <h1>Contexto de Autenticación</h1>
                <UserInfo />
                <LoginButton />
                <LogoutButton />
            </div>
        </AuthProvider>
    )
}

export default Authenticator