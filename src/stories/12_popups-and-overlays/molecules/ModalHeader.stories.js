import ModalHeader from "../../../components/ModalHeader";
import { Snackbar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";

export default {
  title: "PopupsAndOverlays/Molecules/ModalHeader",
  component: Snackbar,
};

export const Default = () => (
  <Box width={320}>
    <ModalHeader title="Title" onClose={() => {}} />
  </Box>
);
