import React from'react';
import Product from './product';
import data from '../seed';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    this.setState({products: data()})
  }
  handleClick = (id) => {
    const nextProducts = this.state.products.map((product) => {
      if (id === product.id) {
        return Object.assign({}, product, {votes: product.votes + 1 })
      } else {
        return product
      }
    })
    this.setState({products: nextProducts})
  }
 
  

  render() {
    const productData = this.state.products.slice();
    const products = productData.sort((a,b) => b.votes - a.votes)
    const productList = products.map((product) => (<Product 
      title={product.title}
      description={product.description}
      productUrl={product.url}
      vote={product.votes}
      avatar={product.submitterAvatarUrl}
      productImageUrl={product.productImageUrl}
      onClick={this.handleClick}
      key={product.id}
      id={product.id}
      />))
    return (
      <div>
        {productList}
      </div>
     )
  }
}
