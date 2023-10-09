/* eslint-disable react/prop-types */

const Seen = ({ encounteredPokemon }) => {
  return (
    <div className="bord container">
      <h1> Encountered Pokemon! </h1>
      <ul>
        {encounteredPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Seen;
