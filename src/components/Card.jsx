/* eslint-disable react/prop-types */

const Card = (props) => {
  const { name, types, image, gen, onTypeBan, id, baseStat, stab } = props;

  return (
    <div className="bord card">
      <h1> {name} </h1>
      {types.map((type) => (
        <button key={type} onClick={() => onTypeBan(type)}>
          {" "}
          {type}{" "}
        </button>
      ))}
      <img src={image} alt="pokemon" />
      {gen && <p>Generation: {gen}</p>}
      <p>Pokémon #{id} </p>
      <p>Base Stat: {baseStat} </p>
      <p>Stab Move: {stab}</p>
    </div>
  );
};

export default Card;
