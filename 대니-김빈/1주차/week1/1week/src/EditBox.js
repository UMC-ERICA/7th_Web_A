import React, { useState } from 'react';
import './EditBox.css'; // 스타일 파일 가져오기

function EditBox({ onAddTask }) { // onAddTask prop이 전달되는지 확인
  const [text, setText] = useState(''); // 입력 필드의 상태

  const handleChange = (event) => {
    setText(event.target.value); // 입력 필드 업데이트
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && text.trim() !== '') { // Enter 키 확인
      onAddTask(text); // 부모 컴포넌트(App.js)로 텍스트 전달
      setText(''); // 입력 필드 초기화
    }
  };

  return (
    <div className="edit-box-container">
      <input
        type="text"
        className="edit-box"
        value={text}
        onChange={handleChange} // 입력 필드 업데이트
        onKeyDown={handleKeyDown} // Enter 키 확인
        placeholder="스터디 계획을 작성해보세요!"
      />
    </div>
  );
}

export default EditBox;
