import { useState } from 'react';

export default function UserInput({ onAddMessage }) {
    const [inputText, setInputText] = useState('');
  
    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };
  
    // Could use some sanitization...
    const handleFormSubmit = (e) => {
      e.preventDefault();
      if (inputText.trim()) {
        onAddMessage(inputText);
        setInputText('');
      }
    };
  
    return (
      <form onSubmit={handleFormSubmit} style={{
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "padding": 4,
      }}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          size="72"
        />
        <button type="submit" style={{
            "marginLeft": "4rem"
        }}>Send</button>
      </form>
    );
  }
  