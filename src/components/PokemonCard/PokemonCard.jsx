import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { CardStyle, ButtonStyle, TitleName, IdStyle } from './styled';

//* Colocar requisição de API URL Pokémon no GlobalStates

function PokemonCard({name, url}) {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  // const pokeTypes = pokemon.types.map((type) => type.type.name)
  console.log(pokemon)
  return (

    <div>
      <CardStyle>
      <IdStyle>#{pokemon.id}</IdStyle>
      <TitleName>{name}</TitleName>
      <img/>
      <img src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
      <ButtonStyle>Detalhes</ButtonStyle>
      <ButtonStyle>Capturar!</ButtonStyle>
      </CardStyle>
    </div>
    
  )
}

export default PokemonCard