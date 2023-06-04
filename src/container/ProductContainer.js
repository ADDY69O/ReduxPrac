import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { SetProducts } from '../redux/actions/Product_Action';
import Card from './Card';

const ProductContainer = () => {

  const products = useSelector((state)=>state.allProduct.products);
  const dispath =useDispatch();
  const fetchProd = async()=>{
    const res=await axios.get("https://fakestoreapi.com/products").catch((e)=>console.log(e));
    dispath(SetProducts(res.data));
 
   
  }
console.log(products);
  useEffect(() => {
    fetchProd();
  }, [])
  

  return (
    <>
    
    
    <h1>ProductContainer</h1>
    
    

    <div className='flex flex-wrap w-full h-full'>
      {products.map((product)=>(
          <Card product={product}  />
      ))
    }
    </div>
    </>
  )
}

export default ProductContainer