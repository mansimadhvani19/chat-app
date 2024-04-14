import React from 'react'
import Header from "./Header"
import Title from '../shared/Title'
import { Grid, rgbToHex } from '@mui/material'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../../constants/sampleData'
import { useParams} from "react-router-dom"
import Profile from '../specific/Profile'

const AppLayout = () => WrappedComponent => {
    return (props) => {
        const params = useParams();
        const chatId = params.chatId;
        const handleDeleteChat = (e, _id, grouChat) =>{
            e.preventDefault();
            console.log("Delete Chat", _id, groupChat)
        }
        return (
            <>
                <Title />
                <Header />
                <Grid container height={"85vh"}>
                    <Grid item sm={4} md={3} sx={{
                        display: {
                            xs: "none", sm: "block"
                        }
                    }} height={"100%"}><ChatList chats={sampleChats} chatId={chatId} handleDeleteChat={handleDeleteChat}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}><WrappedComponent {...props} /></Grid>
                    <Grid item md={4} lg={3} sx={{
                        display: { xs: "none", md: "block" },
                        padding: "2rem",
                        bgcolor: "rgba(0,0,0,0.8)",
                    }} height={"100%"}><Profile/>
                    </Grid>

                </Grid>

                {/* <div>Footer</div> */}
            </>
        )
    }
}

export default AppLayout