import { Avatar } from "@material-ui/core";
import {
  Map,
  ThumbUp,
  ChatBubbleOutline,
  NearMe,
  Public,
} from "@material-ui/icons";
import React, { useContext } from "react";
import {
  PostContainer,
  PostImage,
  Profile,
  Section,
  TimeStamp,
  Reaction,
} from "../assets/styles/post.style";
import postimg from "../assets/image/bg-tests.jpg";

function Post({ profilePicture, username, image, timestamp, msg }) {
  function handleLikeClick(e) {
    if (e.target.style.color == "rgba(26, 120, 244, 0.82)") {
      e.target.style.color = "gray";
    } else {
      e.target.style.color = "rgba(26, 120, 244, 0.82)";
    }
  }
  return (
    <PostContainer>
      <Section>
        <Avatar />
        <Profile>
          <h4>{username}</h4>
          <TimeStamp>
            <small>{timestamp}</small>
            <Public fontSize="small" />
          </TimeStamp>
        </Profile>
      </Section>
      <Section>
        <p>{msg}</p>
      </Section>
      <PostImage src={postimg} />
      <Reaction>
        <ThumbUp onClick={(e) => handleLikeClick(e)} />
        <ChatBubbleOutline />
        <NearMe />
      </Reaction>
    </PostContainer>
  );
}

export default Post;
