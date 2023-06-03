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
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";


function LoginIndex() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (username === "" || password === "") {
            setErrorMessage("Nhập thiếu thông tin! Vui lòng nhập lại!");
        } else {
            navigate('/home');
            localStorage.setItem('token', '123456');
        }
    };
    const handleClickShowPassword = () => {
        setShowPassword((showPassword) => !showPassword);
    };
    return (
        <div>
            <Grid
                container
                columns={12}
                sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
            >
                <form onSubmit={handleSubmit} >
                    <Box
                        sx={{
                            width: "auto",
                            height: 500,
                            backgroundColor: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
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
                            <button>Đăng nhập</button>
                        </Stack>
                    </Box>
                </form>
            </Grid>
        </div>
    )
}
export default LoginIndex