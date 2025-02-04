import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokedex,setPokedex}) {
  
  // const shinyPokemon = {
  //   name: pokemonName,
  //   hp: hp,
  //   sprites: {
  //     front: frontImage,
  //     back: backImage,
  //   },
  // };

  const newPokemon = async (pokemon) => {
    let hey = await fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:""  })
    })
    setPokedex([...pokedex, pokemon])
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault() 
          newPokemon()}}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
