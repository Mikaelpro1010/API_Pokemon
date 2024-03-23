import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

const Pokedex = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate('/login');
  }

  const [pokemons, setPokemons] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPokemons = [];

      for (let i = 1; i <= 151; i++) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const pokemon = await response.json();
          const pokemonType = pokemon.types.map((poke) => poke.type.name).join(', ');

          const transformedPokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            type: pokemonType,
          };

          fetchedPokemons.push(transformedPokemon);
        } catch (error) {
          console.error(`Failed to fetch Pokémon with ID ${i}:`, error);
        }
      }

      setPokemons(fetchedPokemons);
    };

    fetchData();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchName.toLowerCase());
    const typeMatch = pokemon.type.toLowerCase().includes(searchType.toLowerCase());
    return nameMatch && typeMatch;
  });

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <main>
        <h1>Typed Pokedex</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tipo"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
        </div>
        <div id="app" className="container grid grid-cols-3 gap-4 p-4">
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
          ) : (
            <p>O pokémon procurado não existe nesta pokedéx.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Pokedex;

