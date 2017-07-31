import React from 'react';

export default function Product(props) {
  return (
    <div className='product'>
      <div className='product-img'>
        <img className='product-img__img'src={require('../assets/products/image-aqua.png')} alt='product'></img>
      </div>
      <div className='product-info'>
        <div className='product-upvote'>
          <img className='product-upvote__img'src={require('../assets/upvote.png')} alt='vote up'></img> 27
        </div>
        <a href='#'>Tinfoild: Tailored tinfoil Hats</a>
        <p>We already have your measurements and shipping address</p>
        <div className='product-author'>
          <span>Submitted by:</span><img className='product-author__img'src={require('../assets/avatars/elliot.jpg')} alt='author'></img>
        </div>
      </div>
    </div>
  )
}