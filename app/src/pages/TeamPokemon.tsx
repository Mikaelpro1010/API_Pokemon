import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import { useNavigate } from 'react-router-dom';
import FormTeamPokemon from '../Components/FormTeamPokemon';

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
        throw new Error('Limite da equipe atingido.');
      }

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado.');
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
      console.error('Erro ao adicionar Pokémon à equipe:', error);
      setTeamLimitReached(true);
      setTimeout(() => {
        setTeamLimitReached(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <FormTeamPokemon  
        setPokemonName={setPokemonName}
        pokemonName={pokemonName}
        handleSubmit={handleSubmit}
      />
      <div id="app" className="container grid grid-cols-3 gap-4 p-4">
        {team.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {teamLimitReached && <p className="bg-red-500 text-white p-4 rounded-md mt-4">Falha ao adicionar Pokémon. Limite de equipe atingido ou Pokémon não encontrado.</p>}
    </div>
  );
};

export default TeamPokemon;



