import React from 'react';

export default function Product(props) {
  return (
    <div className='product'>
      <div className='product-img'>
        <img className='product-img__img'src={props.productImageUrl} alt='product'></img>
      </div>
      <div className='product-info'>
        <div className='product-upvote'>
          <img onClick={() => props.onClick(props.id)} className='product-upvote__img'src={require('../assets/upvote.png')} alt='vote up'></img><span>{props.vote}</span>
        </div>
        <a href={props.productUrl}>{props.title}</a>
        <p>{props.description}</p>
        <div className='product-author'>
          <span>Submitted by:</span><img className='product-author__img'src={props.avatar} alt='author'></img>
        </div>
      </div>
    </div>
  )
}