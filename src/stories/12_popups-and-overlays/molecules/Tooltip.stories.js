import { Tooltip, Typography } from "@material-ui/core";
import React from "react";

export default {
  title: "PopupsAndOverlays/Molecules/Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <Tooltip title={"Tool Tip Text"}>
    <Typography style={{ display: "inline" }}>
      Hover your mouse over me
    </Typography>
  </Tooltip>
);

export const Open = () => (
  <Tooltip title={"Tool Tip Text"} open>
    <Typography style={{ display: "inline" }}>
      Hover your mouse over me
    </Typography>
  </Tooltip>
);
