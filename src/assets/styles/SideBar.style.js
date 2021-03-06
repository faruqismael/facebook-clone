import styled from "styled-components";
import colors from "./colors";
import { breakPoint } from "./utils";

export const SideBarContainer = styled.div`
  min-width: 20%;
  padding: 15px;

  @media only screen and (${breakPoint.device.md}) {
    display: none;
  }
`;

export const SideBarElement = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px 10px;
  border-radius: 1rem;

  &:hover {
    background: ${colors.gray};
  }
`;

export const SideBarElementText = styled.p`
  /* font-weight: 600; */
  font-weight: 500;
  word-wrap: break-word;
  font-size: 1rem;
  padding-left: 10px;
`;
