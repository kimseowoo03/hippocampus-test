import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
function Main() {
  return (
    <Wrapper>
    <Div>
    <Line><P>해마 테스트</P></Line>
    </Div>
    <Link to="/story0"><Button>시작하기</Button></Link>
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'LeeSeoyun';
`
const Div = styled.div`
width: 180px;
padding-top: 300px;
`
const Line = styled.div`
height: 5px;
position: relative;
background-color: #ACE987;
border-radius: 20px;
text-align: center;
`
const P = styled.p`
position: relative;
font-size: 36px;
top: -17px;
margin: 0;
` 

const Button = styled.button`
width: 150px;
height: 35px;
margin-top: 80px;
border-color: black;
border-radius: 20px;
background-color: #ACE987;
&:hover{  
  transition: background 0.2s ease-in;
  background-color: #8AC666;
}
-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: 'LeeSeoyun';
font-weight: 700;
`