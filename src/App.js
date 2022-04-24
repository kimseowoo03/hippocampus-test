import React from "react";
import Main from "./components/main";
import { Routes, Route} from 'react-router-dom';
import Story0 from "./components/story0";
import Story1 from "./components/story1";
import Result from "./components/result";
import Question from "./components/question";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/story0" element={<Story0 />} />
      <Route path="/story1" element={<Story1 />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />}/>
    </Routes>
    );
}

export default App;
