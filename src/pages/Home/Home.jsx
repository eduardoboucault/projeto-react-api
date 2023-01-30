import React from 'react'
import { HomeStyle } from './styled';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';

//* Para usar o contexto global que recebe os valores dos objetos, precisamos importar useContext e a variável global de contexto;

const Home = () => {

  //* Criar variável context recebendo o useContext com valor da variável contexto global;

  const context = useContext(GlobalContext)

  //* Passar os valores a serem consumidos via objeto desestruturado com as variáveis que serão utilizadas e o valor é a variável context;

  const { pokelist, pokedex, addToPokedex, loading } = context

  const navigate = useNavigate()

  return (

    <HomeStyle>
      <Header />
      {pokelist.lenght > 0 &&
      pokelist.map((pokemon, index) => {
         <PokemonCard
          key={index}
          name={pokemon.name}
          url={pokemon.url}
        />
      })}
      {!loading && <Loading/>}
    </HomeStyle>

  )
}

export default Home;
