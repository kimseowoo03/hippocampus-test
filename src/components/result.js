import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { resultInformation } from "../imformation/resultInformation";
import { useSearchParams } from "react-router-dom";

function Result() {
    const [resultData, setResultData] = useState({});
    const [serch] = useSearchParams();
    const resultScore = serch.get('score');

    console.log(resultScore)

    useEffect(() => {
        const findResult = resultInformation.find( (it) => it.id === resultScore);
        console.log(findResult)
        setResultData(findResult)
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