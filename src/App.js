import React, { useState, useRef } from "react";

import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

/* 
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
 */

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
