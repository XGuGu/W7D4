import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_ONE_POKEMON:{
    // debugger
      const newState = Object.assign({}, state);
      newState[action.singlePokemon.id] = action.singlePokemon;
      return newState;
    }
    default:
      return state;
  }
};

export default pokemonReducer;
