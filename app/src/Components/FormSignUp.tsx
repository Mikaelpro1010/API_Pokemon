import React from 'react';
import { Link } from 'react-router-dom';

const FormSignUp = ({ formData, handleChange, handleSubmit }) => {
    return(
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4x1 text-white font-bold text-center mb-6">SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div className="relative my-4">
                        <input 
                        className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                        name="userName"
                        onChange={handleChange}
                        placeholder=""
                        />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Nome de usuário
                        </label>
                    </div>

                    <div className="relative my-4">
                        <input 
                        className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                        name="email"
                        onChange={handleChange}
                        placeholder=""
                        />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Seu Email
                        </label>
                    </div>

                    <div className="relative my-4">
                        <input 
                        placeholder=""
                        className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        />
                        <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Sua senha
                        </label>
                    </div>

                    <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">
                        Cadastrar
                    </button>
                    <div>
                        <span className="m-6">Já possui uma conta? <Link to='/login' className="text-blue-500">Login</Link></span>
                    </div>

                </form>
                
            </div>
        </div>
    )
}

export default FormSignUp