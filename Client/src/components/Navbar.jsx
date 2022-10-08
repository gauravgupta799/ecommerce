import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {mobile} from "../responsive";


const Container = styled.div`
	height: 60px;
	${mobile({
		height:"50px",
	})}
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({
		padding:"10px 0px",
	})}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({
		display:"none",
	})}
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	border: 0.5px solid lightgrey;
	margin-left: 25px;
	${mobile({marginLeft:"10px"})}
`
const Input = styled.input`
	border: none;
	outline:none;
	padding: 10px;
	font-size: 14px;
	${mobile({
		width:"50px",
		padding:"8px"
	})}
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize:"22px"})}
`;
const Right = styled.div`
	flex: 1;
    display:flex;
    align-items: center;
    justify-content:flex-end;
	${mobile({justifyContent:"center",flex:"2"})}
`;
const MenuItem = styled.div`
	font-size: 16px;
    font-weight: 500;
    cursor:pointer;
    margin-left:25px;
	${mobile({ 
		fontSize:"14px",
		marginLeft:"7px"
		})}
`;
const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search"/>
						<SearchOutlined  style ={{color:"gray", fontSize:"16px"}}/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Ezaar</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<ShoppingCartOutlined />
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
