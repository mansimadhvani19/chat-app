import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react'
import {Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon} from "@mui/icons-material"
import moment from "moment"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 120,
          height: 120,
          objectFit: "contain",
          marginTop:"1rem",
          border: "5px, solid white"
        }}
      >
      </Avatar>
      <ProfileCard heading={"Bio"} text={"Hello. This is Mansi"}/>
      <ProfileCard heading={"Username"} text={"Mansi Madhvani"} Icon={<UserNameIcon/>}/>
      <ProfileCard heading={"Name"} text={"Mansi"} Icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joined"} text={moment('2024-04-01T18:30:00.000Z').fromNow()} Icon={<CalendarIcon/>}/>
    </Stack>
  )
};

const ProfileCard = ({text, Icon, heading}) => (
  <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} color={"white"} textAlign={"center"}>
    {Icon && Icon}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"grey"} variant="caption">{heading}</Typography>
    </Stack>
  </Stack>
)

export default Profile