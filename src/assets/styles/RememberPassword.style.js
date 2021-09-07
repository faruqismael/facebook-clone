import { Card } from "@material-ui/core";
import styled from "styled-components";

export const RememberPasswordCard = styled(Card)`
  padding: 20px;
  border-radius: 10px !important;
  margin: 0 0px 20px 0;
`;

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CardText = styled.p`
  font-weight: 400;
  font-size: 20px;
`;

export const CardButtons = styled.div`
  width: 100%;
  display: flex;
`;

export const CardButton = styled.button`
  outline-width: 0;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  color: #258ce9;
  width: 100%;
  background-color: ${({ bg }) => bg} !important;
  padding: 15px !important;
  margin: 10px 10px !important;
  border-radius: 10px;
`;
