import { FormControlLabel, Radio } from "@material-ui/core";
import React from "react";

export default {
  title: "Controls/Molecules/RadioButtonWithLabel",
  component: FormControlLabel,
};

export const Default = () => (
  <FormControlLabel control={<Radio />} label="Text" />
);

export const DefaultChecked = () => (
  <FormControlLabel control={<Radio checked />} label="Text" />
);

export const DefaultDisabled = () => (
  <FormControlLabel control={<Radio disabled />} label="Text" />
);

export const DefaultCheckedDisabled = () => (
  <FormControlLabel control={<Radio checked disabled />} label="Text" />
);
