import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState("");

  const [addText, setAddText] = useState("");

  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }

  return (
    <div className="App">
      <input value={text} onChange={(event) => setText(event.target.value)}/>
      <button onClick={onClickAddText}>追加</button>
      <br></br>
      <a className='addText'>{addText}</a>
    </div>
  );
}

export default App;
