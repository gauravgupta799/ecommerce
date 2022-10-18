import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import { useDispatch, useSelector} from "react-redux";
import {login } from "../Redux/apiCalls";
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
`
const Wrapper = styled.div`
   width:25%;
   background-color: white;
   padding:30px 30px 10px;
   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
   border-radius: 4px;
   ${mobile({width:"70%"})}
`
const Title = styled.h1`
 font-size: 30px;
 font-weight: 500;
 text-align: center;
`
const Form = styled.form`
 display: flex;
 flex-direction: column;
`
const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:10px 0px;
   padding:10px;
   outline: none;
   font-size:16px;
   letter-spacing: 1px;
`
const Button = styled.button`
 padding:10px;
 font-size:17px;
 letter-spacing:1px;
 font-weight:500;
 border:none;
 background-color:teal;
 color:white;
 border-radius: 2px;
 margin-top:20px;
 cursor:pointer;
 border:2px solid teal;
 transition:all 0.5s ease;
 &:hover{
    background-color:white;
    color:black;
 }
 &:disabled{
  color:green;
  cursor:not-allowed;
 }
`
const BottomContainer = styled.div`
 display:flex;
 justify-content: space-between;
 align-items: center;
 margin-top:30px;
 padding:8px 10px;
 width:100%;
`
const Span = styled.span`
  font-weight: 500;
  ${mobile({fontSize:"14px",
   lineHeight:"1.5"
  })}
`
const Link = styled.a`
  font-weight: 600;
  color:teal;
  cursor:pointer;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover{
    color: lightgreen;
  }
`
const Error = styled.span`
color:red;
text-align: center;
margin-top:10px;
letter-spacing: 1px;

`
const Login = () => {
  const [user, setUser] = useState({
    email:"",password:"",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isFetching, isError} = useSelector(state => state.user);

  const handleChange = (event) => {
    const Name = event.target.name;
    const Value = event.target.value;
    // console.log(Name, Value);
    setUser({...user , [Name]:Value})
  }

   const handleSumbit = (e) =>{
     e.preventDefault();
     const {email, password} = user;
     if(email !== "" || password !== ""){
      login(dispatch, user);
      navigate('/');
     }else{
      alert("All fields are required");
     }
   }
    return (
        <Container>
        <Wrapper>
				<Title>Sign In</Title>
				<Form>
					<Input type='email' name = "email" placeholder='Email' onChange = {handleChange}  required/>
					<Input type='password' name = "password" placeholder='Password' onChange = {handleChange}  required/>
					<Button onClick = {handleSumbit} disabled = {isFetching}>LOGIN</Button>
            { isError && <Error>Something went wrong...</Error> }
          <BottomContainer>
            <Span>New user? <Link>Sign Up</Link></Span>
            <Span>Forgot password? <Link>Click here.</Link></Span>
          </BottomContainer>
				</Form>
		  	</Wrapper>
            
        </Container>
    )
}

export default Login
