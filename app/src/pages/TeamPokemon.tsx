import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const TeamPokemon: React.FC = () => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate('/login');
  }

  const [pokemonName, setPokemonName] = useState<string>('');
  const [team, setTeam] = useState<any[]>([]);
  const [teamLimitReached, setTeamLimitReached] = useState<boolean>(false);

  const addPokemonToTeam = (pokemon: any) => {
    if (team.length < 5) {
      setTeam([...team, pokemon]);
    } else {
      setTeamLimitReached(true);
      setTimeout(() => {
        setTeamLimitReached(false);
      }, 3000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (team.length >= 5) {
        throw new Error('Team limit reached.');
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokemon not found.');
      }
      const pokemon = await response.json();
      addPokemonToTeam({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        type: pokemon.types.map((type: any) => type.type.name).join(', '),
      });
      setPokemonName('');
    } catch (error) {
      console.error('Error adding Pokemon to team:', error);
      setTeamLimitReached(true);
      setTimeout(() => {
        setTeamLimitReached(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <h1>Team Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} placeholder="Enter Pokémon name" />
        <button type="submit">Add Pokémon</button>
      </form>
      <ul>
        {team.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      {teamLimitReached && <p>Failed to add Pokémon. Team limit reached or Pokémon not found.</p>}
    </div>
  );
};

export default TeamPokemon;


