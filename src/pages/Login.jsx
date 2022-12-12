import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../config/clienteAxios';
import useAuth from '../../hooks/useAuth';
import Alerta from '../components/Alerta';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const { setAuth, cargando } = useAuth();
    console.log(cargando);

    const handleSubmit = async e => {
        e.preventDefault();


        if ([email, password].includes('')) {
            setAlerta({ msg: 'Todos los campos son obligatorios', error: true });
            return;
        }

        try {
            const { data } = await instance.post(`/usuarios/login`, { email, password });
            setAlerta({});
            setAuth(data);
            localStorage.setItem('token', data.token)
            navigate('/proyectos');
        } catch (error) {
            setAlerta({ msg: error.response.data.msg, error: true });
        }

    }

    const { msg } = alerta;

    return (
        <>
            <h1 className='text-sky-600 font-black text-6xl capitalize text-center'>
                Inicia Sesión y Administra Tús {' '}
                <span className='text-slate-700'>Proyectos</span>
            </h1>

            {msg && <Alerta alerta={alerta} />}

            <form onSubmit={handleSubmit} className='my-10 bg-white shadow-lg rounded-lg px-10 py-5'>
                <div className='my-5'>
                    <label htmlFor="email" className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
                    <input
                        type="text"
                        id='email'
                        placeholder='Email'
                        className='w-full p-3 bg-gray-50 rounded-xl border '
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='my-5'>
                    <label htmlFor="password" className='uppercase text-gray-600 block font-bold text-xl'>Contraseña</label>
                    <input
                        type="password"
                        id='password'
                        className='w-full bg-gray-50 p-3 rounded-xl border'
                        placeholder='Contraseña'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <input
                    type="submit"
                    value='Iniciar Sesión'
                    className='bg-sky-600 text-white py-3 mb-5 rounded-lg uppercase font-bold w-full hover:bg-sky-800 transition-colors hover:cursor-pointer'

                />
            </form>


            <nav className='xl:flex xl:justify-between'>
                <Link
                    to='/registrar'
                    className='block uppercase font-bold text-slate-500 text-center text-sm my-5 hover:text-gray-800'
                >
                    ¿No tienes una cuenta? Registrate
                </Link>
                <Link
                    to='/olvide-password'
                    className='block uppercase font-bold text-slate-500 text-center text-sm my-5 hover:text-gray-800'
                >
                    ¿Olvide mi contraseña?
                </Link>
            </nav>
        </>
    )
}

export default Login