import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="centered-text with-border">UMC Study Plan</h1>
        <form>
          <input 
          type="text" 
          className="input-field" 
          placeholder="스터디 계획을 작성해보세요!" 
          value={inputValue} 
          onChange={handleChange} 
          />
        </form>
      <div className="task-container">
        <h2 className="task">해야 할 일</h2>
        <h2 className="achievement">해낸 일</h2>
      </div>
    </div>
  );
};

export default App;
