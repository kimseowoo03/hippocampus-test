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
    <Img alt="질문 전 이미지" src={storyInformation[questionNumber].img}></Img>
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
height: 70px;
letter-spacing: 1px;
`

const Img = styled.img`
max-width: 360px;
width: 100%;
height: 100%;
margin-top: 20px;
margin-bottom: 20px;
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
background-color: #91C285;
&:hover{  
  transition: background 0.2s ease-in;
  background-color: #709A66;
}
font-family: 'LeeSeoyun';
font-weight: 700;
letter-spacing: 1.5px;
`