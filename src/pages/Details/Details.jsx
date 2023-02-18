import React from 'react'
import CardDetails from '../../components/CardDetails/CardDetails'
import Header from '../../components/Header/Header'
import { DetailsStyleContainer } from './styled'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

const Details = () => {

  const context = useContext(GlobalContext)

  const { selectedPokemon } = context

  return (

    <DetailsStyleContainer>
      <Header />
      <div>
        {selectedPokemon?.map((pokemon) => {
          return <CardDetails
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            sprites={pokemon.sprites}
            types={pokemon.types}
            stats={pokemon.stats}
            moves={pokemon.moves}
          />
        })}
      </div>

    </DetailsStyleContainer>

  )
}

export default Details;
