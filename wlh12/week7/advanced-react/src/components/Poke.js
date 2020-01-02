import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default () => {
  const [pokemon, updatePokemon] = useState([])
  useEffect(
    // ComponentDidMount 
    () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(res => updatePokemon(res.data.results))
      return () => {
        // ComponentWillUnmount
        // Some cleanup
      }
    }, [/* conditions for componentDidUpdate */]
  )
  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  )
}