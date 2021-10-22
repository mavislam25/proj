import { Tabs, Tab } from "@material-ui/core";
import React, { useState } from "react";

export default {
  title: "Buttons/Organisms/TabGroup",
};

export const TabGroup = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
      <Tab label="Tab 3" />
    </Tabs>
  );
};
