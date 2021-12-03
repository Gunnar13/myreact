//import logo from './logo.svg'; import { useState, useEffect, useMemo } from 'react';
//import React, {useState} from 'react';

import './App.css';
import {Message} from './components/Messge.js'
import { useEffect, useState } from 'react';
const text = 'any  ttext';


/*
инлайновый стиль <div style={{paddingTop: '25px', border: '1px solid white'}}>
<header className="App-header"> --->>>  import './App.css';

*/
function App(props) {
       // const [count, setCount] = useState(0);
      const [messageList, setMessageList] = useState([]);
      const [value, setValue] = useState("");
      //const [users, setUsers] = useState([]);

      const sendMessage = (author, text) => {
        const newMessageList = [...messageList];
        const newMessage = {
          author,
          text
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
      };

      const onChangeMessageInput = (event) => {
        setValue(event.target.value)
      };

      const onSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage("user", value);
        resetForm();
      };

      const resetForm = () => {
        setValue("");
      };

      useEffect(() => {
        if (messageList.length === 0 ){return;}
        const tail = messageList[messageList.length - 1]
        if (tail.author === "bot") {
          return;
        }
        sendMessage("bot", "hello i am bot");
      }, [messageList]);

      /*
        const addUser = () => {
          setUsers([
            ...users,{
              name: `user_${users.length}`
              }
              ])
              };*/
              
    return (
      <div className="App">
        <header  className="App-header">
          <div style={{width: '350px', border: '1px solid white', backgroundColor: "wheat", color:"black"}}>
           {messageList.map((item, index)=><div>{item.author} :  {item.text}
          </div>)}
          </div>
          
          <div>
            <form onSubmit={onSubmitMessage}>
              <input
                onChange={onChangeMessageInput} 
                value={value}
                type="text" 
                
                />
              <button>
                submit
              </button>
            </form>
          </div>

          My Second React App
        <h3>Hello, {props.name}</h3>
          <Message text={text}/>
          <div style={{paddingTop: '25px', border: '1px solid white'}}>
                Inline Styles
          </div>
          <p>
               Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
          >
                  Learn React
          </a>
      </header>
    </div>
  );
}

export default App;
