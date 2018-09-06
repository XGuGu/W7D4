import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// debugger
const pokemonIndexItem = ({ pokemon }) => {
  return <li>
          <Link to={`/pokemon/${pokemon.id}`}>
            {pokemon.name},
            <img src={pokemon.image_url} height="100" width="100"></img>
          </Link>
        </li>;
};


export default withRouter(pokemonIndexItem);
