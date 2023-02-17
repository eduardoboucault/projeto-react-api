import React from 'react'
import { goToPokedex, goToHome } from '../../Router/coordinator'
import { HeaderStyle } from './styled'
import { useNavigate } from 'react-router-dom'
import { ButtonExclude, ButtonPokedex, ButtonAllPokemon } from './styled'

function Header() {
  const navigate = useNavigate()
  return (
    <HeaderStyle>
      <div>
      <img src={'pokemonlogo.png'} />
      </div>

      <div>
      <ButtonAllPokemon onClick={() => goToHome(navigate)}>Todos os Pokémon</ButtonAllPokemon>
      </div>

      <div>
      <ButtonPokedex onClick={() => goToPokedex(navigate)}>Pokédex</ButtonPokedex>
      </div>

      <div>
      <ButtonExclude>Excluir Pokémon</ButtonExclude>
      </div>
    </HeaderStyle>
  )
}

export default Header