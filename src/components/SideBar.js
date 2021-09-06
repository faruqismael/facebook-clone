import { Avatar } from "@material-ui/core";
import React from "react";
import { Text } from "../styles/Header.style";
import {
  SideBarContainer,
  SideBarElement,
  SideBarElementText,
} from "../styles/SideBar.style";
import {
  Bookmark,
  ExpandMore,
  Flag,
  Group,
  OndemandVideo,
  OndemandVideoRounded,
  PeopleAltRounded,
  Restore,
  StoreRounded,
} from "@material-ui/icons";
import colors from "../styles/colors";
function SideBar() {
  return (
    <SideBarContainer>
      <SideBarElement>
        <Avatar />
        <SideBarElementText>Faruq Ismael</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Group style={{ color: colors.blue }} fontSize="large" />
        <SideBarElementText>Friends</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <PeopleAltRounded
          style={{
            color: "white",
            backgroundColor: colors.blue,
            borderRadius: "50%",
            padding: "10px",
          }}
          fontSize="large"
        />
        <SideBarElementText>Groups</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <StoreRounded style={{ color: colors.blue }} fontSize="large" />
        <SideBarElementText>Marketplace</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <OndemandVideo style={{ color: colors.blue }} fontSize="large" />
        <SideBarElementText>Videos</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Restore style={{ color: colors.blue }} fontSize="large" />
        <SideBarElementText>Memories</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Bookmark style={{ color: "#9a38cc" }} fontSize="large" />
        <SideBarElementText>Saved</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Flag style={{ color: "#e74f2a" }} fontSize="large" />
        <SideBarElementText>Pages</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <ExpandMore fontSize="large" />
        <SideBarElementText>See More</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Bookmark style={{ color: "#9a38cc" }} fontSize="large" />
        <SideBarElementText>Saved</SideBarElementText>
      </SideBarElement>
    </SideBarContainer>
  );
}

export default SideBar;
