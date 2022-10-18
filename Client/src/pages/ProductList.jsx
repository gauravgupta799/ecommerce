import React,{useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
// import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {mobile} from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div`
 display:flex;
 justify-content: space-between;
 flex-direction:column;

`
const Title = styled.h1`
  margin:20px;
  letter-spacing:1px;
  ${mobile({
    fontSize:"24px"
  })}
`
const FilterContainer  = styled.div`
  display:flex;
  justify-content:space-between;
 
`
const Filter = styled.div`
  margin:20px;
  ${mobile({
    margin:"px 10px",
    display:"flex",
    flexDirection:"column"
    })}
`
const FilterText = styled.span`
  font-size:20px;
  font-weight:600;
  letter-spacing:0.8px;
  ${mobile({
    fontSize:"16px"
  })}
`
const Select = styled.select`
  margin-left:15px;
  padding:5px 10px;
  font-size:16px;
  font-weight: 500;
  cursor:pointer;
  border-radius:4px;
  ${mobile({
    margin:"10px 0px 0px 0px",
    padding:"0px",
  })}
`
const Option = styled.option`
  padding:20px 0px;
`

const ProductList = () => {
  const location = useLocation();
  const cate = location.pathname.split('/')[2];
  // console.log(cate);

  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

    const handleFilter = (e) => {
      setFilter({...filter, [e.target.name]: e.target.value})
    }

    // console.log(filter);
    return (
        <Container>
          <Navbar/>
          {/* <Announcement/> */}
           <Title>{cate.toUpperCase()}</Title>
          <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name = "color" onChange={handleFilter}>
                    <Option disabled>Color</Option>
                    <Option>Black</Option>
                    <Option>White</Option>
                    <Option>Orange</Option>
                    <Option>Blue</Option>
                    <Option>Olive</Option>
                    <Option>Green</Option>
                </Select>
                <Select name = "size" onChange={handleFilter}>
                    <Option disabled >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={(e)=> setSort(e.target.value)}>
                    <Option value="newest" >Newest</Option>
                    <Option value="asc" >Price(Ascending)</Option>
                    <Option value="desc" >Price(Descending)</Option>
                </Select>
            </Filter>
          </FilterContainer>
          <Products cate = {cate} filter = { filter} sort = {sort}/>
          <Newsletter/>
          <Footer/>
            
        </Container>
    )
}

export default ProductList;
