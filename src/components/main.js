import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
function Main() {
  return (
    <Wrapper>
    <Div>
    <Line><P>해마 테스트</P></Line>
    <Pp>나의 해마 유형은 뭘까?</Pp>
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
padding-top: 260px;
`
const Line = styled.div`
height: 5px;
position: relative;
background-color: #91C285;
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
margin-top: 40px;
border-color: black;
border-radius: 20px;
background-color: #91C285;
&:hover{  
  transition: background 0.2s ease-in;
  background-color: #709A66;
}
-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: 'LeeSeoyun';
font-weight: 700;
`
const Pp = styled.p`
font-size: 14px;
text-align: center;
color: gray;
`