import React, { useContext } from "react";
import { Context } from "../store/store";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const MyPokemonList = () => {
  const [state, dispatch] = useContext(Context);
  console.log(state.pokemons);
  return (
    <>
      <Navbar title="My Pokemon List"></Navbar>
      {state.pokemons.map((pokemon, index) => {
        return (
          <div className="flex flex-row" key={index}>
            <Card className="position-static" style={{ width: '45%'}}>
              <Card.Img variant="top" src={pokemon.pokemon.image.url} alt="{pokemon.nickname}" width="100px" height="180px"/>
              <Card.Body>
                <Card.Title>{pokemon.nickname}</Card.Title>
                <Card.Text>Pokemon name {pokemon.pokemon.name}. 
                They have {pokemon.pokemon.weight} lbs and {pokemon.pokemon.height} inc. 
                One of their ability is {pokemon.pokemon.abilities[0].ability.name}.
                One of their move is {pokemon.pokemon.moves[0].move.name} and
                one of their type is {pokemon.pokemon.types[0].type.name}.</Card.Text>
                <Link to={`/pokemon/${pokemon.pokemon.name}`} key={index}>
                  <Button className="mr-2" variant="primary">Detail</Button>
                </Link>
                <Button className="mr-2" variant="danger"
                onClick={() =>
                  dispatch({ type: "remove_pokemon", payload: pokemon.nickname })
                }>Remove</Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default MyPokemonList;
