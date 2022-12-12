import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import instance from '../../config/clienteAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setCargando(false);
                return;
            }

            const config = {
                headers: {
                    "Content-type": 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await instance(`usuarios/perfil`, config);
                setAuth(data);
                //navigate('/proyectos');
            } catch (error) {

            } finally {
                setCargando(false);
            }
        }
        autenticarUsuario();
    }, [])


    return (
        <AuthContext.Provider value={{ auth, setAuth, cargando }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthProvider }

export default AuthContext;