import React, { useEffect } from "react";
const { Kakao } = window;

const KakaoShare = () => {
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
              title: '해마 테스트 결과',
              description: '나는 해마의 금쪽이입니다.',
              imageUrl:
                'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
              link: {
                mobileWebUrl: 'https://developers.kakao.com',
                androidExecutionParams: 'test',
              },
            },
            buttons: [
              {
                title: '테스트 하러가기',
                link: {
                  mobileWebUrl: url,
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