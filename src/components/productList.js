import React from'react';
import Product from './product';

export default class ProductList extends React.Component {
  render() {
    const data = [{
    author: 'daniel'
  }]
    return (
      <Product 
      author={data[0].author}
      />
    )
  }
}
