import React from "react";
import styled from "styled-components";
import Post from "./Post";
import PostForm from "./PostForm";
import RememberPassword from "./RememberPassword";
import Story from "./Story";

function Body() {
  return (
    <BodyContainer>
      <Story />
      <RememberPassword />
      <PostForm />
      <Post
        image="bg-tests.jpg"
        username="Scott McTominay"
        timestamp="12min"
        msg="We’ve added relevant Linkedin posts in your existing feed below. You can react, comment, and share them as your Page, just like you would on your personal profile"
      />
      <Post
        image="finalyoutube.jpg"
        username="Faruq McTominay"
        timestamp="12min"
        msg="We’ve added relevant Linkedin posts in your existing feed below. You can react, comment, and share them as your Page, just like you would on your personal profile"
      />
      [ljadjf\ adf afjdsj\( afdjafd afmda df amkfadjsiah\ fa fafdjnadf afd
      [ljadjf\ adf afjdsj\( afdjafd afmda df amkfadjsiah\ fa fafdjnadf afd
      [ljadjf\ adf afjdsj\( afdjafd afmda df amkfadjsiah\ fa fafdjnadf afd
      [ljadjf\ adf afjdsj\( afdjafd afmda df amkfadjsiah\ fa fafdjnadf afd
      [ljadjf\ adf afjdsj\( afdjafd afmda df amkfadjsiah\ fa fafdjnadf afd
      [ljadjf\ adf afjdsj\( afdjafd afmda df amkfadjsiah\ fa fafdjnadf afd
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  min-width: 40%;
  padding: 0 50px;
  margin-right: 5%;
  margin-left: 5%;
`;

export default Body;
