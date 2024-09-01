import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { InputBox } from '../components/styles/StyledComponents';
import FileMenu from '/src/components/dialogs/FileMenu.jsx';
import { sampleMessage } from '../constants/sampleData';
import MessageComponent  from '../components/shared/MessageComponent.jsx';

const user ={
  _id: "sdfsdfsdf",
  name: "Mansi",
}
const Chat = () => {
  const containerRef = useRef(null);
  return (
    <Fragment>
      <Stack 
        ref={containerRef} 
        boxSizing={"border-box"} 
        padding={"1rem"} 
        spacing={"1rem"} 
        bgcolor={"rgba(247,247,247,1)"} 
        height={"90%"} 
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}>

        {/* Messages will be rendered */}
        {
          sampleMessage.map((i)=>(
            <MessageComponent key={i._id} message={i} user={user} />
          ))
        }
      </Stack>
      <form style={{
        height: "10%",
      }}>
        <Stack direction={"row"} height={"100%"} width={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"}>
          <IconButton sx={{
            position:"relative",
            // left:"1.5rem",
            rotate:"30deg",
          }}
          // ref={fileMenuRef}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox width={"400px"} placeholder='Type your message...'/>
          <IconButton type='submit' sx={{
            rotate:"-30deg",
            backgroundColor: "#ea7070",
            color: "white",
            marginLeft: "1rem",
            padding: "0.5rem",
            "&:hover":{
              bgcolor: "error.dark", 
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenu />

    </Fragment>

  );
};

export default AppLayout()(Chat);