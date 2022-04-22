import React from "react";
import { Link } from 'react-router-dom';
function Story0() {
  return (
    <>
    <p>모든 사람들의 뇌 속에는 기억을 보관하는 기억 부서가 있다. 그리고 그곳에서 일을 하는 해마.
        해마들은 기억 부서에 보관된 기억을 관리하는 일을 하고 있다.
        그런데 기억들에 대한 정보가 하나 둘씩 사라지기 시작한다.
        무언가 문제가 생긴 것 같다고 판단한 해마는 자신이 담당하고 있는 주인에게 말을 거는데..</p>
    <Link to="/story1">시작하기</Link>
    </>
  );
}

export default Story0;
