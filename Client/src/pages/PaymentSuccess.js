import React from 'react'
import styled from "styled-components";

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
  align-items:center;
  justify-content:center;
  height:30vh;
  width:20vw;
  border-radius:2px;
  background-color:white;
  box-shadow:0px 0px 7px 2px rgba(0,0,0,0.3);
`
const Title = styled.h2`
 letter-spacing: 2px;
`
const PaymentSuccess = () => {
  return (
    <Container>
       <Wrapper>
        <Title>Payment Successful!</Title>
       </Wrapper>
    </Container>
  )
}

export default PaymentSuccess