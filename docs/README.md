## 프로젝트 구조
다음은 프로젝트의 src 디렉토리 구조를 나타냅니다:

```bash
src
 ┣ components
 ┃ ┣ KakaoShare.js
 ┃ ┣ main.js
 ┃ ┣ question.js
 ┃ ┣ result.js
 ┃ ┣ story0.js
 ┃ ┗ story1.js
 ┣ imformation
 ┃ ┣ questionInformation.js
 ┃ ┣ resultInformation.js
 ┃ ┗ storyInformation.js
 ┣ imgs
 ┃ ┣ kakaoIcon.png
 ┃ ┣ last1.png
 ┃ ┣ last2.png
 ┃ ┣ last3.png
 ┃ ┣ last4.png
 ┃ ┣ shareIcon.png
 ┃ ┣ story1.png
 ┃ ┣ story2.png
 ┃ ┣ story3.png
 ┃ ┗ story4.png
 ┣ App.css
 ┣ App.js
 ┗ index.js
``` 

## 내부 흐름 요약 설명서
스토리 진행 후 질문 페이지가 나오는데 사실상 앞부분은 설명할 흐름이 없어 질문 페이지부터 설명이 되어있습니다.

### question.js
question.js 파일에서는 useState() 훅을 사용하여 질문 인덱스를 기본값으로 설정하고, 이 인덱스 값이 자동으로 업데이트되도록 하였습니다.

```javascript
const [questionNumber, setQuestionNumber] = useState(0);
```
버튼이 클릭되면 이벤트 핸들러가 실행되며, 이벤트 핸들러 내에서는 새로운 점수 값을 상태로 설정합니다. 또한 결과 값을 나중에 사용하기 위해 useState를 사용하여 score라는 변수를 유지합니다.

모든 질문에 응답한 후에는 useNavigate() 훅을 사용하여 점수 값을 쿼리 스트링으로 가지고 결과 페이지로 이동합니다.

질문응답이 다 끝난 후에는 useNavugate()를 사용하여 쿼리 스트링으로 값이 나타나게 하였습니다.
```javascript
const [totalScore, setTotalScore] = useState({id: 'totalScore', score: 0});
const navigate = useNavigate();

const clickbutton = (sc) => {
        if(questionNumber + 1 !== questionInformation.length){ // 질문 수에 맞을 때
            const newScore = totalScore.score + sc ;
            setTotalScore((prevState)=> {
                return {...prevState, score: newScore}
            });
            setQuestionNumber(questionNumber+1);
        }else{  // 질문 응답이 다 끝나면
            const finalScore = totalScore.score
            navigate({
                pathname: '/result',
                search: `?${createSearchParams({ 
                    score: finalScore +1, 
                })}`
            });
        }
    };
```
위 코드는 question.js 파일에서 사용된 내용을 설명한 것입니다.

### result.js
result.js 파일에서는 URL의 쿼리 스트링 값을 가져와야 하기 때문에 useSearchParams()를 사용하여 해당 값을 가져옵니다. 이 값을 가져오면 바로 실행되도록 useEffect()를 사용하고, 그 안에서 결과 값에 해당하는 정보를 찾아와야 합니다. 이를 위해 if 조건문을 활용합니다.
```javascript
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
    }, [resultScore])
```
위 코드는 result.js 파일에서 사용된 내용을 설명한 것입니다.