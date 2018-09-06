import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    // debugger
    if (!this.props.pokemon) {
      return null;
    }
    const pokemonIndexItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    // let poke = this.props.pokemon;
    // if (this.props.pokemon.length === 0) {
    //   poke = [{name: 'hello'}];
    // }
    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>
          {pokemonIndexItems}
        </ul>
      </section>
    );
  }
}
// {poke.map( (poke) => (<li key={poke.id}>{poke.name}
//   <img src={poke.image_url} height="100" width="100"></img>
// </li>))}

export default PokemonIndex;
