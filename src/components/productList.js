import React from'react';
import Product from './product';
import data from '../seed';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data(),
      loading: true,
      vote: 0,
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({vote: prevState.vote + 1}))
  }
  

  render() {
    return (
      <Product 
      title={this.state.data[0].title}
      description={this.state.data[0].description}
      productUrl={this.state.data[0].url}
      vote={this.state.vote}
      avatar={this.state.data[0].submitterAvatarUrl}
      productImageUrl={this.state.data[0].productImageUrl}
      onClick={this.handleClick}
      />
    )
  }
}
