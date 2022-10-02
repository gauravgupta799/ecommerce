import React from 'react';
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined,HeartOutlined} from "@ant-design/icons";

const Info = styled.div`
 opacity:0;
 width:100%;
 height:100%;
 position: absolute;
 top:0;
 left:0;
 display: flex;
 align-items: center;
 justify-content:center;
 z-index:3;
 border-radius:4px;
 background-color:rgba(0,0,0,0.2);
 transition: all 0.5s ease-out;
`
const Container = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  min-width:280px;
  height:350px;
  background-color:#f5fbfd;
  margin:5px;
  border-radius:4px;
  cursor:pointer;
  position:relative;

  &:hover ${Info}{
    opacity:1;
    transform:scale(1.02);

  }
`
const Circle = styled.div`
  width:200px;
  height:200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height:75%;
  z-index:2;
`
const Icon = styled.div`
  font-size:22px;
  margin:6px;
  cursor:pointer;
  height:40px;
  width:40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color:white;
  transition: all 0.5s ease;

  &:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);
  }
`
const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src = {item.img}/>
            <Info>
                <Icon><ShoppingCartOutlined/></Icon>
                <Icon><SearchOutlined/></Icon>
                <Icon><HeartOutlined/></Icon>
            </Info>
        </Container>
    )
}

export default Product
