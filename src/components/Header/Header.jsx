import React from 'react'
import { HeaderStyle, LogoContainer, Logo, ButtonContainer, ButtonExclude, ButtonPokedex, ButtonAllPokemon } from './styled'
import { goToPokedex, goToHome } from '../../Router/coordinator'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  return (
    <HeaderStyle>
      <LogoContainer>
        <Logo src={'pokemonlogo.png'} />
      </LogoContainer>

      <ButtonContainer>
        <ButtonAllPokemon onClick={() => goToHome(navigate)}>Todos os Pokémon</ButtonAllPokemon>
        <ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokédex</ButtonPokedex>
        <ButtonExclude>Excluir Pokémon</ButtonExclude>
      </ButtonContainer>
    </HeaderStyle>
  )
}

export default Header