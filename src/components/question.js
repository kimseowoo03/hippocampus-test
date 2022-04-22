import React, {useState} from "react";
import { Link } from 'react-router-dom'
import { questionInformation } from '../imformation/questionInformation'
import {useNavigate} from 'react-router-dom'
import { createSearchParams } from "react-router-dom";

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
        <>
        <p> {questionInformation[questionNumber].questionNumber} / {questionInformation.length}</p>
        <p>{questionInformation[questionNumber].question}</p>
        <div>
            <button onClick={() => clickbutton(1)}>{questionInformation[questionNumber].answer1}</button>
            <button onClick={() => clickbutton(0)}>{questionInformation[questionNumber].answer2}</button>
        </div>
        <Link to="/">
        <button>다시하기</button>
        </Link>
        </>
    );
}

export default Question;