import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {storyInformation} from '../imformation/storyInformation'

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
    <>
    <p>{storyInformation[questionNumber].speaking}</p>
    <img src={storyInformation[questionNumber].img}></img>
    <div>
        <button onClick={() => buttonClick()}>{storyInformation[questionNumber].answer1}</button>
        <button onClick={() => buttonClick()}>{storyInformation[questionNumber].answer2}</button>
    </div>
    </>
  );
}

export default Story1;
