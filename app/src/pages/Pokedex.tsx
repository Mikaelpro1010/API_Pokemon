import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Filter from '../Components/Filter';
import { useNavigate } from 'react-router-dom';
import '../styles/index.css';

const Pokedex = ({ token }) => {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  const [loading, setLoading] = useState(true);
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
          console.error(`Falha ao buscar Pokémon com ID ${i}:`, error);
        }
      }

      setPokemons(fetchedPokemons);
      setLoading(false);
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
      <main className="container mx-auto px-4">
        <Filter 
          searchName={searchName}
          setSearchName={setSearchName}
          searchType={searchType}
          setSearchType={setSearchType}
        />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-8 border-gray-100 border-t-8 border-b-red-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {filteredPokemons.length > 0 ? (
              filteredPokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
            ) : (
              <p className="bg-red-500 text-white p-3 rounded-md mt-4">O pokémon procurado não existe nesta pokedéx.</p>
            )}
          </div>
        )}
      </main>
    </>
  );
};

export default Pokedex;

