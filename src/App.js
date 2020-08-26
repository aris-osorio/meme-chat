import React from 'react';
import TitleChat from './components/titleChat'
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
  let direction

  return (
    <div className="App vh-100">
      <TitleChat />
      <MessageContainer>
        {chatReducer.messages.map((message) => {
          id++
          if(message.showOptions !=="DELETE")
          {
            if(message.showOptions===true){

              options = <MessageOptions  id = {id} show = {message.highlight}/>
            }
            else 
            {
              options = <OptionsButton id = {id}/>
            }
          }
          else
          {
            options =""
          }
          if(message.author==="USER_CHAT")
          {
            direction = "align-self-end"
          }
          else if(message.author==="AUTO_CHAT")
          {
            direction = "align-self-start"
          }
          return <MessageItem key={id} id={id} direction = {direction} content = {message.content} date = {message.date} showOptions={message.showOptions} options={options}/>
                         
        })}
      </MessageContainer>
      <MessageArea />
    </div>
  );
}

