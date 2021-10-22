import { Button } from "@material-ui/core";
import React from "react";

export default {
  title: "Buttons/Atoms/CTAButton",
  component: Button,
};

export const Solid = () => <Button>Button</Button>;

export const SolidSecondary = () => <Button color="secondary">Button</Button>;

export const SolidDisabled = () => <Button disabled>Button</Button>;

export const Outlined = () => <Button variant="outlined">Button</Button>;

export const OutlinedSecondary = () => (
  <Button color="secondary" variant="outlined">
    Button
  </Button>
);

export const OutlinedDisabled = () => (
  <Button variant="outlined" disabled>
    Button
  </Button>
);
