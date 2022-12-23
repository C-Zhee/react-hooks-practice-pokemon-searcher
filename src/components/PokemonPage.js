import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from 'react'

// Took me 15 mins for first deliverable, but Idk how to make it go horizontal instead of vertical
// Second Deliverable finished with 65 mins left (STUDY THIS PART ALOT!!!!!!)

function PokemonPage() {

  const [pokedex, setPokedex] = useState([])
  const [search, setSearch] = useState("")


  useEffect(()=>{
    const request = async() => {
      let hey = await fetch("http://localhost:3001/pokemon")
      let hi = await hey.json()
      setPokedex(hi)
      console.log(hi)
    }
    request()
  },[])

 

 


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokedex={pokedex} setPokedex={setPokedex}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokedex={pokedex} search={search} />
    </Container>
  );
}

export default PokemonPage;
