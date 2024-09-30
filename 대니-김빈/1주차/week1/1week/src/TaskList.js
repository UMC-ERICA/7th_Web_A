import React from 'react';
import './TaskList.css'; // 스타일 파일을 추가할 수 있음

function TaskList({ tasks, onRegister }) {
  return (
    <div class = "task-box-container">
      <h3>해야할 일:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => onRegister(task)} className="register-button">
              등록
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;