import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import '../styles/index.css';

function Pokedex() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPokemons: any[] = [];

      for (let i = 1; i <= 151; i++) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const pokemon = await response.json();
          const pokemonType = pokemon.types.map((poke: any) => poke.type.name).join(', ');

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

  return (
    <>
      <Navbar />
      <main>
        <h1>Typed Pokedex</h1>
        <div id="app" className="container grid grid-cols-3 gap-4 p-4">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Pokedex;
