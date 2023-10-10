/* eslint-disable react/prop-types */

const Ban = ({ bannedTypes, onTypeUnban }) => {
  return (
    <div className="container">
      <h1> Banned Types</h1>
      <ul>
        {bannedTypes.map((type, index) => (
          <li key={index}>
            <button onClick={() => onTypeUnban(type)}> {type} </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ban;
