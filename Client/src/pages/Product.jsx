import React,{useState, useEffect} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import {mobile} from "../responsive";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import { publicRequest } from "../requestMethod";

const purl ="https://asset1.cxnmarksandspencer.com/is/image/mands/SD_03_T16_6466M_E2_X_EC_0?$Intl_PDP_Tab$";
const URL = "http://localhost:8800/api/products/find";
const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({padding:"10px",flexDirection:"column"})}
`;
const ImageContainer = styled.div`
	flex: 1;
	border-left:${(props) => props.color ? `1px dotted ${props.color}` : ""};
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({padding:"10px"})}
`;
const Image = styled.img`
	height: 90vh;
	width: 100%;
	object-fit: cover;
    border-radius: 5px;
	${mobile({height:"40vh"})}
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
	${mobile({fontSize:"30px"})}
`;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 55%;
	margin: 25px 0px;
	${mobile({width:"100%"})}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 300;
	${mobile({fontSize:"18px"})}
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
	${mobile({
		height:"25px",
		width:"25px",
	})}
`;
const Select = styled.select`
	margin-left: 10px;
	padding: 5px 7px;
	border-radius: 4px;
	font-weight: 500;
	font-size: 18px;
	${mobile({
		fontSize:"16px",
		padding:"5px"
		})}
`;
const Option = styled.option``;
const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 56%;
	margin: 50px 0px;
	${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 18vh;
	${mobile({})}
`;
const Count = styled.span`
	width:40px;
    /* height:30px; */
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
	${mobile({margin:"0px 7px",padding:"3px 8px"})}
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
	${mobile({
		fontSize:"16px",
		 padding:"7px",
		 letterSpacing: "0.3px"
		 })}
`;

const Product = () => {
	const location = useLocation();
	const itemId = location.pathname.split('/')[2];
	const [productItem, setProductItem] = useState({});
	const [quantity ,setQuantity] = useState(1);
	const [color ,setColor] = useState("");
	const [size, setSize] = useState("");

	useEffect(() => {
		const getProduct = async()=>{
			try{
				const res= await axios.get(`${URL}/${itemId}`);
				setProductItem(res.data);
			}catch(e){
				console.log(e);
			}
		}
        getProduct();
	},[itemId])

	const handleQuantity = (type)=>{
		if(type ==="decrease"){
			quantity > 1 && setQuantity(quantity - 1);
		}else{
		   setQuantity(quantity + 1);
		}
	}

	const handleAddCart = ()=>{

	}

    // console.log("ProductItem", productItem.color);

	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImageContainer color = {color}>
					<Image src={productItem?.img} alt='product' />
				</ImageContainer>
				<InfoContainer >
					<Title>{productItem?.title}</Title>
					<Desc>{productItem?.desc}</Desc>
					<Price>${productItem?.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterText>Color</FilterText>
							 {productItem?.color?.map((c)=>{
								return(
									<FilterColor color={c} key ={c} onClick = {()=> setColor(c)}/>
								)
							 })}
						</Filter>
						<Filter>
							<FilterText>Size</FilterText>
							<Select onChange = {(e)=> setSize(e.target.value)}>
								<Option disabled >size</Option>
								{productItem?.size?.map(s=>(
									<Option key ={s}>{s}</Option>
								))}
							
							</Select>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<MinusSquareOutlined
								style={{
									fontSize: "30px",
								}}
								onClick={()=> handleQuantity("decrease")}
							/>
							<Count>{quantity}</Count>
							<PlusSquareOutlined 
                                style={{
									fontSize: "30px",
								}}
								onClick={()=> handleQuantity("increase")}
                            />
						</AmountContainer>
						<Button onClick = {handleAddCart}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
