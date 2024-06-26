import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, TextField, Typography, Stack } from "@mui/material"
import { CameraAlt as CameraAltIcon } from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from '../utils/validators';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => setIsLogin((prev) => !prev);

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword();
    const avatar = useFileHandler("single");

    const handleLogin = (e) =>{
        e.preventDefault();
    };

    const handleSignUp = (e) =>{
        e.preventDefault();
    };

    return (
        <div style={{
            backgroundImage: "linear-gradient(rgb(62 57 202 / 87%), rgb(191 97 222 / 59%))"
        }}>
    
    
    <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Paper
            elevation={3}
            sx={
                {
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }
            }
        >
            {isLogin ? (<>
                <Typography variant="h5">Login</Typography>
                <form style={{
                    padding: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onSubmit={handleLogin}
                >
                    <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                    <TextField required fullWidth label="passowrd" type="password" margin='normal' value={password.value} onChange={password.changeHandler} variant='outlined' />
                    <Button
                        sx={{
                            marginTop: "1rem",
                            backgroundColor: "blue"
                        }}
                        variant="contiained"
                        color="primary"
                        background-color="blue"
                        type="submit"
                        fullWidth
                    >Login </Button>
                    <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                    <Button
                        // sx = {{
                        //     marginTop:"1rem",
                        // }}
                        fullWidth
                        variant="text"
                        onClick={toggleLogin}
                    > Sign Up Instead?
                    </Button>


                </form>
            </>) : (<>
                <Typography variant="h5">Sign Up</Typography>
                <form 
                    style={{
                    // padding: 4,
                    // display: "flex",
                    // flexDirection: "column",
                    // alignItems: "center",
                    width: "100%",
                    marginTop: "1rem",
                    }}
                    onSubmit={handleSignUp}

                >


                    <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                        <Avatar sx={{
                            width: "10rem",
                            height: "10rem",
                            objectFit: "contain",

                        }}
                            src={avatar.preview} />

                        <IconButton
                            sx={{
                                position: "absolute",
                                bottom: "0",
                                right: "0",
                                color: "white",
                                bgcolor: "rgb(0,0,0,0.5)",
                                ":hover": {
                                    bgcolor: "rgb(0,0,0,0.7)",
                                }
                            }}
                            component="label"
                        >
                            <>
                                <CameraAltIcon />
                                <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />


                            </>
                        </IconButton>
                    </Stack>
                    {
                        avatar.error && (
                            <Typography color="error" variant='caption' m={"1rem"} width={"fit-content"} display={"block"}>
                                {avatar.error}
                            </Typography>
                        )
                    }

                    <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
                    <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                    {
                        username.error && (
                            <Typography color="error" variant='caption'>
                                {username.error}
                            </Typography>
                        )
                    }
                    <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler} />
                    <TextField required fullWidth label="passowrd" type="password" margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler} />

                    {
                        password.error && (
                            <Typography color="error" variant='caption'>
                                {password.error}
                            </Typography>
                        )
                    }
                    <Button
                        sx={{
                            marginTop: "1rem",
                            backgroundColor: "blue"
                        }}
                        variant="contiained"
                        color="primary"
                        background-color="blue"
                        type="submit"
                        fullWidth
                    >Sign Up </Button>
                    <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                    <Button
                        // sx = {{
                        //     marginTop:"1rem",
                        // }}
                        fullWidth
                        variant="text"
                        onClick={toggleLogin}
                    > Login Instead?
                    </Button>


                </form>
            </>)}

        </Paper>

    </Container>
    </div>
        // <div>Login</div>
    );

};

export default Login