import React, { useState, useEffect } from 'react'
import Product from './Product';

const Products = () => {
  const [product, setProduct] = useState([]);

  let productUrl = 'https://dummyjson.com/products';

  

  useEffect(() => {
    const productFetch = async () => {
    let res = await fetch(productUrl);
    let productData = await res.json();

    console.log(productData);
    setProduct(productData.products);
  };
    productFetch();
  }, [productUrl]);

  return (
    <div>
      <h1>Products</h1>
      {
        product.map((el) => <Product nameP={el.title} imageP={el.thumbnail}/>)
      }
    </div>
  )
}

export default Products