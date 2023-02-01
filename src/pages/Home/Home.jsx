import React from 'react'
import { HomeStyle, ConteinerStyle } from './styled';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import { goToDetails } from '../../Router/coordinator';

//* Para usar o contexto global que recebe os valores dos objetos, precisamos importar useContext e a variável global de contexto;

const Home = () => {

  //* Criar variável context recebendo o useContext com valor da variável contexto global;

  const context = useContext(GlobalContext)

  //* Passar os valores a serem consumidos via objeto desestruturado com as variáveis que serão utilizadas e o valor é a variável context;

  const { pokedex, addToPokedex, loading, pokemon } = context
 
  return (

    <HomeStyle>

      <Header />

      <ConteinerStyle>
      {pokemon?.map((pokemon) => {
        return <PokemonCard
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          sprites={pokemon.sprites}
          addToPokedex={addToPokedex}
          pokedex={pokedex}
          types={pokemon.types}
          pokemon={pokemon}
          goToDetails={goToDetails}
        />
      })}
      {!loading && <Loading />}
      </ConteinerStyle>

    </HomeStyle>

  )
}

export default Home;
