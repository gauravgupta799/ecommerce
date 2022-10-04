import React from 'react'
import styled from "styled-components";
import {mobile} from "../responsive";

const Container = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;
`
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`
const Info = styled.div` 
  position:absolute;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:100%;
  height:100%;
`
const Title = styled.h1`
  color:white;
  letter-spacing:1px;
  margin-bottom: 20px;

`
const Button = styled.button`
  background-color:white;
  border:none;
  font-weight: 600;
  color:gray;
  border-radius: 4px;
  padding: 10px;
  letter-spacing: 1px;
  cursor:pointer;
  &:hover{
    color:black;
  }
`
const CategoryItem = ({item}) => {
    console.log("Item", item);
    const {img,title} = item;
  return (
    <Container>
      <Image src={img} alt={title}/>
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem