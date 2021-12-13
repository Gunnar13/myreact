import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from 'react';

const MessageList = () => {
    //
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState("");
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
        
          
        <div>
        <div style={{width: '100%', border: '1px solid white', backgroundColor: "wheat", color:"black",
             alignItems: "left"}}>
         {messageList.map((item, index)=>
                <div    style={{display:"flex", flexWrap:"wrap"}}
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
              style={{width: '300px',  border: '1px solid white', backgroundColor: "wheat", color:"black", alignItems: "left"}}
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
        </div> 
      

    );
}

export { MessageList };