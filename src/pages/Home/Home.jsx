import React from 'react'
import { goToPokedex } from '../../Router/coordinator';
import { HomeStyle } from './styled';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Header from '../../components/Header/Header';
import { BASE_URL } from '../../variables/BASE_URL';
import axios from 'axios';

//* Para usar o contexto global que recebe os valores dos objetos, precisamos importar useContext e a variável global de contexto;

const Home = () => {

  //* Criar variável context recebendo o useContext com valor da variável contexto global;

  const context = useContext(GlobalContext)

  //* Passar os valores a serem consumidos via objeto desestruturado com as variáveis que serão utilizadas e o valor é a variável context;

  const { pokelist, pokedex, addToPokedex, setPokelist } = context

  const navigate = useNavigate()

  useEffect(() => {
    fetchPokelist();
}, []);

  const fetchPokelist = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon`);
        setPokelist(response.data.results);
    } catch (error) {
        console.log("Erro ao buscar lista de pokemons");
        console.log(error.response);
    }
};

  return (

    <HomeStyle>
      <Header />
      {pokelist.map((pokemon) => {
        return <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      })}
    </HomeStyle>

  )
}

export default Home;
