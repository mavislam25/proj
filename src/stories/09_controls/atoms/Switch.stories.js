import React from "react";
import { Switch } from "@material-ui/core";

export default {
  title: "Controls/Atoms/Switch",
  component: Switch,
};

export const Unchecked = () => <Switch />;

export const Checked = () => <Switch checked />;

export const UncheckedDisabled = () => <Switch disabled />;

export const CheckedDisabled = () => <Switch checked disabled />;
