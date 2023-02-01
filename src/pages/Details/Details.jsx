import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex, goToHome } from '../../Router/coordinator'

const Details = () => {

  const navigate = useNavigate()

  return (

    <div>
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
      <br/>
      <button onClick={() => goToHome(navigate)}>Home</button>
    </div>

  )
}

export default Details;
