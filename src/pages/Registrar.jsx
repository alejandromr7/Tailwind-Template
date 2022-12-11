import React from 'react'
import { Link } from 'react-router-dom'

const Registrar = () => {
    return (
        <>
            <h1 className='text-sky-600 font-black text-6xl capitalize text-center'>
                Crea Tú Cuenta y Administra Tús {' '}
                <span className='text-slate-700'>Proyectos</span>
            </h1>

            <form className='my-10 bg-white shadow-lg rounded-lg px-10 py-5'>
                <div className='my-5'>
                    <label htmlFor="nombre" className='uppercase text-gray-600 block text-xl font-bold'>Nombre</label>
                    <input type="text" id='nombre' placeholder=' Nombre' className='w-full p-3 bg-gray-50 rounded-xl border ' />
                </div>
                <div className='my-5'>
                    <label htmlFor="email" className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
                    <input type="text" id='email' placeholder='Email' className='w-full p-3 bg-gray-50 rounded-xl border ' />
                </div>
                <div className='my-5'>
                    <label htmlFor="password" className='uppercase text-gray-600 block font-bold text-xl'>Contraseña</label>
                    <input type="password" id='password' className='w-full bg-gray-50 p-3 rounded-xl border' placeholder='Contraseña' />
                </div>
                <div className='my-5'>
                    <label htmlFor="confirmar" className='uppercase text-gray-600 block font-bold text-xl'>Confirmar Contraseña</label>
                    <input type="password" id='confirmar' className='w-full bg-gray-50 p-3 rounded-xl border' placeholder='Confirmar Contraseña' />
                </div>

                <input
                    type="submit"
                    value='Crear Cuenta'
                    className='bg-sky-600 text-white py-3 mb-5 rounded-lg uppercase font-bold w-full hover:bg-sky-800 transition-colors hover:cursor-pointer'

                />
            </form>


            <nav className='xl:flex xl:justify-between'>
                <Link
                    to='/'
                    className='block uppercase font-bold text-slate-500 text-center text-sm my-5 hover:text-gray-800'
                >
                    ¿Ya tienes una cuenta? Iniciar Sesión
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

export default Registrar