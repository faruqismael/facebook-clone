import { Avatar } from "@material-ui/core";
import React from "react";
import {
  SideBarContainer,
  SideBarElement,
  SideBarElementText,
} from "../assets/styles/SideBar.style";
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
import colors from "../assets/styles/colors";
import styled from "styled-components";
import responsive, { breakPoint } from "../assets/styles/utils";

function RightSideBar() {
  return (
    <RightSide>
      <SideBarElement>
        <Avatar />
        <SideBarElementText>Faruq Ismael</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Group style={{ color: colors.blue }} />
        <SideBarElementText>Friends</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <PeopleAltRounded
          style={{
            color: "white",
            backgroundColor: colors.blue,
            borderRadius: "50%",
            padding: "2px",
          }}
        />
        <SideBarElementText>Groups</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <StoreRounded style={{ color: colors.blue }} />
        <SideBarElementText>Marketplace</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <OndemandVideo style={{ color: colors.blue }} />
        <SideBarElementText>Videos</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Restore style={{ color: colors.blue }} />
        <SideBarElementText>Memories</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Bookmark style={{ color: "#9a38cc" }} />
        <SideBarElementText>Saved</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <Flag style={{ color: "#e74f2a" }} />
        <SideBarElementText>Pages</SideBarElementText>
      </SideBarElement>
      <SideBarElement>
        <ExpandMore />
        <SideBarElementText>See More</SideBarElementText>
      </SideBarElement>
    </RightSide>
  );
}

const RightSide = styled.div`
  min-width: 20%;
  padding: 15px;

  @media only screen and (${breakPoint.device.sm}) {
    display: none;
  }
`;

// @media (${responsive.device.xs}) {
//   display: none;
export default RightSideBar;
