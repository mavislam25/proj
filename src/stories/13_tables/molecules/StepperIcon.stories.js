import { StepIcon } from "@material-ui/core";
import React from "react";

export default {
  title: "Tables/Molecules/StepperIcon",
  component: StepIcon,
};

export const Checked = () => <StepIcon icon={1} completed />;

export const Active = () => <StepIcon icon={1} active />;

export const Inactive = () => <StepIcon icon={3} />;
