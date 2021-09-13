import { ArrowForward } from "@material-ui/icons";
import React from "react";
import { StoryContainer } from "../assets/styles/Story.style";
import StoryCard from "./StoryCard";

function Story() {
  return (
    <div>
      <StoryContainer>
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/32.jpg"
          username=" Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/38.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/28.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/women/38.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/30.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/women/23.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/18.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/women/88.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/11.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/67.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/women/23.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/34.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/women/11.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/48.jpg"
          username="John Carpenter"
        />
        <StoryCard
          image="fbstory.jpg"
          profile="https://randomuser.me/api/portraits/men/38.jpg"
          username="John Carpenter"
        />
      </StoryContainer>
      <ArrowForward
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "50%",
          position: "relative",
          top: "-150px",
          right: "-97%",
          boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
        }}
      />
    </div>
  );
}

export default Story;
