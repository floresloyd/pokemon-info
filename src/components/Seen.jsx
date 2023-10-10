/* eslint-disable react/prop-types */
import "../css/Seen.css";

const Seen = ({ encounteredPokemon }) => {
  const reversedPokemon = [...encounteredPokemon].reverse();

  return (
    <div className="container">
      <div className="bord">
        <h1> Encountered Pokémon! </h1>
        <ul className="pokemon-list">
          {reversedPokemon.map((pokemon, index) => (
            <li key={index} className="mb-3 border-dotted border-light">
              {pokemon.name}
              <img src={pokemon.sprites.front_default} alt="pokemon" />
              <div>
                {pokemon.types.length === 1
                  ? `${pokemon.name} is a ${pokemon.types[0].type.name} Pokémon`
                  : `${pokemon.name} is a ${pokemon.types[0].type.name} and ${pokemon.types[1].type.name} Pokémon`}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Seen;
