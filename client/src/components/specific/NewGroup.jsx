import React, { useState } from 'react'
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material'
import { sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem';
import { useInputValidation } from '6pp';

const NewGroup = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const groupName = useInputValidation("");

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => (prev.includes(id) ? prev.filter((currElement) => currElement !== id) : [...prev, id]));
  };
  console.log(selectedMembers);

  const submitHandler = () => {

  };

  const closeHandler=()=>{

  };

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"1rem"}>
        <DialogTitle textAlign={"center"} variant='h5'>New Group</DialogTitle>

        <TextField label="Group Name" value={groupName.value} onClick={groupName.changeHandler} />
        <Typography variant='body1'>Members</Typography>
        <Stack>
          {
            members.map((user) => (
              <UserItem user={user} key={user._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)}/>
            ))
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button variant='text' color='error' size='large'>Cancel</Button>
          <Button variant='contained' color='primary' size="large" onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup