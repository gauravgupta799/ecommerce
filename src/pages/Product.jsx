import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";

const purl =
	"https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T16_6466M_E2_X_EC_0?$Intl_PDP_Tab$";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;
const ImageContainer = styled.div`
	flex: 1;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;
const Image = styled.img`
	height: 90vh;
	width: 100%;
	object-fit: cover;
    border-radius: 5px;
`;
const Title = styled.h1`
	font-weight: 300;
`;
const Desc = styled.p`
	font-weight: 200;
	letter-spacing: 1px;
	margin: 20px 0px;
    line-height:1.3;
    text-align: justify;
`;
const Price = styled.span`
	font-size: 40px;
	font-weight: 150;
`;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 55vh;
	margin: 25px 0px;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 300;
`;
const FilterColor = styled.div`
	height: 30px;
	width: 30px;
	border-radius: 50%;
	margin-left: 5px;
	cursor: pointer;
	transition: all 0.99s ease-out;
	background-color: ${(props) => props.color};

	&:hover {
		transform: scale(1.05);
	}
`;
const Select = styled.select`
	margin-left: 10px;
	padding: 5px 7px;
	border-radius: 4px;
	font-weight: 500;
	font-size: 18px;
`;
const Option = styled.option``;
const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 56vh;
	margin: 50px 0px;
`
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 18vh;
`;
const Count = styled.span`
	width:40px;
    height:30px;
    padding:5px;
	border-radius: 5px;
	cursor: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size:20px;
	border: 1px solid lightgray;
    background-color: white;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 18px;
	font-weight: 500;
	border: none;
	border-radius: 5px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    transition: all 0.5s ease-out;
    letter-spacing: 1px;

    &:hover{
        background-color:teal;
        color:white;
        transform:scale(1.02);
    }
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImageContainer>
					<Image src={purl} alt='product' />
				</ImageContainer>
				<InfoContainer>
					<Title>Denim Jacket</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
						Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
						aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
						imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
						mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
						semper nisi. Aenean vulputate eleifend tellus.
					</Desc>
					<Price>$20.00</Price>
					<FilterContainer>
						<Filter>
							<FilterText>Color</FilterText>
							<FilterColor color='brown' />
							<FilterColor color='black' />
							<FilterColor color='green' />
							<FilterColor color='blue' />
						</Filter>
						<Filter>
							<FilterText>Size</FilterText>
							<Select>
								<Option disabled selected>
									size
								</Option>
								<Option>XS</Option>
								<Option>S</Option>
								<Option>M</Option>
								<Option>L</Option>
								<Option>XL</Option>
								<Option>XXL</Option>
							</Select>
						</Filter>
					</FilterContainer>
					<AddContainer>
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
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
