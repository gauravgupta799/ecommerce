import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {popularProducts} from "../Data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    padding:20px;
    justify-content:space-between;
`

const Products = ({cate, filter, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
   
  useEffect(() => {
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cate ? `http://localhost:8800/api/products?category=${cate}`: `http://localhost:8800/api/products?`)
       setProducts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getProducts()
  }, [cate]);

  useEffect(() => {
    cate && setFilteredProducts(
      products.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value)))
    )
  }, [products, cate, filter]);

  useEffect(() => {
    if(sort === "newest"){
      setFilteredProducts((prev)=>
      [...prev].sort((a,b) => a.createdAt - b.createdAt));
    }else if(sort === "asc"){
      setFilteredProducts((prev)=> [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev)=>
      [...prev].sort((a,b) => b.price - a.price));
    }

  },[sort])

  return (
    <Container>
    { 
      cate ? filteredProducts.map((item) => <Product item={item} key={item.id}/>)
      : products.slice(0,8).map((item) => <Product item={item} key={item.id}/>)    
    }
    </Container>
  )
}

export default Products;