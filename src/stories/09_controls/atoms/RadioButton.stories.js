import { Radio } from "@material-ui/core";
import React from "react";

export default {
  title: "Controls/Atoms/RadioButton",
  component: Radio,
};

export const Default = () => <Radio />;

export const Checked = () => <Radio checked />;

export const Unchecked = () => <Radio onChange={() => {}} />;

export const Disabled = () => <Radio disabled />;

export const DisabledAndChecked = () => <Radio disabled checked />;
