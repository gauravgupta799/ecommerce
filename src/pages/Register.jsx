import React from "react";
import styled from "styled-components";
// import { } from "@ant-design/icons";

const Container = styled.div`
 width:100vw;
 height:100vh;
 background: linear-gradient(
    rgba(255, 255, 255,0.5),
    rgba(255, 255, 255,0.5)),
    url("https://public-assets.typeform.com/public/mega-menu/helpcenter.png");
 background-size:cover;
 background-repeat: no-repeat;
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`;
const Wrapper = styled.div`
   width:50%;
   background-color: white;
   padding:30px;
   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
   border-radius: 4px;
`;
const Title = styled.h1`
 font-size: 24px;
 font-weight: 400;
 text-align: center;
`;
const Form = styled.form`
 display: flex;
 flex-wrap: wrap;
`;
const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:20px 20px 0px 0px;
   padding:10px;
   outline: none;
   font-size:16px;
   letter-spacing: 1px;
`
const Agreement = styled.span`
 font-size:14px;
 margin:20px 0px;
`;
const Button = styled.button`
 padding:10px 20px;
 font-size:17px;
 letter-spacing:1px;
 font-weight:500;
 border:none;
 background-color:teal;
 color:white;
 border-radius: 2px;
 cursor:pointer;
 border:2px solid teal;
 transition:all 0.5s ease;
 &:hover{
    background-color:white;
    color:black;
 }
`

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREAT AN ACCOUNT</Title>
				<Form>
					<Input type='text' placeholder='Firstname' />
					<Input type='text' placeholder='Lastname' />
					<Input type='text' placeholder='username' />
					<Input type='email' placeholder='Email' />
					<Input type='password' placeholder='Password' />
					<Input type='confirm-password' placeholder='Confirm Password' />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						information in accordance with the <b> PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
