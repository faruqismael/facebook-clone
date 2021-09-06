import React from "react";
import "./styles/tailwind.min.css";
import Header from "./components/Header.js";
import styled from "styled-components";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <BodyContainer>
        <SideBar />
        <div>
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk lfghjjdtfghjhv bhjdsf hduibdfjk
          lfghjjdtfghjhv bhjdsf hduibdfjk
        </div>
        <SideBar />
      </BodyContainer>
    </div>
  );
}

const BodyContainer = styled.div`
  background-color: #f0f2f5;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export default App;
