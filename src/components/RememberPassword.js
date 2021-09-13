import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { FaceBookLogo } from "../assets/styles/Header.style";
import logo from "../assets/image/logo.png";
import password from "../assets/image/password.png";
import { Close } from "@material-ui/icons";
import {
  CardButton,
  CardButtons,
  CardText,
  RememberPasswordCard,
  TopCard,
} from "../assets/styles/RememberPassword.style";

function RememberPassword() {
  const [open, setOpen] = useState(true);

  return (
    open && (
      <RememberPasswordCard>
        <TopCard>
          <FaceBookLogo src={logo} />
          <img src={password} width={100} alt="facebook logo" />
          <Button>
            <Close onClick={() => setOpen(false)} />
          </Button>
        </TopCard>
        <div>
          <h2>Remember Password</h2>
          <CardText>
            Next time you log in on this browser, just click your profile
            picture instead of typing a password.
          </CardText>
        </div>
        <CardButtons>
          <CardButton onClick={() => setOpen(false)} bg="#dbe7f2">
            OK
          </CardButton>
          <CardButton onClick={() => setOpen(false)} bg="#f0f2f5">
            Not Now
          </CardButton>
        </CardButtons>
      </RememberPasswordCard>
    )
  );
}

export default RememberPassword;
