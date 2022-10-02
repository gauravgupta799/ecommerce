import React from 'react'
import styled from "styled-components";
import {
    FacebookFilled, InstagramFilled,TwitterCircleFilled,
    MailOutlined,PhoneOutlined,FileAddOutlined
} from "@ant-design/icons";

const Container = styled.div`
 height:200px;
 display: flex;
 align-items: center;
 justify-content:space-between;
 padding: 0px 20px;
 /* border:1px solid black; */
`
const Left = styled.div`
 flex:1;
 display:flex;
 flex-direction: column;
 padding: 10px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin:20px 0px;
`
const ScocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width:40px;
  height:40px;
  border-radius: 50%;
  color:white;
  background-color:#${props=>props.color};
  display:flex;
  align-items:center;
  justify-content:center;
  margin-right:20px;
  cursor:pointer;
  transition: all 0.5s ease;

  &:hover{
    transform:scale(1.1);
  }
`
const Center = styled.div`
  flex:1;
  padding:20px;
  margin-top:30px;
`
const Title = styled.h3`
 margin-bottom:30px;
`
const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap; 
`
const ListItem = styled.li`
  width:50%;
  margin-bottom:10px;
  font-weight:500;
  cursor:pointer;
  transition: all 0.5s ease-in-out;

  &:hover{
    transform:scale(1.02);
  }

`
const Right = styled.div`
 flex:1;
`
const ContactItem = styled.div`
 margin-bottom:15px`;

const Payment = styled.img``

const Footer = () => {
  return (
    <Container>
       <Left>
          <Logo>E-Bazaar</Logo>
          <Desc>
            There are many variations of passages of  lorem Ipsum availabe, button
            the majority have suffered alteration in some form, by injected into
            humor, or randomisedd words which dont't look even slighlty believeable.
          </Desc>
          <ScocialContainer>
            <SocialIcon color="3B5999"><FacebookFilled/></SocialIcon>
            <SocialIcon color="E4405F"><InstagramFilled /></SocialIcon>
            <SocialIcon color="55ACEE"><TwitterCircleFilled /></SocialIcon>
          </ScocialContainer>
       </Left>
       <Center>
        <Title margin= "30px">Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Women Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms & Conditions</ListItem>
        </List>
       </Center>
       <Right>
         <Title>Contact</Title>
         <ContactItem><FileAddOutlined style={{marginRight:"10px"}}/>234 Sarojini Raod, North East Delhi 232343 </ContactItem>
         <ContactItem><PhoneOutlined style={{marginRight:"10px"}}/>+1 912 833 233</ContactItem>
         <ContactItem><MailOutlined style={{marginRight:"10px"}}/>abc@gmail.com</ContactItem>
         <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
       </Right>
    </Container>
  )
}

export default Footer