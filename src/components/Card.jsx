/* eslint-disable react/prop-types */
//import { useState } from "react";

const Card = (props) => {
  return (
    <div className="bord card">
      <h1> {props.name} </h1>
      <h1> {props.type} </h1>
      <img src={props.image} alt="pokemon" />
    </div>
  );
};

export default Card;
