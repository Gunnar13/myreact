//import logo from './logo.svg'; import { useState, useEffect, useMemo } from 'react';
//import React, {useState} from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import {Message} from './components/Messge.js'
import { useEffect, useRef, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { refType } from '@mui/utils';
const text = 'any  ttext';


/*
инлайновый стиль <div style={{paddingTop: '25px', border: '1px solid white'}}>
<header className="App-header"> --->>>  import './App.css';

*/
function App(props) {
      // const [count, setCount] = useState(0);
     /* const [chatList, setChatlist] = useState([
        {id: "chat1", name: messageList1},
        {id: "chat2", name: messageList2},
        {id: "chat3", name: messageList3}
      ]);*/
    //  const [messageList1, setMessageList1] = useState([]);
    //  const [messageList2, setMessageList2] = useState([]);
    //  const [messageList3, setMessageList3] = useState([]);
      const [messageList, setMessageList] = useState([]);
      const [value, setValue] = useState("");
      //const [users, setUsers] = useState([]);
      //const date = new Date();
      
      const inputRef = useRef(null);
      const sendMessage = ( author, text) => {
        const newMessageList = [...messageList];
        const now = new Date();
        const nowId = now.toLocaleTimeString();
        const newMessage = {
          nowId,
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

      useEffect(() => {
        inputRef.current?.focus()
      },[]);

      
              
    return (
      <div className="App">
        <header  className="App-header">
        
          <div style={{width: '50%', border: '1px solid white', backgroundColor: "wheat", color:"black",
               alignItems: "left"}}>
           {messageList.map((item, index)=>
           <div            style={{display:"flex", flexWrap:"wrap"}}
                           key={new Date()+index}
                           >

           <Typography variant="overline" display="block" gutterBottom>{item.nowId}---</Typography>
           <Typography variant="subtitle2" gutterBottom><b>{item.author} : </b></Typography>
           <Typography style={{maxWidth:"70%"}} variant="body1" gutterBottom> {item.text}</Typography> 
                
            
          </div>)}
          </div>
         
          <div>
            <form onSubmit={onSubmitMessage}>
              <Input 
                style={{width: '200px', border: '1px solid white', backgroundColor: "wheat", color:"black", alignItems: "left"}}
                id="outlined-basic" label="Outlined" variant="outlined"
                inputRef={Input => Input && Input.focus()}
                
                onChange={onChangeMessageInput} 
                value={value}
                type="text" 
              />
                         
              <Button variant="contained" endIcon={<SendIcon />} 
                      onClick={onSubmitMessage}>       
                    Send 
              </Button>
            </form>
          </div>
          <List >
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                  <ListItemText>Chat1</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                  <ListItemText>Chat2</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton>
                <ListItemIcon>
                  <SendIcon />
                  <ListItemText>Chat3</ListItemText>
                </ListItemIcon>
              </ListItemButton> 
            </ListItem>
          </List>


          My Third React App
        <h3>Hello, {props.name}</h3>
          <Message text={text}/>
        
      </header>
    </div>
  );
}

export default App;
