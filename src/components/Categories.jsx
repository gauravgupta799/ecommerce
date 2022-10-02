import React from 'react'
import styled from "styled-components";
import { categories } from '../Data';
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display:flex;
  /* align-items:center; */
  justify-content:space-between;
  padding:20px;
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) =>{
                return(
                    <CategoryItem item={item} key={item.id}/>
                )
            })}   
        </Container>
    )
}

export default Categories
