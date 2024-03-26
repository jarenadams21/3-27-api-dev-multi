import { Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './chakra/Navbar';
import MessageList from './components/MessageList';
import UserInput from './components/UserInput';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages when the component is mounted
    fetch('/messages')
      .then(response => response.json())
      .then(data => setMessages(data))
      .catch(error => console.error('Error fetching messages:', error));
  }, []);

  const onAddMessage = (messageText) => {
    // Post the new message to the server
    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: messageText })
    })
    .then(response => response.json())
    .then(newMessage => {
      // Update local state to include new message
      setMessages([...messages, newMessage]);
    })
    .catch(error => console.error('Error posting message:', error));
  };

  return (
    <div className="App" display="flex">
      <Nav/>
      <Heading>pchat</Heading>
      <MessageList messages={messages}/>
      <UserInput onAddMessage={onAddMessage}/>
    </div>
  );
}

export default App;