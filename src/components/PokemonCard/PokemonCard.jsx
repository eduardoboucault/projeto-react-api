import React from 'react'
import { CardStyle, ButtonStyle, TitleName, IdStyle } from './styled';

//* Colocar requisição de API URL Pokémon no GlobalStates

function PokemonCard({name, url}) {
  console.log(name)
  console.log(url)
  return (

    <div>
      <CardStyle>
      <IdStyle>#{url.id}</IdStyle>
      <TitleName>{name}</TitleName>
      <img src={url.sprites?.other['official-artwork'].front_default} alt={url.name} />
      <ButtonStyle>Detalhes</ButtonStyle>
      <ButtonStyle>Capturar!</ButtonStyle>
      </CardStyle>
    </div>
    
  )
}

export default PokemonCard