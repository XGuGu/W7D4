import React from 'react';
// import pokemonItems from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    let poke = this.props.pokemon;
    // if (this.props.pokemon.length === 0) {
    //   poke = [{name: 'hello'}];
    // }
    return (
      <ul>
        {poke.map( (poke) => (<li key={poke.id}>{poke.name}
        <img src={poke.image_url} height="100" width="100"></img>
         </li>))}
      </ul>
    );
  }
}

export default PokemonIndex;
