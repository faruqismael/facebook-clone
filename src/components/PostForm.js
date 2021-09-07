import { Avatar, Button, Card } from "@material-ui/core";
import {
  EmojiEmotionsOutlined,
  PhotoLibrary,
  VideoCall,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { TopCard } from "../assets/styles/RememberPassword.style";

function PostForm() {
  return (
    <PostFormCard>
      <TopCard style={{ padding: "10px", margin: "10px 0" }}>
        <Avatar />
        <PostInput placeholder="What's on your mind, Faruq?" />
      </TopCard>
      <div style={{ background: "gray", height: ".141px", opacity: "0.2" }} />
      <Buttons>
        <Button style={{ textTransform: "capitalize" }}>
          <VideoCall fontSize="large" style={{ color: "#f02849" }} />{" "}
          <h4>Live Video</h4>
        </Button>
        <Button style={{ textTransform: "capitalize" }}>
          <PhotoLibrary fontSize="large" style={{ color: "#45bd62" }} />{" "}
          <h4>Photo Library</h4>
        </Button>
        <Button style={{ textTransform: "capitalize" }}>
          <EmojiEmotionsOutlined
            fontSize="large"
            style={{ color: "#f8be38" }}
          />{" "}
          <h4>Feeling/Activity</h4>
        </Button>
      </Buttons>
    </PostFormCard>
  );
}

export default PostForm;

export const PostFormCard = styled(Card)`
  border-radius: 10px !important;
`;
export const PostInput = styled.input`
  background-color: #f0f2f5;
  border: none !important;
  border-bottom: none;
  border-radius: 33px;
  width: 100%;
  margin-left: 10px;
  padding: 13px;

  &:focus {
    outline-width: 0;
  }
  &::placeholder {
    color: #534646;
  }
`;

export const PostButton = styled(Button)`
  & {
    color: #7e707b;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
`;
