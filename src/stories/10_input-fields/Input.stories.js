import { withStyles, InputAdornment } from "@material-ui/core";
import React, { useState } from "react";
import SherpaInput from "../../components/SherpaInput";
import InputAdornmentIconButton from "../../components/InputAdornmentIconButton";
import { AttachIcon } from "../../components/Icons/MainIcons";

export default {
  title: "InputFields/Molecules/Input",
  component: SherpaInput,
};

export const Default = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <SherpaInput
      value={value}
      onChange={handleChange}
      label="Label"
      placeholder="Enter Text"
    />
  );
};

export const DefaultRequired = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <SherpaInput
      required
      value={value}
      onChange={handleChange}
      label="Label"
      placeholder="Enter Text"
    />
  );
};

export const DefaultWithValue = () => {
  const [value, setValue] = useState("joe@lidl.com.hk");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <SherpaInput
      value={value}
      onChange={handleChange}
      label="Label"
      placeholder="Enter Text"
    />
  );
};

export const Disabled = () => (
  <SherpaInput value="" placeholder="Enter Text" label="Label" disabled />
);

export const DisabledWithValue = () => (
  <SherpaInput
    value="joe@lidl.com.hk"
    placeholder="Enter Text"
    label="Label"
    disabled
  />
);

export const ReadOnly = () => (
  <SherpaInput
    value="joe@lidl.com.hk"
    placeholder="Enter Text"
    label="Label"
    InputProps={{
      readOnly: true,
    }}
  />
);

export const DefaultWithError = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <SherpaInput
      value={value}
      onChange={handleChange}
      label="Click in and out to see the error state"
      placeholder="Enter Text"
      helperText="Please enter something"
      isValid={() => false}
    />
  );
};

const StartAdornment = withStyles({
  root: {
    alignItems: "flex-start",
  },
})(InputAdornment);

export const MultiLine = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => setValue(() => newValue);

  return (
    <SherpaInput
      value={value}
      onChange={handleChange}
      label="Label"
      placeholder="Enter Text"
      rows={4}
      multiline={true}
      InputProps={{
        endAdornment: (
          <StartAdornment position="end">
            <InputAdornmentIconButton
              onClick={() => setValue("You clicked the attachment icon!")}
            >
              <AttachIcon style={{ fontSize: 16 }} />
            </InputAdornmentIconButton>
          </StartAdornment>
        ),
      }}
    />
  );
};
