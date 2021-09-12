import { IconButton } from "@material-ui/core";
import styled from "styled-components";
import colors from "./colors";
import { breakPoint } from "./utils";

export const HeaderContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0.51px 10px rgba(0, 0, 0, 0.5);
  align-items: center;
`;

export const FaceBookLogo = styled.img`
  width: 40px;
`;

export const HeaderInput = styled.div`
  background-color: ${colors.gray};
  padding: 10px;
  border-radius: 33px;
  margin-left: 10px;
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  background: transparent;
  outline-width: 0;
  border: none;

  @media only screen and (${breakPoint.device.sm}) {
    display: none;
  }
`;

export const HeaderOption = styled.div`
  color: ${({ isActive }) => (isActive ? colors.blue : "gray")};
  padding: 0 20px;
  margin: 0 10px;
  border-bottom: ${({ isActive }) => isActive && "4px solid " + colors.blue};
  cursor: pointer;

  @media only screen and (${breakPoint.device.sm}) {
    display: none;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderCenter = styled.div`
  display: flex;
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (${breakPoint.device.xs}) {
    display: none;
  }
`;

export const Text = styled.h4`
  margin-left: 10px;
`;
export const HeaderRightOption = styled.div`
  display: flex;
  margin: 0 10px;
`;
export const CircleButton = styled.span`
  background: ${colors.gray};
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: black;
  font-size: 20px !important;
`;
