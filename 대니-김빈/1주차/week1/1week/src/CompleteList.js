import React from 'react';
import './CompleteList.css'; // 스타일 파일을 추가할 수 있음

function CompleteList({ completedTasks,  onDelete}) {
  return (
    <div>
      <h3>해낸 일:</h3>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index} className="completed-task-item">
            {task}
            <button onClick={() => onDelete(task)} className="delete-button">
                삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CompleteList;