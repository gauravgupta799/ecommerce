import styled from "styled-components";
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";

const p1 = "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
const p2 = "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
const Container = styled.div``
const Wrapper = styled.div`
 padding:20px;
`
const Title =styled.h1`
 text-align: center;
 font-weight:400;
 /* font-size:30px; */
`
const Top = styled.div`
 display:flex;
 justify-content: space-between;
 margin-top:20px;
`
const Button = styled.button`
  font-size:18px;
  font-weight:400;
  padding:10px;
  cursor:pointer;
  background-color: ${props=> props.type === "filled" ? "black" :"transparent"};
  color: ${props=> props.type === "filled" ? "white":""};
  border:${props=> props.type === "filled" && "none"};
`
const Texts = styled.div`
 display:flex;
 align-items:center;
 justify-content: space-between;
 padding:0px 20px;
 font-size: 18px;
 font-weight: 400;
 /* border:1px solid black; */
`
const Text = styled.span`
 margin-right:10px;
`
const Bottom = styled.div`
 /* background-color:lightblue; */
 display:flex;
 justify-content: space-between;
 margin-top:30px;
`
const InfoContainer = styled.div`
 flex:3;
`
const Product = styled.div`
 display:flex;
 justify-content: space-between;
 align-items: center;
 margin:10px 0px;
`
const ProductDetail = styled.div`
 display:flex;
 justify-content: space-between;
 line-height: 2.5em;
 /* flex:1; */
 /* width:50%; */
`
const Image = styled.img`
 height:200px;
 width:200px;
`
const Details = styled.div`
 padding:20px;
 font-size:1.2rem;
 /* border:1px solid black; */
`
const ProductName = styled.p`
 font-weight: 500;
`
const ProductId = styled.p``

const ProductColor = styled.div`
  height:30px;
  width:30px;
  border-radius:50%;
  background-color:${props=>props.color};
`
const ProductSize = styled.div``

const PriceDetail = styled.div`
  padding:50px;
  /* height:100px; */
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  /* border:1px solid #222; */
`
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
    margin-bottom:30px;
`;
const Count = styled.span`
	width:40px;
    height:30px;
    padding:5px;
    margin:0px 10px;
	border-radius: 5px;
	cursor: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size:20px;
	border: 1px solid lightgray;
    background-color: white;
`
const Price = styled.span`
  text-align:center;
  font-size:30px;
  font-weight:400;
  color:#222;
`
const HR = styled.hr`
  background-color:#eee;
  height:1px;
  border:none;
`
const SummaryContainer = styled.div`
 flex:2;
 border:1px solid gray;
`
const SummaryTitle = styled.h2``

const SummaryItem = styled.div``

const SummaryText = styled.span``

const Cart = () => {
    return (
        <Container>
          <Navbar/>
          <Announcement/>

           <Wrapper>
             <Title>YOUR BAG</Title>
             <Top>
                <Button>Continue Shopping</Button>
                <Texts>
                    <Text>Shopping Bag (10)</Text> 
                    <Text>Your Wishlist (10)</Text>
                </Texts>
                <Button type="filled">Checkout Now</Button>
             </Top>
             <Bottom>
               <InfoContainer>
                 <Product>
                    <ProductDetail>
                         <Image src = {p1} alt=""/>
                         <Details>
                            <ProductName><b>Product:</b> ADDIDAS BLACK SHOES </ProductName>
                            <ProductId><b>ID:</b> 74352934234</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b> 20</ProductSize>
                         </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <AmountContainer>
                                <MinusSquareOutlined
                                    style={{
                                        fontSize: "30px",
                                    }}
                                />
                                <Count>10</Count>
                                <PlusSquareOutlined 
                                    style={{
                                        fontSize: "30px",
                                    }}
                                />
                            </AmountContainer>
                            <Price>$ 50</Price>
                    </PriceDetail>
                 </Product>
                 <HR/>
                 <Product>
                    <ProductDetail>
                         <Image src = {p2} alt=""/>
                         <Details>
                            <ProductName><b>Product:</b> ADDIDAS BLACK SHOES </ProductName>
                            <ProductId><b>ID:</b> 74352934234</ProductId>
                            <ProductColor color="gray"/>
                            <ProductSize><b>Size:</b> M</ProductSize>
                         </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <AmountContainer>
                                <MinusSquareOutlined
                                    style={{
                                        fontSize: "30px",
                                    }}
                                />
                                <Count>10</Count>
                                <PlusSquareOutlined 
                                    style={{
                                        fontSize: "30px",
                                    }}
                                />
                            </AmountContainer>
                            <Price>$ 50</Price>
                    </PriceDetail>
                 </Product>
               </InfoContainer>
               <SummaryContainer>
                 <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryText>$ 80.00</SummaryText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated Shopping</SummaryText>
                        <SummaryText>$ 06.90</SummaryText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Shipping Discount</SummaryText>
                        <SummaryText>- $ 05.80</SummaryText>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Total</SummaryText>
                        <SummaryText>$ 80.00</SummaryText>
                    </SummaryItem>
               </SummaryContainer>
             </Bottom>
           </Wrapper>

          <Footer/>   
        </Container>
    )
}

export default Cart
