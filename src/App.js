import React from 'react';
import MessageContainer from './components/messageContainer'
import MessageItem from './components/messageItem'
import MessageOptions from './components/messageOptions'
import OptionsButton from './components/optionsButton'
import MessageArea from './components/messageArea'
import Store from'./redux/store'
import './App.css';

export default function App() {
  const {chatReducer} = Store.getState();
  let id = -1
  let options
  return (
    <div className="App">
      <MessageContainer>
        {chatReducer.messages.map((message) => {
          id++
          if(message.showOptions===true){
            options = <MessageOptions  id = {id}/>
          }
          else
          {
            options = <OptionsButton id = {id}/>
          }
          return <div  key = {id}>
                  <MessageItem content = {message.content} date = {message.date} showOptions={message.showOptions}/>
                  {options}
                 </div>           
        })}
      </MessageContainer>
      <MessageArea />
    </div>
  );
}

