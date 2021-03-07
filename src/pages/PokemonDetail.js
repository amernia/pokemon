import React, { useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { Context } from "../store/store";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      image: sprites{
        url: front_default
      }
      weight
      height
      abilities{
        ability{
          name
        }
      }
      moves{
        move{
          name
        }
      }
      types{
        type{
          name
        }
      }
    }
  }
`;


const PokemonDetail = () => {
  const [state, dispatch] = useContext(Context);
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name },
  });

  if (loading) 
  return <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>;
  else if (error) return <h1>Error</h1>;
  else {
    return (
      <>
        <Header title={"Detail " + data.pokemon.name} backButton={true} /> 
        <p>Weight : {data.pokemon.weight} lbs</p>
        <p>Height : {data.pokemon.height} inc</p>
        <ListGroup>
        <ListGroup.Item active> Abilities</ListGroup.Item>
        {data.pokemon.abilities.map((ability, index) => {
          const ablt = ability.ability;
          return <ListGroup.Item key={index}>{ablt.name}</ListGroup.Item >;
        })}
        </ListGroup>
        <br></br>
        <ListGroup>
        <ListGroup.Item active> Move</ListGroup.Item>
        {data.pokemon.moves.map((move, index) => {
          const mvs = move.move;
          return <ListGroup.Item key={index}>{mvs.name}</ListGroup.Item>;
        })}
        </ListGroup>
        <br></br>
        <ListGroup>
        <ListGroup.Item active> Type</ListGroup.Item>
        {data.pokemon.types.map((type, index) => {
          const typ = type.type;
          return <ListGroup.Item key={index}>{typ.name}</ListGroup.Item>;
        })}
        </ListGroup><br></br>
        <Button variant="info"
          onClick={() => {
            const prob = Math.round(Math.random());
            if (prob) {
              const nickname = prompt("Enter nickname", "");
              dispatch({
                type: "add_pokemon",
                payload: {
                  nickname,
                  pokemon: data.pokemon,
                },
              });
            } else {
              alert("You Lose Your Pokemon");
            }
          }}
        >
          Catch Pokemon
        </Button>{' '}
      </>
    );
  }
};

export default PokemonDetail;
