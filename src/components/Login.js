import React, { useState } from "react";
import { LoginContainer, InputGroup } from "../assets/styles/Login.style";
import logo from "../assets/image/logo.png";
import googlelogo from "../assets/image/google.svg";
import { Button, IconButton, Input } from "@material-ui/core";
import UserContext from "../context/UserContext";
import { InputRounded } from "@material-ui/icons";
import { auth, provider } from "../firebase.config";

function Login() {
  const context = React.useContext(UserContext);
  const [username, setUsername] = useState("hughu");
  const [password, setPassword] = useState("");

  function signIn() {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.message));
  }

  return (
    <LoginContainer>
      {console.log(context)}
      <img width="80" src={logo} />

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
            password != "" && username != "" && context.changeName(username)
          }
          style={{ margin: "10px", background: "#1a78f4", color: "white" }}
        >
          <InputRounded /> Login
        </Button>
      </InputGroup>
      {/* // onClick={() => context.changeName("Faruq Ismael")} */}

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
        />
        Login With Google
      </IconButton>
    </LoginContainer>
  );
}

export default Login;
