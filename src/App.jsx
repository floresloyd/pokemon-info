/* eslint-disable no-unused-vars */
import "./css/App.css";
import Info from "./components/Info.jsx";
import Seen from "./components/Seen.jsx";
import Ban from "./components/Ban.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [encounteredPokemon, setEncounteredPokemon] = useState([]);
  const [encounteredGenerations, setEncounteredGenerations] = useState([]);
  const [bannedTypes, setBannedTypes] = useState([]);

  const handlePokemonEncounter = (pokemon, generation) => {
    setEncounteredPokemon((prevEncountered) => [...prevEncountered, pokemon]);
    setEncounteredGenerations((prevGenerations) => [
      ...prevGenerations,
      generation,
    ]);
  };

  const handleTypeBan = (type) => {
    // Add the banned type to the list
    setBannedTypes((prevBannedTypes) => [...prevBannedTypes, type]);
  };

  const handleTypeUnban = (type) => {
    // Remove the banned type from the state
    const updatedBannedTypes = bannedTypes.filter(
      (bannedType) => bannedType !== type
    );
    setBannedTypes(updatedBannedTypes);
  };

  return (
    <div className="bord container d-lg-flex align-items-center">
      <Seen
        encounteredPokemon={encounteredPokemon}
        encounteredGenerations={encounteredGenerations}
      />
      <Info
        onPokemonEncounter={handlePokemonEncounter}
        onTypeBan={handleTypeBan}
      />
      <Ban bannedTypes={bannedTypes} onTypeUnban={handleTypeUnban} />
    </div>
  );
}

export default App;
