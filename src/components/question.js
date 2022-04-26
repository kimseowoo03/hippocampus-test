import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { questionInformation } from '../imformation/questionInformation'
import {useNavigate} from 'react-router-dom'
import { createSearchParams } from "react-router-dom";
import styled from 'styled-components'

function Question() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [totalScore, setTotalScore] = useState({id: 'totalScore', score: 0});

    const navigate = useNavigate();
    const clickbutton = (sc) => {
        if(questionNumber + 1 !== questionInformation.length){
            const newScore = totalScore.score + sc ;
            setTotalScore((prevState)=> {
                return {...prevState, score: newScore}
            });
            setQuestionNumber(questionNumber+1);
        }else{ 
            const finalScore = totalScore.score
            navigate({
                pathname: '/result',
                search: `?${createSearchParams({ 
                    score: finalScore +1,
                })}`
            });
        }
    };
    return(
        <Wrapper>
        <NumberP> {questionInformation[questionNumber].questionNumber} / {questionInformation.length}</NumberP>
        <QuestionP>{questionInformation[questionNumber].question}</QuestionP>
            <Button onClick={() => clickbutton(1)}>{questionInformation[questionNumber].answer1}</Button>
            <Button onClick={() => clickbutton(0)}>{questionInformation[questionNumber].answer2}</Button>
        <Link to="/"><ResetButton>다시하기</ResetButton></Link>
        </Wrapper>
    );
}

export default Question;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'LeeSeoyun';
`

const NumberP = styled.p`
margin-top: 70px
`
const QuestionP = styled.p`
font-size: 22px;
margin-bottom: 40px;
text-align: center;
letter-spacing: 1px;
height: 50px;
`
const Button = styled.button`
width: 290px;
height: 65px;
border-radius: 20px;
border-color: black;
margin-top: 10px;
background-color: transparent;;
&:hover{  
  transition: background 0.2s ease-in;
  background-color: #91C285;
}
-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
font-family: 'LeeSeoyun';
font-size: 16px;
letter-spacing: 1px;
`

const ResetButton = styled.button`
width: 100px;
height: 35px;
border-color: black;
border-radius: 50px;
margin-top: 80px;
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
letter-spacing: 1px;
margin-bottom: 170px;
`