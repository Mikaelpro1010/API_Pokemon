import React from 'react';


const FormTeamPokemon = ({ handleSubmit, setPokemonName, pokemonName }) => {
    return(
        <div>
            <h1>Team Pokémon</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder="Enter Pokémon name" />
                <button type="submit">Add Pokémon</button>
            </form>
        </div>
    )
}

export default FormTeamPokemon