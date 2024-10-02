import React, { useState } from 'react';
import EditBox from './EditBox'; // EditBox 컴포넌트 가져오기
import TaskList from './TaskList'; // TaskList 컴포넌트 가져오기
import './App.css'; // 스타일 파일 가져오기
import CompleteList from './CompleteList';

function App() {
  const [tasks, setTasks] = useState([]); // 할 일 목록 상태
  const [completedTasks, setCompletedTasks] = useState([]); // 해낸 일 목록 상태

  const addTask = (task) => {
    console.log('Task added:', task); // 콘솔로 추가된 작업 출력
    setTasks([...tasks, task]); // 새로운 작업을 기존 작업 목록에 추가
  };

  const handleRegister = (task) => {
    setCompletedTasks([...completedTasks, task]);
    // task를 할 일 목록에서 제거
    setTasks(tasks.filter((t) => t !== task));
  };

  const handleDelete = (task) => {
    // task를 할 일 목록에서 제거
    setCompletedTasks(completedTasks.filter((t) => t !== task));
  };


  return (
    <div className="App">
      
      <h1>UMC Study Plan</h1>
      <EditBox onAddTask={addTask} /> {/* EditBox 컴포넌트에 함수 전달 */}
      <div className="lists">
        <TaskList tasks={tasks} onRegister={handleRegister} />
        <CompleteList completedTasks={completedTasks} onDelete={handleDelete} />
      </div>
    </div>
 );
}

export default App;