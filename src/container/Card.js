  import React from 'react'

  const Card = ({product}) => {
    console.log(product);
    const {id,title,price,image,category} =product;
    return (
      
      <div className='w-80 h-80  p-8 m-4'>
        <img  className='w-52 h-52' src={image} alt="title" />
        <div>
          <h2>{title}</h2>
          <p>{category}</p>
          <p>${price}</p>
        </div>
      </div>
    )
  }

  export default Card;