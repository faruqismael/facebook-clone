import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
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
  Lock,
  OndemandVideo,
  OndemandVideoRounded,
  PeopleAltRounded,
  Restore,
  StoreRounded,
} from "@material-ui/icons";
import colors from "../assets/styles/colors";
import UserContext from "../context/UserContext";

function SideBar() {
  return (
    <UserContext.Consumer>
      {(value) => (
        <SideBarContainer>
          <SideBarElement onClick={value.changeName}>
            <Avatar />
            <SideBarElementText>{value.user}</SideBarElementText>
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
          <SideBarElement onClick={value.logout}>
            <Lock style={{ color: "#e74f2a" }} />
            <SideBarElementText>Logout</SideBarElementText>
          </SideBarElement>
          <SideBarElement>
            <ExpandMore />
            <SideBarElementText>See More</SideBarElementText>
          </SideBarElement>
        </SideBarContainer>
      )}
    </UserContext.Consumer>
  );
}

export default SideBar;
