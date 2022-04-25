import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { resultInformation } from "../imformation/resultInformation";
import { useSearchParams } from "react-router-dom";
import styled from 'styled-components'
import KakaoShare from './KakaoShare';

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
        <Wrapper>
         <Line>
        <H1>나의 해마 유형은</H1>
        </Line>
        <OneP>' {resultData.type} '</OneP>
        <Img alt="결과 사진" src={resultData.img}></Img>
        <P>{resultData.typeExplanation}</P>
        <TwoLine><H2>해마 진단서</H2></TwoLine>
        <TwoP>{resultData.explanation}</TwoP>
        <KakaoShare data={resultData} />
        <Link to="/"><Button>다시하기</Button></Link>
        <ThrLine><A href="https://www.instagram.com/kimse0w00">만든 사람 보러가기</A></ThrLine>
        </Wrapper>
    );
}

export default Result;
const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-family: 'LeeSeoyun';
`
const Img = styled.img`
max-width: 360px;
width: 100%;
height: 100%;
`

const P = styled.p`
max-width: 280px;
text-align: center;
font-size: 24px;
margin: 0;
line-height: 1.1;
`

const Line = styled.div`
height: 5px;
width: 250px;
background-color: #ACE987;
margin-top: 40px;
position: relative;
border-radius: 20px;
text-align: center;
`

const H1 = styled.p`
font-size: 36px;
position: relative;
top: -16px;
margin: 0;
`

const OneP = styled.p`
margin-top: 30px;
margin-bottom: 0;
font-size: 28px;
` 

const TwoLine = styled.div`
height: 5px;
width: 170px;
background-color: #ACE987;
position: relative;
border-radius: 20px;
text-align: center;
margin-top: 60px;
`

const H2 = styled.p`
font-size: 34px;
position: relative;
top: -13px;
margin: 0;
`

const TwoP = styled.p`
max-width: 280px;
text-align: center;
font-size: 24px;
margin-top: 30px;
line-height: 1.2;
`

const Button = styled.button`
width: 130px;
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

const ThrLine = styled.div`
height: 5px;
width: 130px;
background-color: #ACE987;
position: relative;
border-radius: 20px;
text-align: center;
`

const A = styled.a`
position: relative;
top: -5px;
text-decoration-line: none;
color: black;
`