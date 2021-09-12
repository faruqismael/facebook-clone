import React from "react";
import { LoginContainer } from "../assets/styles/Login.style";
import logo from "../assets/image/logo.png";
import googlelogo from "../assets/image/google.svg";
import { Button, IconButton } from "@material-ui/core";

function Login() {
  return (
    <LoginContainer>
      <img width="80" src={logo} />
      <IconButton
        style={{ borderRadius: 0, background: "gray", color: "white" }}
      >
        <img
          style={{
            background: "white",
            marginRight: "10px",
            borderRadius: "50%",
            padding: "5px",
          }}
          width="20"
          src={googlelogo}
        />
        Login With Google
      </IconButton>
    </LoginContainer>
  );
}

export default Login;
