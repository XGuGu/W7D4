import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      // debugger
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }


  render() {
    debugger
    if (!this.props.singlePokemon) {
      return null;
    }
    const pokeItems = setInterval(() => {
      return this.props.singlePokemon.item_ids.map(item => <ItemDetailContainer key={item} />);
    }, 0);
    return (
      <div>
        <Route exact path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
        <h1>
          {this.props.singlePokemon.name}
        </h1>

        <img src={this.props.singlePokemon.image_url}></img>
        <ul>
          <li>Type: {this.props.singlePokemon.poke_type}</li>
          <li>Attack: {this.props.singlePokemon.attack}</li>
          <li>Defense: {this.props.singlePokemon.defense}</li>
          <li>Moves: {this.props.singlePokemon.moves}</li>
          {pokeItems}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
