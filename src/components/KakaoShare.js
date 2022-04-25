import React, { useEffect } from "react";
const { Kakao } = window;

const KakaoShare = ({data}) => {
    const url = "https://hippocampus-test.netlify.app/"
    const resultUrl = window.location.href;

    console.log(data)
    useEffect(() => {
        Kakao.cleanup();
        Kakao.init('bed533cf962ff340c1987f3869347037');
    },[]);

    const shareKakao = () => {
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
              title: '해마 테스트 결과',
              description: `나는 ${data.type}입니다.`,
              imageUrl: url + data.img,
              link: {
                mobileWebUrl: resultUrl,
                webUrl: resultUrl,
              },
            },
            buttons: [
              {
                title: '테스트 하러가기',
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
    <button onClick={shareKakao}>바로가기</button>
    </>
    );
}

export default KakaoShare;