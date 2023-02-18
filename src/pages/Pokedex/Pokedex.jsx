import React from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { HomeStyle, ContainerStyle } from './styled'
import Header from '../../components/Header/Header'

const Pokedex = () => {

  const context = useContext(GlobalContext)
  const { pokedex } = context

  return (

    <HomeStyle>
      <Header />
      <ContainerStyle>
        {pokedex?.map((pokemon) => {
          return <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            sprites={pokemon.sprites}
            types={pokemon.types}
            onClick={'removeFromPokedex'}
            value={'Excluir'}
            pokemon={pokemon}
          />
        })}
      </ContainerStyle>
    </HomeStyle>

  )
}

export default Pokedex;
