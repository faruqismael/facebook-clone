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
  background-color: red;
  margin: 0 3px;
  min-width: 145px;
  height: 230px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Profile = styled.div`
  transform: translate(20%, 20%);
  background-color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${colors.blue};
`;
export const Photo = styled.div``;
export const Username = styled.div`
  font-weight: 500;
  text-align: center;
  color: white;
  font-size: 1.1rem;
  transform: translateY(-50%);
`;
