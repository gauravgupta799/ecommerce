import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {mobile} from "../responsive";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


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
const Span = styled.span`
  height:23px;
  width:23px;
  display:flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  top:0;
  margin-top: 2px;
  background-color:red;
  border-radius: 50%;
`
const H4 = styled.h4`
 font-size:18px;
 font-weight:600;
 color:white;
`
const Navbar = () => {
	const quantity = useSelector(state=>state.cart.quantity);
	const isLoggedIn = localStorage.getItem('accessToken');
	// console.log(quantity);
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
				{
					isLoggedIn ? 
					<>
					<NavLink to ="/register" style={{textDecoration:"none"}}>
				    <MenuItem>REGISTER</MenuItem>
					</NavLink>
					<NavLink to ="/login" style={{textDecoration:"none"}}>
						<MenuItem>SIGN IN</MenuItem>
					</NavLink>
					</>
					:
					<NavLink to ="/logout" style={{textDecoration:"none"}}>
						<MenuItem>Logout</MenuItem>
					</NavLink>
				}
				
					<NavLink to ="/cart" style={({ isActive }) => ({ 
                            color: isActive ? 'teal' : 'Black' })}>
						<MenuItem>
							<Span>
								<H4>{quantity}</H4>
							</Span>
							<ShoppingCartOutlined style={{fontSize:"28px"}}/>
						</MenuItem>
					</NavLink>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
