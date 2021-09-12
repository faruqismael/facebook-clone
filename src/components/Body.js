import React, { useContext } from "react";
import styled from "styled-components";
import Post from "./Post";
import PostForm from "./PostForm";
import RememberPassword from "./RememberPassword";
import Story from "./Story";
import PostContext from "../context/PostContext";

function Body() {
  const postContext = useContext(PostContext);

  return (
    <BodyContainer>
      <Story />
      <RememberPassword />
      <PostForm />
      {postContext.posts.map((post) => (
        <Post
          image="bg-tests.jpg"
          username={post.username}
          timestamp={post.timestamp}
          msg={post.msg}
        />
      ))}
      <Post
        image="finalyoutube.jpg"
        username="Faruq McTominay"
        timestamp="12min"
        msg="We’ve added relevant Linkedin posts in your existing feed below. You can react, comment, and share them as your Page, just like you would on your personal profile"
      />
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
