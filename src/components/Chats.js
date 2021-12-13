import { Switch } from "@mui/material";
import { BrowserRouter, Route } from "react-router-dom";
import ChatList from "./ChatList";
import { MessageList } from "./MessageList";
import { useState } from "react";
import { useParams } from "react-router-dom";
const initialChats = {
    id1: {
      name: "Chat1",
      //messages: [{ text: "FirstMessage", author: AUTHORS.BOT }],
    },
    id2: {
      name: "Chat2",
      //messages: [{ text: "FirstMessageHereToo!", author: AUTHORS.ME }],
    },
   };
   

const Chats = (props) => {
    const { chatId } = useParams();

 const [chats, setChats] = useState(initialChats);

    //
    return (
        /*
        <div>
         <ChatList
           chats={chats}
           chatId={chatId}
         />
       </div>*/
        <div style={{display:'flex', minHeight:'300px'}}>
            

        
        <div>
            <ChatList chat={{id:1, title:"Chat"}}></ChatList>
            <ChatList chat={{id:2, title:"Chat"}}/>
            <ChatList chat={{id:3, title:"Chat"}}/>
          </div>
          <MessageList></MessageList>
          <Switch>
            <Route path="/chats/id" ></Route>
            <Route path="/chats/2" ></Route>
            <Route path="/chats/3" ></Route>
            </Switch>
        </div>
        
    );
}

export { Chats };