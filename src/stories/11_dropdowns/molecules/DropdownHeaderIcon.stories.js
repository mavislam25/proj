import DropdownHeaderIcon from "../../../components/DropdownHeaderIcon";
import { SaveIcon } from "../../../components/Icons/MainIcons";
import React from "react";

export default {
  title: "Dropdowns/Molecules/DropdownHeaderIcon",
  component: DropdownHeaderIcon,
};

export const Default = () => (
  <DropdownHeaderIcon
    label="Saved Comparisons"
    IconComponent={SaveIcon}
    onClick={() => {}}
  />
);
