import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';



const mapStateToProps = (state, ownProps) => ({
  // debugger
  item: selectPokemonItem(state, ownProps.match.params.itemId)
  // return {singleItem: state.entities.items[ownProps.match.params.itemId]};
});

// const mapDispatchToProps = dispatch => ({
//   requestOnePokemon: (id) => dispatch(requestItems(id))
// });

export default connect(mapStateToProps)(ItemDetail);
