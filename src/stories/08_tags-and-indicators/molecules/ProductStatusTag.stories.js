import React from "react";
import StatusTag from "../../../components/StatusTag";
import { Grid } from "@material-ui/core";

export default {
  title: "Tags/Molecules/ProductStatusTag",
  component: StatusTag,
};

export const Default = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <StatusTag variant="level1" label="In Progress" />
      </Grid>
      <Grid item xs={12}>
        <StatusTag variant="level2" label="Active" />
      </Grid>
      <Grid item xs={12}>
        <StatusTag variant="level3" label="Under Review" />
      </Grid>
      <Grid item xs={12}>
        <StatusTag variant="level4" label="Confirmed" />
      </Grid>
      <Grid item xs={12}>
        <StatusTag variant="level5" label="Returned" />
      </Grid>
      <Grid item xs={12}>
        <StatusTag variant="cancelled" label="Cancelled" />
      </Grid>
      <Grid item xs={12}>
        <StatusTag variant="disabled" label="Disabled" />
      </Grid>
    </Grid>
  );
};
