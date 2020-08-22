import React from 'react';
import MessageContainer from './components/messageContainer'
import MessageItem from './components/messageItem'
import MessageOptions from './components/messageOptions'
import MessageArea from './components/messageArea'
import Store from'./redux/store'
import './App.css';

export default function App() {
  const {chatReducer} = Store.getState();
  console.log(chatReducer)
  console.log(chatReducer.messages)
  let id = -1
  return (
    <div className="App">
      <MessageContainer>
        {chatReducer.messages.map((message) => {
          return <MessageItem key = {id++} content = {message.content} date = {message.date} showOptions={message.showOptions}>
                  <MessageOptions id = {id++}/>
                 </MessageItem>
        })}
      </MessageContainer>
      <MessageArea />
    </div>
  );
}

