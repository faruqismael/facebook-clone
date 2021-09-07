import styled from "styled-components";
import colors from "./colors";

export const SideBarContainer = styled.div`
  min-width: 20%;
  padding: 15px;
`;

export const SideBarElement = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 18px 20px;
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
