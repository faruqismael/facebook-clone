import React, { useContext } from "react";
import logo from "../assets/image/logo.png";
import {
  Search,
  Home,
  SubscriptionsOutlined,
  StorefrontOutlined,
  SupervisedUserCircle,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
  Flag,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import {
  HeaderContainer,
  HeaderLeft,
  FaceBookLogo,
  SearchInput,
  HeaderCenter,
  HeaderOption,
  HeaderRight,
  HeaderInfo,
  HeaderInput,
  Text,
  CircleButton,
  HeaderRightOption,
} from "../assets/styles/Header.style";
import UserContext from "../context/UserContext";

function Header() {
  const context = useContext(UserContext);
  return (
    <HeaderContainer>
      <HeaderLeft onClick>
        <FaceBookLogo src={logo} alt="logo" />
        <HeaderInput>
          <Search style={{ fontSize: "17px" }} />
          <SearchInput type="text" placeholder="Search Facebook" />
        </HeaderInput>
      </HeaderLeft>

      <HeaderCenter>
        <HeaderOption isActive className="header-option">
          <Home fontSize="large" />
        </HeaderOption>
        <HeaderOption className="header-option">
          <Flag fontSize="large" />
        </HeaderOption>
        <HeaderOption className="header-option">
          <SubscriptionsOutlined fontSize="large" />
        </HeaderOption>
        <HeaderOption className="header-option">
          <StorefrontOutlined fontSize="large" />
        </HeaderOption>
        <HeaderOption className="header-option">
          <SupervisedUserCircle fontSize="large" />
        </HeaderOption>
      </HeaderCenter>
      <HeaderRight>
        <HeaderInfo>
          {/* <Avatar src={context.userData.photoURL} /> */}
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhhlVmg44a4ovjsJIHteEJ1akulfQ2STnovHrR7=s96-c" />
          <Text>{context.userData.displayName}</Text>
        </HeaderInfo>
        <HeaderRightOption>
          <CircleButton className="focus:outline-none">
            <Add style={{ fontSize: "17px" }} />
          </CircleButton>
          <CircleButton className="focus:outline-none">
            <Forum style={{ fontSize: "17px" }} />
          </CircleButton>
          <CircleButton className="focus:outline-none">
            <NotificationsActive style={{ fontSize: "17px" }} />
          </CircleButton>
          <CircleButton className="focus:outline-none">
            <ExpandMore style={{ fontSize: "17px" }} />
          </CircleButton>
        </HeaderRightOption>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
