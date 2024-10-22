import React, { useState } from 'react';
import './Home.css'; 

const Home = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="container">
      <h1>Word Counter</h1>
      <p>Free online character and word count tool.</p>

    
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Type or paste your text"
      ></textarea>

    
      <div className="button-container">
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>

   
      <div className="count-container">
        <button className="count-btn">Character: {charCount}</button>
        <button className="count-btn">Word: {wordCount}</button>
      </div>
    </div>
  );
};

export default Home;



