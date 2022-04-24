import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {storyInformation} from '../imformation/storyInformation'
import styled from 'styled-components'

function Story1() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const navigate = useNavigate();

    const buttonClick = () => { 
        if(questionNumber +1 !==  storyInformation.length){
            setQuestionNumber(questionNumber+1)
        }else{
            // 질문으로 링크가 넘어가야 함
            navigate('/question')
        }
    }
  return (
    <Wrapper>
    <P>{storyInformation[questionNumber].speaking}</P>
    <Img src={storyInformation[questionNumber].img}></Img>
    <Button onClick={() => buttonClick()}>{storyInformation[questionNumber].answer1}</Button>
    <Button onClick={() => buttonClick()}>{storyInformation[questionNumber].answer2}</Button>
    </Wrapper>
  );
}

export default Story1;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'LeeSeoyun';
`
const P = styled.p`
max-width: 270px;
text-align: center;
font-size: 16px;
margin: 0;
padding-top: 50px;
line-height: 1.2;
`

const Img = styled.img`
max-width: 360px;
width: 100%;
height: 100%;
margin-top: 20px;
margin-bottom: 50px;
`
const Button = styled.button`
border-color: black;
-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
width: 220px;
height: 35px;
margin-top: 10px;
border-radius: 50px;
background-color: #ACE987;
&:hover{  
  transition: background 0.2s ease-in;
  background-color: #8AC666;
}
font-family: 'LeeSeoyun';
font-weight: 700;
`