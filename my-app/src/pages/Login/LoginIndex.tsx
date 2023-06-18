import React from 'react';
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AlertTitle from "@mui/material/AlertTitle";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import userApi from '../../api/userApi';
import { setUser } from '../../redux/userSlice';

function LoginIndex() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = {
        "username": username,
        "password": password
    }

    const handleSubmit = async (e: any) => {
        if (username === "" || password === "") {
            setErrorMessage("Nhập thiếu thông tin! Vui lòng nhập lại!");

        } else {
            e.preventDefault();
            const { response, error }: any = await userApi.signin(user);
            console.log(response);


            if (response) {
                dispatch(setUser(response));
                navigate("/home");
            } else {
                setErrorMessage("Tên đăng nhập hoặc mật khẩu sai!")
                console.log(error);
            }
        }
    };


    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };
    return (
        <div
            style={{
                backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/73334647-ad51-42a9-b07b-93298cc2a8e1/a13fedda-da19-4b61-8063-5f715391b742/VN-vi-20230605-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
                overflow: 'hidden',
                height: '100vh'
            }}
        >
            <h1 style={{ margin: 0, padding: 20, color: 'red', cursor: 'pointer' }} onClick={() => navigate('/home')}>MyNetFlix</h1>
            <Grid
                container
                columns={12}
                sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", position: "relative", top: 180 }}
            >
                <form onSubmit={handleSubmit} >
                    <Box
                        sx={{
                            width: "auto",
                            height: 400,
                            backgroundColor: "white",
                            borderRadius: 3,
                            overflow: "hidden",
                            boxShadow:
                                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
                        }}
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            width={350}
                            margin="0 30px"
                        >
                            <h1 style={{ marginBottom: 50 }}>Login</h1>
                            <FormControl
                                sx={{ m: 1, width: "100%", height: "50px" }}
                                variant="standard"
                            >
                                <Input
                                    id="standard-basic"
                                    onChange={(e) => setUsername(e.target.value)}
                                    error={errorMessage !== ""}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    }
                                    placeholder={"Tên đăng nhập"}
                                />
                            </FormControl>
                            <FormControl
                                sx={{ m: 1, width: "100%", height: "50px" }}
                                variant="standard"
                            >
                                <Input
                                    id="standard-adornment-password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={errorMessage !== ""}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    }
                                    placeholder={"Mật khẩu"}
                                />
                            </FormControl>
                            <div style={{ backgroundColor: "none", height: 20 }}>
                                {errorMessage && (
                                    <p style={{ color: "red", marginTop: 0 }}>{errorMessage}</p>
                                )}
                            </div>
                            <Button type='submit'>Login</Button>
                            <Stack
                                direction="row"
                            >
                                Don't have an account?
                                <Link to="/register">Register here</Link>
                            </Stack>
                        </Stack>
                    </Box>
                </form>
            </Grid>
        </div>
    )
}
export default LoginIndex