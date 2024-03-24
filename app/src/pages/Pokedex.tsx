import React, { useEffect,useState } from 'react';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';
import Filter from '../Components/Filter';
import PokemonModal from '../Components/Modal'; // Importe o componente do modal
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
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado para armazenar os detalhes da evolução do Pokémon selecionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto

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

  const handlePokemonClick = async (pokemonId) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
      const data = await response.json();
      const evolutionChainUrl = data.evolution_chain.url;
      const chainResponse = await fetch(evolutionChainUrl);
      const chainData = await chainResponse.json();
      
      // Processando os dados da cadeia de evolução para encontrar a próxima evolução do Pokémon selecionado
      const nextEvolution = findNextEvolution(chainData.chain, pokemonId);
      
      // Atualizando o estado 'selectedPokemon' com os detalhes da próxima evolução
      setSelectedPokemon(nextEvolution);

      // Abrindo o modal ao clicar no card
      setIsModalOpen(true);
    } catch (error) {
      console.error('Erro ao buscar detalhes da evolução:', error);
    }
  };

  // Função para encontrar a próxima evolução do Pokémon selecionado
  const findNextEvolution = (chain, selectedPokemonId) => {
    let nextEvolution = null;

    const traverseChain = (chain) => {
      if (chain.species && chain.species.url) {
        const id = chain.species.url.split('/').slice(-2, -1)[0];
        if (parseInt(id) === selectedPokemonId) {
          // Se encontrarmos o Pokémon selecionado na cadeia de evolução
          if (chain.evolves_to && chain.evolves_to.length > 0) {
            // Se houver uma próxima evolução
            const nextEvolutionSpecies = chain.evolves_to[0].species;
            nextEvolution = {
              id: parseInt(nextEvolutionSpecies.url.split('/').slice(-2, -1)[0]),
              name: nextEvolutionSpecies.name,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nextEvolutionSpecies.url.split('/').slice(-2, -1)[0]}.png`
            };
          }
          return;
        } else {
          // Se não for o Pokémon selecionado, continue a busca na cadeia de evolução
          chain.evolves_to.forEach(traverseChain);
        }
      }
    };

    traverseChain(chain);
    return nextEvolution;
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(searchName.toLowerCase());
    const typeMatch = pokemon.type.toLowerCase().includes(searchType.toLowerCase());
    return nameMatch && typeMatch;
  });

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              filteredPokemons.map((pokemon) => (
                <Card 
                  key={pokemon.id} 
                  pokemon={pokemon} 
                  onClick={() => handlePokemonClick(pokemon.id)} // Adiciona a chamada da função handlePokemonClick no evento onClick do card
                />
              ))
            ) : (
              <p className="bg-red-500 text-white p-3 rounded-md mt-4">O pokémon procurado não existe nesta pokedéx.</p>
            )}
          </div>
        )}
        {/* Modal para exibir a próxima evolução do Pokémon selecionado */}
        {selectedPokemon && (
          <PokemonModal
            isOpen={isModalOpen}
            onClose={closeModal}
            pokemon={selectedPokemon}
          />
        )}
      </main>
    </>
  );
};

export default Pokedex;
