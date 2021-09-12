import React, { useEffect, useState } from "react";
// import "./styles/tailwind.min.css";
import Header from "./components/Header.js";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Story from "./components/Story.js";
import { Card, CircularProgress, LinearProgress } from "@material-ui/core";
import RememberPassword from "./components/RememberPassword.js";
import PostForm from "./components/PostForm.js";
import Body from "./components/Body.js";
import RightSideBar from "./components/RightSideBar.js";
import Login from "./components/Login.js";

import UserContext from "./context/UserContext.js";
import PostContext from "./context/PostContext.js";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [posts, setPosts] = useState([
    {
      username: "Faruq Ismael",
      timestamp: "32min",
      msg: "Next time you log in on this browser, just click your profile picture instead of typing a password.",
    },
    {
      username: "Seid Ismael",
      timestamp: "2min",
      msg: "relevant Linkedin posts in your existing feed below. You can react, commejust click your profile picture instead of typing a password.",
    },
    {
      username: "Ismael Abdela",
      timestamp: "12hr",
      msg: "We’ve added relevant Linkedin posts in your existing feed below. You can react, comme",
    },
  ]);

  const changeName = () => {
    setUser("Ismael");
    localStorage.setItem("user", "Ismael");
  };

  const logout = () => {
    setUser(localStorage.removeItem("user"));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{ user, changeName, logout }}>
      {!user ? (
        <Login />
      ) : (
        <AppContainer>
          <Header />

          <BodyContainer>
            <SideBar />
            {loading ? (
              <LinearProgress
                style={{ margin: "10%", width: "100%", height: "10px" }}
              />
            ) : (
              <PostContext.Provider value={{ posts }}>
                <Body />
              </PostContext.Provider>
            )}
            <RightSideBar />
          </BodyContainer>
        </AppContainer>
      )}
    </UserContext.Provider>
  );
}

const AppContainer = styled.div`
  overflow-x: hidden;
`;

const BodyContainer = styled.div`
  background-color: #f0f2f5;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default App;
