import React from 'react';
import styled from "styled-components";
import { SendOutlined} from "@ant-design/icons";
import {mobile} from "../responsive";

const Container = styled.div`
  height:50vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  background-color:#fcf5f5;
  line-height:1.4;
`
const Title = styled.h1`
  font-size:70px;
  letter-spacing: 1px;
  ${mobile({
    fontSize:"45px",
    textAlign:"center"
  })}
`
const Desc = styled.p`
 font-size:24px;
 font-weight: 300;
 margin-bottom:20px;
 letter-spacing: 1px;
 ${mobile({
    fontSize:"20px",
    textAlign:"center",
  })}
`
const InputContainer = styled.div`
  width:50%;
  height:40px;
  background-color: white;
  display:flex;
  justify-content: space-between;
  border-radius:4px;
  ${mobile({
    width:"85%",
    height:"35px"
  })}

`
const Input = styled.input`
  border:none;
  outline:none;
  flex:8;
  font-size:16px;
  font-weight:500;
  letter-spacing: 1px;
  padding-left:10px;
`
const Button = styled.button`
  flex:1;
  border:none;
  background-color:teal;
  color: white;
  cursor:pointer;
`
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input type = "email" placeholder = "abc@gmail.com"/>
        <Button>
        <SendOutlined />
        </Button>
      </InputContainer>

    </Container>
  )
}

export default Newsletter