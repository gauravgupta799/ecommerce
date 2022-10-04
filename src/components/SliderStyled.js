import styled from "styled-components";
import {mobile} from "../responsive";

 export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
  overflow: hidden;
  ${mobile({display:"none"})}
`;
export const Arrow = styled.div`
	height: 50px;
	width: 50px;
	font-size: 14px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
    top:0;
    bottom:0;
    left:${(props) => props.direction === "left" && "10px"};
    right:${(props) => props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.7;
`;
export const Wrapper = styled.div`
  height:100%;
  display:flex;
  transition: all 0.8s ease-in-out;
  transform:translateX(${(props) => props.sIndex * -100}vw);
 `
 export const Slide = styled.div`
   display:flex;
   align-items:center;
   width:100vw;
   height:100vh;
   background-color:#${props=>props.bg};

 `
 export const ImageContainer = styled.div`
    flex:1;
    height:100%;
    
 `
 export const Image = styled.img`
   height:80%;
 `
 export const InfoContainer = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding:50px;
   /* background-color:teal; */
 `
export const Title = styled.h1`
  font-size:70px;
`
export const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:bold;
letter-spacing:3px;
`
export const Button = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
border-radius:4px;
font-weight:500;
`
