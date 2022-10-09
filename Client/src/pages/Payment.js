import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios"

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
const Button = styled.button`
   width:10rem;
   height:3rem;
   border:none;
   color:white;
   background-color:teal;
   font-size: 24px;
   font-weight: 600;
   border-radius:5px;
   letter-spacing:1.5px;
   border:2px solid teal;
   cursor:pointer;
   transition:all 0.2s ease-in-out;

   &:hover{
    background-color:white;
    color:teal;
   }

`

const KEY = "pk_test_51Lr4YwSG47IJRemkJjcSAbETw3A5gJVzFVsaPjXOX9zpldcjUz9FPeFjjGPPDbdiLU8W5KdN9jJWWblYyfYFwS0k00Lt3Dk8oD"
const imageUrl = "https://www.samma3a.com/pub/media/Magebay/Marketplace/images/l/o/logo_ebazaar.jpg";
const url = "http://localhost:8800/api/checkout/payment"

const Payment = () => {
    const [stripeToken ,setStripeToken] = useState(null);

    const makePyament = (token) => {
      setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
         try{
            const res = await axios.post(url, {
                tokenId:stripeToken.id,
                amount:2000,
            })
         console.log("Data", res.data)
         }catch(err){
            console.log({message:"Server error"});
         }
        };
       stripeToken && makeRequest();
    }, [stripeToken]);

    return (
        <Container>
        <Wrapper>
         <StripeCheckout
         name="E-Bazaar"
         image={imageUrl}
         billingAddress
         shippingAddress
         description="Your total is $20"
         amount={2000}
         token={makePyament}
         stripeKey = {KEY}

         >
          <Button>Pay</Button> 
         </StripeCheckout>
        </Wrapper>
        </Container>
    )
}

export default Payment
