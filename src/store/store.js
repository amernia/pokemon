import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

const initialState = {
  pokemons: localStorage.getItem("my-pokemon")
    ? JSON.parse(localStorage.getItem("my-pokemon")).pokemons
    : [],
};

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
