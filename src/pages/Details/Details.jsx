import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../Router/coordinator'

const Details = () => {

  const navigate = useNavigate()

  return (

    <div>
      <h1>Details</h1>
      <button onClick={() => goToPokedex(navigate)}>Pokedex</button>
    </div>

  )
}

export default Details;
