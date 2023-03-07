import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

const List = ({list}) => {
  return (
    <>{list.map((item,index)=>
      <PokemonCard key={index} pokemon = {item}/>
      )}</>
  )
}

export default List