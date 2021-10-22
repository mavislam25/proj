import React, { useState } from "react";
import { ToggleButton } from "@material-ui/lab";
import SherpaButtonGroup from "../../../components/SherpaButtonGroup";

export default {
  title: "Buttons/Organisms/ButtonGroup",
};

export const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState(() => ["one"]);

  const handleSelectButton = (_event, newSelection) => {
    if (newSelection && newSelection.length) {
      setSelectedButton(newSelection);
    }
  };

  return (
    <SherpaButtonGroup
      onChange={handleSelectButton}
      value={selectedButton}
      exclusive
    >
      <ToggleButton value="one">One</ToggleButton>
      <ToggleButton value="two">Two</ToggleButton>
      <ToggleButton value="three">Three</ToggleButton>
    </SherpaButtonGroup>
  );
};
