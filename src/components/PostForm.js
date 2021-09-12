import { Avatar, Button, Card } from "@material-ui/core";
import {
  EmojiEmotionsOutlined,
  PhotoLibrary,
  VideoCall,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import PostModal from "./PostModal";

function PostForm() {
  const [showPostModal, setShowPostModal] = useState(false);

  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");

  return (
    <PostFormCard>
      {showPostModal && (
        <PostModal
          text={postText}
          setText={setPostText}
          image={postImage}
          setImage={setPostImage}
          showPostModal={setShowPostModal}
        />
      )}
      <TopPostCard style={{ padding: "10px", margin: "10px 0" }}>
        <Avatar />
        <div style={{ width: "100%" }} onClick={() => setShowPostModal(true)}>
          <PostInput
            disabled
            id="text"
            placeholder="What's on your mind, Faruq?"
          />
        </div>
      </TopPostCard>
      <div style={{ background: "gray", height: ".141px", opacity: "0.2" }} />
      <Buttons>
        <Button
          onClick={() => setShowPostModal(true)}
          style={{ textTransform: "capitalize" }}
        >
          <VideoCall fontSize="large" style={{ color: "#f02849" }} />{" "}
          <h4>Live Video</h4>
        </Button>
        <Button
          onClick={() => setShowPostModal(true)}
          style={{ textTransform: "capitalize" }}
        >
          <PhotoLibrary fontSize="large" style={{ color: "#45bd62" }} />{" "}
          <h4>Photo Library</h4>
        </Button>
        <Button
          onClick={() => setShowPostModal(true)}
          style={{ textTransform: "capitalize" }}
        >
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

export const TopPostCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PostInput = styled.input`
  background-color: #f0f2f5;
  border: none !important;
  border-bottom: none;
  border-radius: 33px;
  width: 100%;
  margin-left: 10px;
  padding: 13px;
  cursor: pointer;

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

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
`;
