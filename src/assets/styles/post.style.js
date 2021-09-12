import { Card } from "@material-ui/core";
import styled from "styled-components";

export const PostContainer = styled(Card)`
  margin-top: 10px;
  border-radius: 10px;
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  & p {
    color: black;
  }
`;
export const Profile = styled.div`
  margin-left: 10px;

  & h4 {
    font-weight: 600;
  }
`;

export const TimeStamp = styled.div`
  display: flex;
`;
export const PostImage = styled.img`
  width: 100%;
`;

export const Reaction = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.14);

  & * {
    color: gray;
    cursor: pointer;
  }
`;
