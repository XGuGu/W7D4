import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.selectPokemonItem()
  // }

  render(){
    // debugger
    return (
      <ul>
        <img src={this.props.item.image_url} />
        <li>name {this.props.item.name}</li>
        <li>happy {this.props.item.happiness}</li>
        <li>price {this.props.item.price}</li>
      </ul>
    );
  }
}

export default ItemDetail;
