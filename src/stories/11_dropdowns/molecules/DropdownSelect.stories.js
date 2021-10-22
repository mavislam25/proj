import DropdownItem from "../../../components/DropdownItem";
import DropdownSelect from "../../../components/DropdownSelect";
import React from "react";

export default {
  title: "Dropdowns/Molecules/DropdownSelect",
  component: DropdownSelect,
};

export const Default = () => (
  <DropdownSelect value="Option 1" onChange={() => {}}>
    <DropdownItem checked value="Option 1">
      Option 1
    </DropdownItem>
    <DropdownItem value="Option 2">Option 2</DropdownItem>
  </DropdownSelect>
);

export const DefaultLabelled = () => (
  <DropdownSelect label="Selection" value="2201" onChange={() => {}}>
    <DropdownItem checked value="2201">
      2201
    </DropdownItem>
    <DropdownItem value="2110">2110</DropdownItem>
  </DropdownSelect>
);
