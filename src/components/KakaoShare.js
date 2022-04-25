import React, { useEffect } from "react";
import styled from 'styled-components'
import kakaoIcon from '../imgs/kakaoIcon.png';

const { Kakao } = window;

const KakaoShare = ({data}) => {
    const url = "https://hippocampus-test.netlify.app/"
    const resultUrl = window.location.href;

    useEffect(() => {
        Kakao.cleanup();
        Kakao.init('bed533cf962ff340c1987f3869347037');
    },[]);

    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: '나의 해마 테스트 결과는 ?',
              description: `나는 ${data.type}입니다.`,
              imageUrl: url + data.img,
              link: {
                mobileWebUrl: resultUrl,
                webUrl: resultUrl,
              },
            },
            buttons: [
              {
                title: '나도 테스트 하러가기',
                link: {
                  mobileWebUrl: url,
                  webUrl: url,
                },
              }
            ]
          });
    }
    return(
    <>
    <Button onClick={shareKakao}><Img src={kakaoIcon} alt="링크 복사 아이콘"/></Button>
    </>
    );
}

export default KakaoShare;

const Button = styled.button`
border: none;
-webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
padding: 0;
background-color: transparent;
margin-right: 35px;
`
const Img = styled.img`
width:45px;
`