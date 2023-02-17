import React from 'react'
import  CardDetails  from '../../components/CardDetails/CardDetails'
import Header from '../../components/Header/Header'
import { DetailsStyleContainer } from './styled'

const Details = () => {

  return (

    <DetailsStyleContainer>
      <Header/>

      <CardDetails/>

    </DetailsStyleContainer>

  )
}

export default Details;
