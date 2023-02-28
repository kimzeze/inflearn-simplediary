import React, { useState, useRef } from "react";

import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김도현",
    content: "안녕1",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "제제김",
    content: "안녕2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "미노이",
    content: "안녕3",
    emotion: 4,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
