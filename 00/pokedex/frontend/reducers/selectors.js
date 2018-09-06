export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  // return Object.values(state.entities.items[itemId]);
  return state.entities.items[itemId];
};

// export default selectAllPokemon;
