import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { resultInformation } from "../imformation/resultInformation";
import { useSearchParams } from "react-router-dom";

function Result() {
    const [resultData, setResultData] = useState({});

    const [serch] = useSearchParams();
    const resultScore = parseInt(serch.get('score'));

    useEffect(() => {
        if(resultScore === 14 || resultScore === 15 || resultScore === 16) {
            const findResult= resultInformation.find( (it) => it.id === '금쪽');
            setResultData(findResult);
        }else if(resultScore === 10 || resultScore === 11 || resultScore === 12 || resultScore === 13) {
            const findResult = resultInformation.find( (it) => it.id === '소중');
            setResultData(findResult);
        }else if(resultScore === 5 ||resultScore === 6 ||resultScore === 7 ||resultScore === 8 ||resultScore === 9) {
            const findResult = resultInformation.find( (it) => it.id === '돌봄');
            setResultData(findResult);
        }else{
            const findResult = resultInformation.find( (it) => it.id === '지킴');
            setResultData(findResult);
        }
    }, [resultScore]);

    return(
        <>
        <h1>나의 해마 유형은</h1>
        <p>'{resultData.type} '</p>
        <img src={resultData.img}></img>
        <p>{resultData.typeExplanation}</p>
        <h2>해마 진단서</h2>
        <p>{resultData.explanation}</p>
        {/*결과 공유란*/}
        <Link to="/"><button>다시하기</button></Link>
        </>
    );
}

export default Result;