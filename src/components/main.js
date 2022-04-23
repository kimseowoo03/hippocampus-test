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
`
const Div = styled.div`
width: 200px;
padding-top: 300px;
`
const Line = styled.div`
margin: 0 auto ;
height: 3px;
text-align: center;
position: relative;
background-color: #ACE987;

`
const P = styled.p`
font-size: 36px;
top: -25px;
left: 5px;
margin: 0;
position: absolute;
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
`