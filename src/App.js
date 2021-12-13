//import logo from './logo.svg'; import { useState, useEffect, useMemo } from 'react';
//import React, {useState} from 'react';
import { Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import {Message} from './components/Messge.js'
import { useEffect, useRef, useState } from 'react';
import { refType } from '@mui/utils';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile.js';
import { Notfound } from './components/Notfound';
import { Home } from './components/Home';
import { Chats } from './components/Chats';
const text = 'any  ttext';


/*
инлайновый стиль <div style={{paddingTop: '25px', border: '1px solid white'}}>
<header className="App-header"> --->>>  import './App.css';

*/
function App(props) {
    /* const [chatList, setChatlist] = useState([
        {id: "chat1", name: messageList1},
        {id: "chat2", name: messageList2},
        {id: "chat3", name: messageList3}
      ]);*/
    //  const [messageList1, setMessageList1] = useState([]);
    //  const [messageList2, setMessageList2] = useState([]);
    //  const [messageList3, setMessageList3] = useState([]);
      
      //const [users, setUsers] = useState([]);
      //const date = new Date();
      
      

      

    return (
      
      <div className="App">
        <header  className="App-header">
        <Layout>
          </Layout>  
        <Switch>
            <Route component={Profile} path="/profile" > <Profile /> </Route>
            <Route component={Chats} path="/chats" > <Chats /> </Route>
            <Route component={Home} path="/home"> <Home /></Route>
            <Route component={Home} path="/"> <Home /></Route>
            <Route component={Notfound} path="/" > <Notfound /> </Route>
        </Switch>
        

          My Third React App
        <h3>Hello, {props.name}</h3>
          <Message text={text}/>
          
      </header>
    </div>
    
  );
}

export default App;
