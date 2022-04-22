import React from "react";
import { Link } from 'react-router-dom';
function Main() {
  return (
    <>
    <p>해마 테스트</p>
    <button>
        <Link to="/story0">시작하기</Link>
    </button>
    </>
  );
}

export default Main;
