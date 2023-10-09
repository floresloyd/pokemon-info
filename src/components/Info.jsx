/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";

const Info = ({ onPokemonEncounter }) => {
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const fetchPokemon = async () => {
    // Generate a random number between 1 and 1021
    const min = 1;
    const max = 1021;
    const randomPokemonId = Math.floor(Math.random() * (max - min + 1)) + min;

    // Construct the URL with the random Pokemon ID
    const URL = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    try {
      const response = await axios.get(URL);
      setCurrentPokemon(response.data);
      // Notify the App component of the encounter
      onPokemonEncounter(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  return (
    <div className="bord container">
      <h1> Who's That Pokemon? </h1>
      {currentPokemon ? (
        <Card
          name={currentPokemon.name}
          type={currentPokemon.types[0].type.name}
          image={currentPokemon.sprites.front_default}
        />
      ) : (
        <p>No Pokemon fetched yet.</p>
      )}
      <button onClick={fetchPokemon}> New Pokemon</button>
    </div>
  );
};

export default Info;
