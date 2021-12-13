import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const Layout = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display:'flex',
             justifyContent:'center', marginBottom:'10px', backgroundColor:'wheat' }}>
      <nav aria-label="main mailbox folders">
        <List style={{display:'flex'}}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/home">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Home" style={{color:'grey'}}></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/profile">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" style={{color:'grey'}}></ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/chats">
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{color:'grey'}} primary="Chats" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText style={{color:'grey'}} primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      
    </Box>
  );
}

export { Layout };