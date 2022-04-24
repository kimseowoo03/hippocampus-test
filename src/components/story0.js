import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Story0() {
  return (
    <Wrapper>
      <P>모든 사람들의 뇌 속에는 기억을 보관하는 기억 부서가 있다. 그리고 그곳에서 일을 하는 해마.
          해마들은 기억 부서에 보관된 기억을 관리하는 일을 하고 있다.
          그런데 기억들에 대한 정보가 하나 둘씩 사라지기 시작한다.
          무언가 문제가 생긴 것 같다고 판단한 해마는 자신이 담당하고 있는 주인에게 말을 거는데..</P>
      <Link to="/story1"><Button>다음</Button></Link>
    </Wrapper>
  );
}

export default Story0;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'LeeSeoyun';
`
const P = styled.p`
max-width: 300px;
margin-top: 220px;
text-align: center;
line-height: 1.3;
`
const Button = styled.button`
width: 80px;
height: 35px;
margin: 30px;
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