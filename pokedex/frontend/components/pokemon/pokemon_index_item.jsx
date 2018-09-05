import React from 'react';


const pokemonItems = this.props.pokemon.map(poke => (<PokemonIndexItem key={poke.id} pokemon={poke} />));

export default pokemonItems;
