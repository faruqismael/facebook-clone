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

function App() {
  const [loading, setLoading] = useState(true);
  let user = null;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
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
              <Body />
            )}
            <RightSideBar />
          </BodyContainer>
        </AppContainer>
      )}
    </>
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
