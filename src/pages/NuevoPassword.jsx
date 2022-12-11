import React from 'react'
import { Link } from 'react-router-dom'

const NuevoPassword = () => {
    return (
        <>
            <h1 className='text-sky-600 font-black text-6xl capitalize text-center'>
                Reestablecer {' '}
                <span className='text-slate-700'>Contraseña</span>
            </h1>

            <form className='my-10 bg-white shadow-lg rounded-lg px-10 py-5'>
                <div className='my-5'>
                    <label htmlFor="password" className='uppercase text-gray-600 block font-bold text-xl'>Nueva Contraseña</label>
                    <input type="password" id='password' className='w-full bg-gray-50 p-3 rounded-xl border' placeholder='Nueva Contraseña' />
                </div>
                <div className='my-5'>
                    <label htmlFor="confirmar" className='uppercase text-gray-600 block font-bold text-xl'>Confirmar Contraseña</label>
                    <input type="password" id='confirmar' className='w-full bg-gray-50 p-3 rounded-xl border' placeholder='Confirmar Contraseña' />
                </div>

                <input
                    type="submit"
                    value='Actualizar Contraseña'
                    className='bg-sky-600 text-white py-3 mb-5 rounded-lg uppercase font-bold w-full hover:bg-sky-800 transition-colors hover:cursor-pointer'

                />
            </form>
        </>
    )
}

export default NuevoPassword