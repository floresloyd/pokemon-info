import "./css/App.css";
import Info from "./components/Info.jsx";
import Seen from "./components/Seen.jsx";
import Ban from "./components/Ban.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [encounteredPokemon, setEncounteredPokemon] = useState([]);

  const handlePokemonEncounter = (pokemon) => {
    // Add the encountered Pokémon to the list
    setEncounteredPokemon((prevEncountered) => [...prevEncountered, pokemon]);
  };
  return (
    <div className="bord container d-flex align-items-center">
      <Seen encounteredPokemon={encounteredPokemon} />
      <Info onPokemonEncounter={handlePokemonEncounter} />
      <Ban />
    </div>
  );
}
export default App;
