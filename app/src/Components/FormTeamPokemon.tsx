import React from 'react';


const FormTeamPokemon = ({ handleSubmit, setPokemonName, pokemonName }) => {
    return(
        <div className="flex justify-center mt-5">
            <div className="card bg-gray rounded-lg shadow-md p-3">
                <form onSubmit={handleSubmit} className="space-y-6 text-center">
                    <div>
                        <h1 className="text-lg font-bold mr-4">Forme seu time de pokémon!</h1>
                    </div>
                    <div>
                        <input className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full" type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder="Nome" />
                    </div>
                    <div>
                        <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-gray-100 text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormTeamPokemon