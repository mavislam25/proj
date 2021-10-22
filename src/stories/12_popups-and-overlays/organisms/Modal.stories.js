import { TextField, Typography } from "@material-ui/core";
import Modal from "../../../components/Modal";
import Box from "@material-ui/core/Box";
import React from "react";

export default {
  title: "PopupsAndOverlays/Organisms/Modal",
  component: Modal,
};

export const Constructive = () => {
  return (
    <Modal
      open
      onClose={() => {}}
      title="Title"
      submitText="Submit"
      submitAction={() => {}}
      cancelText="Cancel"
      cancelAction={() => {}}
    >
      <Typography variant="body1">Are you sure you want to submit?</Typography>
    </Modal>
  );
};

export const Destructive = () => {
  return (
    <Modal
      open
      onClose={() => {}}
      title="Title"
      submitText="OK"
      submitAction={() => {}}
      cancelText="Cancel"
      cancelAction={() => {}}
      constructive={false}
    >
      <Typography variant="body1">Are you sure you want to delete?</Typography>
    </Modal>
  );
};

export const SubmitDisabled = () => {
  return (
    <Modal
      open
      onClose={() => {}}
      title="Title"
      submitText="Submit"
      submitAction={() => {}}
      submitDisabled
      cancelText="Cancel"
      cancelAction={() => {}}
    >
      <Typography variant="body1">Are you sure you want to submit?</Typography>
    </Modal>
  );
};

export const SingleButton = () => {
  return (
    <Modal
      open
      onClose={() => {}}
      title="Title"
      submitText="Confirm"
      submitAction={() => {}}
    >
      <Typography variant="body1">Click to confirm</Typography>
    </Modal>
  );
};

export const WithFields = () => {
  return (
    <Modal
      open
      onClose={() => {}}
      title="Title"
      submitText="Create"
      submitAction={() => {}}
      cancelText="Cancel"
      cancelAction={() => {}}
      maxWidth="sm"
      modalType="field"
    >
      <Box>
        <TextField placeholder="Enter Text" fullWidth label="Label" />
      </Box>
      <Box mt="22px">
        <TextField placeholder="Enter Text" fullWidth label="Label" />
      </Box>
    </Modal>
  );
};
