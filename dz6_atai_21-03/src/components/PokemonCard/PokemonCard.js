import React from 'react'
import axios from 'axios';
import { useEffect, useState } from "react";
import classes from './pokemonCard.module.css'


const PokemonCard = ({pokemon}) => {
  const [cardImg, setCardImg] = useState([]);

  const fetchPokemonsInfo = async (pokemon) => {
    try {
      const { data } = await axios.get(pokemon.url)
      setCardImg(data.sprites)
  }catch(e) {

  }}
  useEffect(() => {
    fetchPokemonsInfo(pokemon)
  }, [])
  
  return (
      <div className={classes.pokemon}>
        <img src={cardImg.front_default} alt={pokemon.name}/>
      <h3>{pokemon.name}</h3></div>
      
  )
}

export default PokemonCard