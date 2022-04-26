import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { resultInformation } from "../imformation/resultInformation";
import { useSearchParams } from "react-router-dom";
import styled from 'styled-components'
import KakaoShare from './KakaoShare';
import { CopyToClipboard } from "react-copy-to-clipboard";
import shareIcon from '../imgs/shareIcon.png';

function Result() {
    const [resultData, setResultData] = useState({});

    const [serch] = useSearchParams();
    const resultScore = parseInt(serch.get('score'));

    const navigate = useNavigate();
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
        }else if(resultScore === 1 || resultScore === 2 || resultScore === 3 || resultScore === 4){
            const findResult = resultInformation.find( (it) => it.id === '지킴');
            setResultData(findResult);
        }else{
            alert('입력하신 정보는 없습니다. 처음으로 돌아갑니다.');
            navigate('/');
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
        <ShareLine><ShareP>공유하기</ShareP></ShareLine>
        <div>
        <KakaoShare data={resultData} />
        <CopyToClipboard text='https://hippocampus-test.netlify.app/' onCopy={()=>alert("링크가 복사되었습니다!")}>
        <ShareButton><ShareImg src={shareIcon} alt="링크 복사 아이콘"/></ShareButton>
        </CopyToClipboard>
        </div>
        <LastP>카카오톡 공유는 내 결과가 공유돼요!<br />사이트 링크 공유는 오른쪽을 클릭해주세요!</LastP>
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
width: 270px;
background-color: #91C285;
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
letter-spacing: 2px;
`
const OneP = styled.p`
margin-top: 30px;
margin-bottom: 0;
font-size: 28px;
` 
const TwoLine = styled.div`
height: 5px;
width: 200px;
background-color: #91C285;
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
letter-spacing: 2px;
`
const TwoP = styled.p`
max-width: 280px;
text-align: center;
font-size: 24px;
margin-top: 30px;
line-height: 1.2;
`
const Button = styled.button`
width: 200px;
height: 50px;
margin-top: 20px;
margin-bottom: 25px;
border-color: black;
border-radius: 20px;
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
font-size: 18px;
letter-spacing: 1.5px;
`
const ThrLine = styled.div`
height: 5px;
width: 130px;
background-color: #91C285;
position: relative;
border-radius: 20px;
text-align: center;
margin-bottom: 30px;
`
const A = styled.a`
position: relative;
top: -5px;
text-decoration-line: none;
color: black;
font-weight: 700;
letter-spacing: 1px;
`
const ShareLine = styled.div`
height: 5px;
width: 180px;
background-color: #91C285;
position: relative;
border-radius: 20px;
text-align: center;
margin-top: 30px;
margin-bottom: 25px;
`
const ShareP = styled.p`
font-size: 30px;
position: relative;
top: -13px;
margin: 0;
letter-spacing: 3px;
`
const ShareButton = styled.button`
border: none;
-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
padding: 0;
background-color: transparent;
`
const ShareImg = styled.img`
width: 35px;
`
const LastP = styled.p`
font-size: 14px;
text-align: center;
color: gray;
`