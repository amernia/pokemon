const Reducer = (state, action) => {
  switch (action.type) {
    case "add_pokemon": {
      const exist = state.pokemons.some(
        (pokemon) => pokemon.nickname === action.payload.nickname
      );
      if (!exist) {
        const newState = {
          ...state,
          pokemons: [...state.pokemons, action.payload],
        };
        localStorage.setItem("my-pokemon", JSON.stringify(newState));
        return newState;
      } else {
        alert("Nickname exist");
        return state;
      }
    }
    case "remove_pokemon": {
      const newArr = state.pokemons.filter(
        (pokemon) => pokemon.nickname !== action.payload
      );
      const newState = {
        ...state,
        pokemons: newArr,
      };
      localStorage.setItem("my-pokemon", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default Reducer;
