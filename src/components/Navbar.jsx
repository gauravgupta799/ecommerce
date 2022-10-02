import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Container = styled.div`
	height: 60px;
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;
const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	border: 0.5px solid lightgrey;
	margin-left: 25px;
	/* padding:0px 15px; */
	/* width:15vw; */
`;

const Input = styled.input`
	border: none;
	outline:none;
	padding: 10px 10px;
	font-size: 14px;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-weight: bold;
`;
const Right = styled.div`
	flex: 1;
    display:flex;
    align-items: center;
    justify-content:flex-end;
`;
const MenuItem = styled.div`
	font-size: 16px;
    font-weight: 500;
    cursor:pointer;
    margin-left:25px;
`;
const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<SearchOutlined  style ={{color:"gray", fontSize:"16px"}}/>
					</SearchContainer>
				</Left>
				<Center>
					<Logo>E-Bazaar</Logo>
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
