import React, { useEffect, useState } from "react";
import { LoginContainer, InputGroup } from "../assets/styles/Login.style";
import logo from "../assets/image/logo.png";
import googlelogo from "../assets/image/google.svg";
import { Button, IconButton, Input } from "@material-ui/core";
import UserContext from "../context/UserContext";
import { InputRounded } from "@material-ui/icons";

import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const context = React.useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        context.setUser(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <LoginContainer>
      <img width="80" src={logo} alt="facebook logo" />

      <InputGroup>
        <Input
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username or email"
        />
        <Input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <Button
          onClick={() =>
            password !== "" &&
            username !== "" &&
            context.setUser({
              displayName: username,
              email: "default@mail.me",
              photoURL:
                "https://lh3.googleusercontent.com/a-/AOh14GhhlVmg44a4ovjsJIHteEJ1akulfQ2STnovHrR7=s96-c",
            })
          }
          style={{ margin: "10px", background: "#1a78f4", color: "white" }}
        >
          <InputRounded /> Login
        </Button>
      </InputGroup>

      <IconButton
        style={{ borderRadius: 0, background: "gray", color: "white" }}
        onClick={signIn}
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
          alt="google logo"
        />
        Login With Google
      </IconButton>
    </LoginContainer>
  );
}

export default Login;
