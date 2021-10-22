import React from "react";
import InputWithIndicator from "../../components/InputWithIndicator";

export default {
  title: "InputFields/Molecules/InputWithIndicator",
  component: InputWithIndicator,
};

export const PrimaryIndicator = () => (
  <InputWithIndicator
    primaryIndicator
    StatefulInputProps={{
      label: "Label",
      placeholder: "Enter Text",
      value: "",
    }}
  />
);
export const SecondaryIndicator = () => (
  <InputWithIndicator
    secondaryIndicator
    StatefulInputProps={{
      label: "Label",
      placeholder: "Enter Text",
      value: "",
    }}
  />
);

export const PrimaryAndSecondaryIndicators = () => (
  <InputWithIndicator
    primaryIndicator
    secondaryIndicator
    StatefulInputProps={{
      label: "Label",
      placeholder: "Enter Text",
      value: "",
    }}
  />
);
