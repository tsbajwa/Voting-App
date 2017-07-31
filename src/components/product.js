import React from 'react';

export default function Product(props) {
  const productContainer = {
    display: 'flex',
  }
  return (
    <div style={productContainer}>
      <div>
        <img src={require('../assets/products/image-aqua.png')} alt='product'></img>
      </div>
      <div>
        <div>
          <img src={require('../assets/upvote.png')} alt='vote up'></img> 27
        </div>
        <a href='#'>Tinfoild: Tailored tinfoil Hats</a>
        <p>We already have your measurements and shipping address</p>
        <span>Submitted by:</span><img src={require('../assets/avatars/elliot.jpg')} alt='author'></img>
      </div>
    </div>
  )
}