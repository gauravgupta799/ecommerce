import React from 'react'
import styled from "styled-components";
import { categories } from '../Data';
import CategoryItem from "./CategoryItem";
import {mobile} from "../responsive";

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  ${mobile({
    flexDirection:"column",
    padding:"0px",
  })}
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
