/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import "../css/Info.css";

const Info = ({ onPokemonEncounter, onTypeBan }) => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonGen, setCurrentPokemonGen] = useState(null);
  const [bannedTypes, setBannedTypes] = useState([]);

  const fetchPokemon = async () => {
    // Generate a random number between 1 and 1021
    const min = 1;
    const max = 1021;
    const randomPokemonId = Math.floor(Math.random() * (max - min + 1)) + min;

    // Construct the URL with the random Pokemon ID
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

    try {
      const response = await axios.get(pokemonURL);
      const pokemonData = response.data;
      setCurrentPokemon(pokemonData);

      // Handle Pokemon Generation
      const speciesURL = pokemonData.species.url;
      const speciesResponse = await axios.get(speciesURL);
      const generationData = speciesResponse.data.generation.name;
      setCurrentPokemonGen(generationData);
      // Handle Pokemon Types
      const types = pokemonData.types.map((typeObj) => typeObj.type.name);
      //console.log(types); # DEBUGGING TO CHECK TYPE
      // Check if any of the types are banned
      const isBanned = bannedTypes.some((bannedType) =>
        types.includes(bannedType)
      );

      if (!isBanned) {
        // Notify the App component of the encounter and generation
        onPokemonEncounter(pokemonData, currentPokemonGen);
      } else {
        // If the type is banned, fetch a new Pokémon
        //alert("Pokemon Type is banned"); DEBUGGING FOR BANNED TYPES
        // Remove the banned type from the state
        const updatedBannedTypes = bannedTypes.filter(
          (bannedType) => bannedType !== types[0]
        );
        setBannedTypes(updatedBannedTypes);
        fetchPokemon(); // Recursively call fetchPokemon again
      }
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  const handleTypeBan = (type) => {
    // Add the banned type to the state
    setBannedTypes([...bannedTypes, type]);
    // Notify the App component of the banned type
    onTypeBan(type);
  };

  return (
    <div className="bord container">
      <h1> Who's That Pokémon? </h1>
      {currentPokemon ? (
        <Card
          name={currentPokemon.name}
          types={currentPokemon.types.map((typeObj) => typeObj.type.name)} // Map and render all types
          image={currentPokemon.sprites.front_default}
          gen={currentPokemonGen}
          onTypeBan={handleTypeBan}
          id={currentPokemon.id}
          baseStat={currentPokemon.stats[0].base_stat}
          stab={currentPokemon.moves[0].move.name}
        />
      ) : (
        <p>No Pokemon fetched yet.</p>
      )}
      <button onClick={fetchPokemon}> New Pokemon</button>
    </div>
  );
};

export default Info;
