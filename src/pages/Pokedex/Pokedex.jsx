import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToDetails, goToHome } from '../../Router/coordinator'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

const Pokedex = () => {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context
  const navigate = useNavigate()

  return (

    <div>

      <button onClick={() => goToHome(navigate)}>Home</button>
      <br/>
      <button onClick={() => goToDetails(navigate)}>Details</button>

    </div>

  )
}

export default Pokedex;
