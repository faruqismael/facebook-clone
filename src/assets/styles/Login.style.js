import { Input } from "@material-ui/core";
import styled from "styled-components";

export const LoginContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const InputGroup = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled(Input)``;
