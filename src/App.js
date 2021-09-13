import React, { useEffect, useState } from "react";
// import "./styles/tailwind.min.css";
import Header from "./components/Header.js";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import { LinearProgress } from "@material-ui/core";
import Body from "./components/Body.js";
import RightSideBar from "./components/RightSideBar.js";
import Login from "./components/Login.js";

import UserContext from "./context/UserContext.js";
import PostContext from "./context/PostContext.js";
import postsList from "./context/posts.json";
import { auth } from "./firebase.config.js";

function App() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    displayName: sessionStorage.getItem("displayName"),
    photoURL: sessionStorage.getItem("photoURL"),
    email: sessionStorage.getItem("email"),
  });

  const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("isLogged"));
  const [posts, setPosts] = useState(postsList);

  const setUser = (user) => {
    setUserData(user);

    setLoggedIn(true);

    sessionStorage.setItem("isLogged", true);
    sessionStorage.setItem("displayName", user.displayName);
    sessionStorage.setItem("photoURL", user.photoURL);
    sessionStorage.setItem("email", user.email);
  };

  const logout = async () => {
    setLoggedIn(false);
    setUserData(null);

    sessionStorage.removeItem("isLogged");
    sessionStorage.removeItem("displayName");
    sessionStorage.removeItem("photoURL");
    sessionStorage.removeItem("email");

    await auth.signOut();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUser, logout }}>
      {!sessionStorage.getItem("isLogged") ? (
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
  scroll-behavior: smooth;
`;

const BodyContainer = styled.div`
  background-color: #f0f2f5;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default App;
