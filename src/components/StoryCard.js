import React from "react";
import { Card, Profile, Username } from "../assets/styles/Story.style";

function StoryCard({ profile, image, username }) {
  return (
    <Card image={image}>
      <Profile src={profile} />
      {/* <Photo /> */}
      <Username>{username}</Username>
    </Card>
  );
}

export default StoryCard;
