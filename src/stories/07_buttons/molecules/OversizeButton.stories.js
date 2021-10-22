import React from "react";
import OversizeButton from "../../../components/OversizeButton";
import { BoxIcon } from "../../../components/Icons/MainIcons";

export default {
  title: "Buttons/Molecules/OversizeButton",
  component: OversizeButton,
};

export const Primary = () => (
  <OversizeButton Icon={BoxIcon}>
    I want to ship <br />a package
  </OversizeButton>
);

export const Secondary = () => (
  <OversizeButton Icon={BoxIcon} color="secondary">
    I want to ship <br />a package
  </OversizeButton>
);
