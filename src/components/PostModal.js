import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Input,
  MenuList,
} from "@material-ui/core";
import {
  Close,
  LinearScaleOutlined,
  LocalActivity,
  LocationCityRounded,
  LocationOn,
  Menu,
  People,
  PhotoAlbum,
  RecordVoiceOver,
  TagFaces,
} from "@material-ui/icons";
import styled from "styled-components";

function PostModal({ showPostModal, text, setText, image, setImage }) {
  const [showImageInput, setShowImageInput] = useState(false);

  function canPost() {
    if (text != "" || image != "") return true;
    return false;
  }
  return (
    <Container>
      <Modal>
        <ModalHeader>
          <h2>Create Post</h2>
          <IconButton
            onClick={() => showPostModal(false)}
            style={{ marginRight: "30px", backgroundColor: "#bfc3c7" }}
          >
            <Close style={{ fontSize: "20px" }} />
          </IconButton>
        </ModalHeader>
        <div
          style={{
            width: "100%",
            height: ".12px",
            opacity: "0.3",
            background: "black",
          }}
        ></div>
        <ModalContent>
          <CardActions>
            <Avatar />
            <h4>Faruq Ismael</h4>
          </CardActions>
          <ModalInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind? "
            aria-expanded="false"
          />
          <AdditionalCard>
            <div>
              {showImageInput ? (
                <ImageInput
                  placeholder="Image Url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  type="url"
                />
              ) : (
                <b>Add to Your Post</b>
              )}
            </div>
            <div>
              <IconButton onClick={() => setShowImageInput(!showImageInput)}>
                <PhotoAlbum style={{ color: "#45bd62" }} />
              </IconButton>
              <IconButton>
                <People style={{ color: "#1d7af2" }} />
              </IconButton>
              <IconButton>
                <TagFaces style={{ color: "#f8be38" }} />
              </IconButton>
              <IconButton>
                <LocationOn style={{ color: "#f5533d" }} />
              </IconButton>
              <IconButton>
                <RecordVoiceOver style={{ color: "#f5533d" }} />
              </IconButton>
              <IconButton>
                <Menu />
              </IconButton>
            </div>
          </AdditionalCard>
          <PostButton
            color={canPost() ? "white" : "#bfc3c7"}
            bgcolor={canPost() ? "#1877f2" : " #e4e6eb"}
          >
            Post
          </PostButton>
        </ModalContent>
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.61);
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled(Card)`
  width: 35%;
  position: relative;
  /* box shadow needed */
`;
const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;

  & h2 {
    width: 100%;
    text-align: center;
  }
`;
const ModalContent = styled.p`
  padding: 20px;
`;
const ModalInput = styled.textarea`
  padding-top: 20px;
  border: none !important;
  background: transparent;
  width: 100%;
  height: 100px;
  padding-left: 10px;
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;

  &:focus {
    outline-width: 0;
  }
`;

const AdditionalCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  border: 1px solid rgba(35, 20, 50, 0.003);
`;

const PostButton = styled.button`
  width: 100%;
  margin: 10px 0;
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  font-weight: 700;
  border-radius: 10px;
`;

const ImageInput = styled.input`
  border: none;
  background: none;
  padding: 5 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);

  &:focus {
    outline-width: 0;
  }
`;

export default PostModal;
