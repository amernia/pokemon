import React from "react";
import PropTypes from "prop-types";

const PokemonCard = (props) => {
  const pokemon = props.pokemon;

  return (
    <div className="rounded-md my-2 p-4 shadow-md">
      <img src={pokemon.image} alt={pokemon.name} width="100%"></img>
      <h4 className="capitalize">{pokemon.name}</h4>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonCard;
