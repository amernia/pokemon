import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./pages/PokemonList";
import MyPokemonList from "./pages/MyPokemonList";
import PokemonDetail from "./pages/PokemonDetail";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

const App = () => {
  const client = new ApolloClient({
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <Store>
      <ApolloProvider client={client}>
        <Router>
            <Switch>
              <Route exact path="/">
                <PokemonList />
              </Route>
              <Route path="/my-pokemon">
                <MyPokemonList />
              </Route>
              <Route path="/pokemon/:name">
                <PokemonDetail />
              </Route>
            </Switch>
        </Router>
      </ApolloProvider>
    </Store>
  );
};

export default App;
