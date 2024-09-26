import React, { useState } from 'react';
import EditBox from './EditBox'; // EditBox 컴포넌트 가져오기
import TaskList from './TaskList'; // TaskList 컴포넌트 가져오기
import './App.css'; // 스타일 파일 가져오기

function App() {
  const [tasks, setTasks] = useState([]); // 할 일 목록 상태

  const addTask = (task) => {
    console.log('Task added:', task); // 콘솔로 추가된 작업 출력
    setTasks([...tasks, task]); // 새로운 작업을 기존 작업 목록에 추가
  };

  const handleRegister = (task) => {
    alert(`${task}이(가) 등록되었습니다!`); // "등록" 버튼을 눌렀을 때 처리
  };

  return (
    <div className="App">
      <h1>UMC Study Plan</h1>
      <EditBox onAddTask={addTask} /> {/* EditBox에 addTask 함수 전달 */}
      <TaskList tasks={tasks} />
      
    </div>
  );
}

export default App;