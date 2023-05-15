import React, {useRef, useState, useEffect} from 'react'
import axios from 'axios';

export default function Search() {

  const todoNameRef = useRef();
  const [pokemonId, setPokemonId] = useState();

  let url = "https://pokeapi.co/api/v2/pokemon/";
  let searchGlobal;
  let pokemonUrl = url + searchGlobal;
  
  
  function submitHandler(e) {
    const name = todoNameRef.current.value;
    
    searchGlobal = name;
    console.log(name)
    if (name === ("")) {
      return
    }
    
    todoNameRef.current.value = null;
    console.log(searchGlobal)
  }

  useEffect(() =>{
    axios.get(pokemonUrl)
    .then(res => {
      setPokemonId(res.data.id);
    })
  }, []);

  return (
      <label className="tasks">
      <input ref = {todoNameRef} required type="text" onSubmit={submitHandler} className="TextInput"/>
      <span className="highlight"></span>
      <span className="bar"></span> 
    <button onClick = { submitHandler } type="submit" className="addToDo">Search</button>
    </label>
  )
}
