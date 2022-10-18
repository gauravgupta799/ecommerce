import React, {useState} from "react";
import styled from "styled-components";
import {mobile} from "../responsive";
import {useDispatch} from "react-redux";
import {signUp} from "../Redux/apiCalls";
import {useNavigate} from "react-router-dom";

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
   width:40%;
   background-color: white;
   padding:30px;
   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
   border-radius: 4px;
   ${mobile({width:"70%"})}
`;
const Title = styled.h1`
 font-size: 24px;
 font-weight: 400;
 text-align: center;
`;
const Form = styled.form`
 display: flex;
 flex-direction: column;
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
const Text =styled.div`
 text-align: right;
 width:100%;
 margin-top:20px;
`
const Span =styled.span`
  font-weight: 400;
 `
const Link = styled.a`
 font-weight: 600;
 cursor:pointer;
 text-decoration:none;
 color:teal;
`
const Register = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [userData, setUserData] = useState({
        username:"",
	    email:"", 
		password:"",
	})

	const handleChange = (e) => {
     const Name = e.target.name;
	 const Value = e.target.value;
	 setUserData({...userData, [Name]:Value});
	//  console.log(Name, Value);
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		const {username, email, password,} = userData;
		if(username === "" | email === "" || password === ""){
			alert("All fields are required")
		}else{
			signUp(dispatch, userData);
			navigate('/login');
		}
	}
   console.log("Userdata", userData);

	return (
		<Container>
			<Wrapper>
				<Title>CREAT AN ACCOUNT</Title>
				<Form>
					{/* <Input type='text'  name="fistname" placeholder='Firstname' onChange={handleChange} required/> */}
					{/* <Input type='text'  name="lastname" placeholder='Lastname' onChange={handleChange}  required/> */}
					<Input type='text'  name="username" placeholder='username' onChange={handleChange}  required/>
					<Input type='email' name="email"  placeholder='Email' onChange={handleChange}  required/>
					<Input type='password' name="password" placeholder='Password' onChange={handleChange}  required/>
					{/* <Input type='confirm-password' name="confirmPassword" placeholder='Confirm Password' onChange={handleChange}  required/> */}
					<Agreement>
						By creating an account, I consent to the processing of my personal
						information in accordance with the <b> PRIVACY POLICY</b>
					</Agreement>
					<Button onClick = {handleSubmit}>CREATE</Button>
					<Text>
						<Span>Have already an account?</Span>
						<Link href = "login"> Sign In</Link>
					</Text>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
