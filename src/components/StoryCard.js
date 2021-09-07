import React from "react";
import { Card, Photo, Profile, Username } from "../assets/styles/Story.style";

function StoryCard() {
  return (
    <Card>
      <Profile />
      <Photo />
      <Username>Mzee D James</Username>
    </Card>
  );
}

export default StoryCard;
