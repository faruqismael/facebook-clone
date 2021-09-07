import { ArrowForward, ArrowRight } from "@material-ui/icons";
import React from "react";
import {
  StoryContainer,
  Card,
  Profile,
  Photo,
  Username,
} from "../assets/styles/Story.style";
import StoryCard from "./StoryCard";

function Story() {
  return (
    <div>
      <StoryContainer>
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
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
