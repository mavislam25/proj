// TODO: needs indeterminate state
import { Checkbox } from "@material-ui/core";
import React from "react";

export default {
  title: "Controls/Atoms/CheckboxWithLabel",
  component: Checkbox,
};

export const Default = () => <Checkbox />;

export const Checked = () => <Checkbox checked />;

export const Unchecked = () => <Checkbox onChange={() => {}} />;

export const Disabled = () => <Checkbox disabled />;

export const DisabledAndChecked = () => <Checkbox disabled checked />;

export const Partial = () => <Checkbox indeterminate />;
