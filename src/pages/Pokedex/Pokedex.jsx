import React from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { HomeStyle, ConteinerStyle } from './styled'
import Header from '../../components/Header/Header'

const Pokedex = () => {

  const context = useContext(GlobalContext)
  const { pokedex, pokemon } = context
  console.log(pokedex)
  return (

    <HomeStyle>
      <Header />
      <ConteinerStyle>
        {pokedex?.map((pokemon) => {
          return <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            sprites={pokemon.sprites}
            types={pokemon.types}
            onClick={'removeFromPokedex'}
            value={'Excluir'}
          />
        })}
      </ConteinerStyle>
    </HomeStyle>

  )
}

export default Pokedex;
