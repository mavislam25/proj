import { Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { CloseIcon } from "../../../components/Icons/MainIcons";
import WhiteIconButton from "../../../components/WhiteIconButton";
import { useState } from "react";
import React from "react";

export default {
  title: "PopupsAndOverlays/Molecules/Snackbar",
  component: Snackbar,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Click me</Button>
      <Snackbar open={isOpen} onClose={handleClose}>
        <Alert
          severity="success"
          elevation={3}
          action={
            <WhiteIconButton style={{ padding: 0 }} onClick={handleClose}>
              <CloseIcon style={{ fontSize: 14 }} />
            </WhiteIconButton>
          }
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export const Success = () => {
  return (
    <>
      <Snackbar open>
        <Alert
          severity="success"
          elevation={3}
          action={
            <WhiteIconButton style={{ padding: 0 }}>
              <CloseIcon style={{ fontSize: 14 }} />
            </WhiteIconButton>
          }
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export const Warning = () => (
  <Snackbar open>
    <Alert
      severity="warning"
      elevation={3}
      action={
        <WhiteIconButton style={{ padding: 0 }}>
          <CloseIcon style={{ fontSize: 14 }} />
        </WhiteIconButton>
      }
    >
      This is a warning message!
    </Alert>
  </Snackbar>
);

export const Info = () => (
  <Snackbar open>
    <Alert
      severity="info"
      elevation={3}
      action={
        <WhiteIconButton style={{ padding: 0 }}>
          <CloseIcon style={{ fontSize: 14 }} />
        </WhiteIconButton>
      }
    >
      This is an information message!
    </Alert>
  </Snackbar>
);

export const Error = () => (
  <Snackbar open>
    <Alert
      severity="error"
      elevation={3}
      action={
        <WhiteIconButton style={{ padding: 0 }}>
          <CloseIcon style={{ fontSize: 14 }} />
        </WhiteIconButton>
      }
    >
      This is an error message!
    </Alert>
  </Snackbar>
);
