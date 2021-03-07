import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import Spinner from "react-bootstrap/Spinner";
import Navbar from "../components/Navbar";

const LOAD_POKEMON = gql`
  query LoadPokemon {
    pokemons {
      results {
        id
        name
        image
      }
    }
  }
`;

const PokemonList = () => {
  const { loading, error, data } = useQuery(LOAD_POKEMON);

  if (loading) 
  return <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>;
  if (error) return <h1>Error</h1>;

  return (
    <div>
      <Navbar title="Pokemon List"></Navbar>
      <div className="container mx-auto p-4 flex flex-col">
        {data.pokemons.results.map((pokemon, index) => (
          <Link to={`/pokemon/${pokemon.name}`} key={index}>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
