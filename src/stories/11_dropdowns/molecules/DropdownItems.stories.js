import DropdownItem from "../../../components/DropdownItem";
import DropdownSelect from "../../../components/DropdownSelect";
import { FilterIcon } from "../../../components/Icons/MainIcons";
import DropdownIconLabel from "../../../components/DropdownIconLabel";
import { Checkbox, FormControlLabel, MenuItem } from "@material-ui/core";
import React, { useState } from "react";

export default {
  title: "Dropdowns/Molecules/DropdownItems",
  component: DropdownItem,
};

export const Default = () => {
  const [value, setValue] = useState("Option 1");
  const options = ["Option 1", "Option 2"];
  return (
    <DropdownSelect value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((option) => (
        <DropdownItem value={option} checked={option === value} key={option}>
          {option}
        </DropdownItem>
      ))}
    </DropdownSelect>
  );
};

export const Action = () => {
  const [value, setValue] = useState("Option 1");
  const options = ["Option 1", "Option 2"];
  return (
    <DropdownSelect value={value} onChange={(e) => setValue(e.target.value)}>
      {options.map((option) => (
        <DropdownItem value={option} checked={option === value} key={option}>
          <DropdownIconLabel IconComponent={FilterIcon} label={option} />
        </DropdownItem>
      ))}
    </DropdownSelect>
  );
};

export const CheckboxDefault = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked((currValue) => !currValue);
  };
  return (
    <MenuItem style={{ width: 150 }} checked={isChecked} onClick={handleChange}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} />}
        label="Text"
      />
    </MenuItem>
  );
};

export const CheckboxChecked = () => {
  return (
    <MenuItem style={{ width: 150 }} checked>
      <FormControlLabel control={<Checkbox checked />} label="Text" />
    </MenuItem>
  );
};
