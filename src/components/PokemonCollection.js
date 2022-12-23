import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokedex, search}) {

  const filteredPokemon = pokedex.filter((poke) => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    filteredPokemon.map((pokemon)=>{
      return(
        <div>
          <Card.Group itemsPerRow={6}>
            <PokemonCard pokemon={pokemon} itemsPerRow={6} />
          </Card.Group>

        </div>
      )
    })
  );
}

export default PokemonCollection;
