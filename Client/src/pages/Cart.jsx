import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { mobile } from "../responsive";

const p1 =
	"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";
const p2 =
	"https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
	text-align: center;
	font-weight: 400;
  ${mobile({ fontSize:"22px"})}
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;
const Button = styled.button`
	font-size: 18px;
	font-weight: 400;
	padding: 10px;
  border-radius:5px;
	cursor: pointer;
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => (props.type === "filled" ? "white" : "")};
	border: ${(props) => props.type === "filled" && "none"};
  ${mobile({
    padding:"7px",
    fontSize:"16px"
    })}
`;
const Texts = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 20px;
	font-size: 18px;
	font-weight: 400;
  ${mobile({display:"none"})}
`;
const Text = styled.span`
	margin-right: 10px;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
  ${mobile({ 
    flexDirection:"column",
  })}
`;
const InfoContainer = styled.div`
	flex: 4;
`;
const Product = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0px;
  ${mobile({ 
    flexDirection:"column",
  })}
`;
const ProductDetail = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 2.5em;
  ${mobile({ 
    flexDirection:"column",
  })}
`;
const Image = styled.img`
	height: 200px;
	width: 200px;
  ${mobile({ 
   width:"300px"
  })}
`;
const Details = styled.div`
	padding: 20px;
	font-size: 1.2rem;
	/* border:1px solid black; */
`;
const ProductName = styled.p`
	font-weight: 500;
`;
const ProductId = styled.p``;

const ProductColor = styled.div`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;
const ProductSize = styled.div``;

const PriceDetail = styled.div`
	padding: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  ${mobile({ 
    // width:"88%",
    padding:"0px",
    marginBottom:"10px",
    flexDirection:"row",
    justifyContent: "space-between"
  })}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
  ${mobile({ 
    margin:"5px 15px"
  })}
`;
const Count = styled.span`
	width: 40px;
	height: 30px;
	padding: 5px;
	margin: 0px 10px;
	border-radius: 5px;
	cursor: none;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 20px;
	border: 1px solid lightgray;
	background-color: white;
`;
const Price = styled.span`
	text-align: center;
	font-size: 30px;
	font-weight: 400;
	color: #222;
`;
const HR = styled.hr`
	background-color: #eee;
	height: 1px;
	border: none;
`;
const SummaryContainer = styled.div`
	flex: 2;
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	padding: 20px;
	height: 50vh;
  ${mobile({margin:"15px 0px"})}
`;
const SummaryTitle = styled.h1`
	text-align: center;
	font-weight: 300;
`;
const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px 0px;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryText = styled.span`
	font-size: 20px;
	letter-spacing: 1px;
`;
const SummaryItemPrice = styled.span``;
const CheckoutButton = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #111;
	color: white;
	font-size: 20px;
	letter-spacing: 1px;
	border-radius: 5px;
	transition: all 0.5s ease;
	cursor: pointer;
	border: 2px solid black;

	&:hover {
		transform: scale(1.002);
		background-color: white;
		color: black;
	}
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<Button>Continue Shopping</Button>
					<Texts>
						<Text>Shopping Bag (10)</Text>
						<Text>Your Wishlist (10)</Text>
					</Texts>
					<Button type='filled'>Checkout Now</Button>
				</Top>
				<Bottom>
					<InfoContainer>
						<Product>
							<ProductDetail>
								<Image src={p1} alt='' />
								<Details>
									<ProductName>
										<b>Product:</b> ADDIDAS BLACK SHOES{" "}
									</ProductName>
									<ProductId>
										<b>ID:</b> 74352934234
									</ProductId>
									<ProductColor color='black' />
									<ProductSize>
										<b>Size:</b> 20
									</ProductSize>
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
						<HR />
						<Product>
							<ProductDetail>
								<Image src={p2} alt='' />
								<Details>
									<ProductName>
										<b>Product:</b> ADDIDAS BLACK SHOES{" "}
									</ProductName>
									<ProductId>
										<b>ID:</b> 74352934234
									</ProductId>
									<ProductColor color='gray' />
									<ProductSize>
										<b>Size:</b> M
									</ProductSize>
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
							<SummaryItemPrice>$ 80.00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryText>Estimated Shopping</SummaryText>
							<SummaryItemPrice>$ 06.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryText>Shipping Discount</SummaryText>
							<SummaryItemPrice>- $ 05.80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryText>Total</SummaryText>
							<SummaryItemPrice>$ 80.00</SummaryItemPrice>
						</SummaryItem>
						<CheckoutButton>Checkout Now</CheckoutButton>
					</SummaryContainer>
				</Bottom>
			</Wrapper>

			<Footer />
		</Container>
	);
};

export default Cart;
