import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { style } from "@mui/system";
import { Route } from "react-router-dom";

const changeChat = (event) => {
    //alert(ListItemText.style.color);
    
    //ListItemIcon.style.color='white';
    event.target.style.color='red'; //{border:'1px solid red'});
    //event.target.style.border='1px solid red'; //{border:'1px solid red'});
}

const ChatList = (props) => {
    return (
        <List >
          <ListItem >
            <ListItemButton style={{border:'1px solid white'}} onClick={changeChat}>
              <ListItemIcon style={{color:'white'}}>
                <SendIcon />
                <ListItemText style={{color:'grey'}}>{props.chat.id}. {props.chat.title}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          
           
        </List>
    );
};

export default ChatList;