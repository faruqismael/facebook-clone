import { Avatar } from "@material-ui/core";
import styled from "styled-components";
import colors from "./colors";

export const StoryContainer = styled.div`
  display: flex;
  padding: 20px 0 0 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Card = styled.div`
  position: relative;
  background: url("${({ image }) => image}");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 3px;
  min-width: 100px;
  height: 180px;
  border-radius: 10px;
  /* display: flex;
  justify-content: space-between;
  flex-direction: column; */

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s;
    cursor: pointer;
  }
`;

export const Profile = styled(Avatar)`
  /* transform: translate(20%, 20%); */
  margin: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid ${colors.blue};
`;

export const Username = styled.h4`
  position: absolute;
  text-align: center;
  color: white;
  font-size: 12px;
  bottom: 10px;
  width: 100%;
`;
