import React from 'react'
import styled from "styled-components";
import { useLocation, Link} from "react-router-dom";
import success from "../assets/success.png"

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  min-height: 100vh;
  min-width:30vw;
  background-color:lightgray;
`
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  height:40vh;
  width:40vw;
  border-radius:2px;
  background-color:white;
  box-shadow:0px 0px 7px 2px rgba(0,0,0,0.3);
`
const Title = styled.h2`
 letter-spacing: 2px;
 font-weight: 500;
 color:teal;
`
const Image = styled.img`
 height:50px;
 width:50px;
 margin-bottom:10px;
`
const Button = styled.button`
  height:30px;
  min-width:8vw;
  margin-top: 20px;
  font-size:16px;
  font-weight: 500;
  letter-spacing:1px;
  border:transparent;
  background-color:transparent; 
  cursor:pointer;

  &:hover{
    color:teal;
  }
`
const PaymentSuccess = () => {
  const location = useLocation(state=> state.data)
  console.log( "Loaction",location)

  return (
    <Container>
       <Wrapper>
         <Image src= {success} alt="Success" />
         <Title>Payment Successful!</Title>
         <Link to = '/'>
           <Button>Bact to Home</Button>
         </Link>
       </Wrapper>
    </Container>
  )
}

export default PaymentSuccess