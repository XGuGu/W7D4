import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';


const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    singlePokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
  };
};

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
