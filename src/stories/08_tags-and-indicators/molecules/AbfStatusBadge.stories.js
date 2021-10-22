import { Chip, makeStyles, Grid } from "@material-ui/core";
import React from "react";

export default {
  title: "Tags/Molecules/AbfStatusBadge",
  component: Chip,
};

const useAbfStatusBadgeStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.grey["900"],
    border: `1px solid ${theme.palette.grey["900"]}`,
    background: theme.palette.common.white,
  },
}));

export const Default = () => {
  const classes = useAbfStatusBadgeStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Chip
          size="small"
          classes={classes}
          style={{ width: "26px" }}
          label="EU"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          size="small"
          classes={classes}
          style={{ width: "26px" }}
          label="US"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          size="small"
          classes={classes}
          style={{ width: "78px" }}
          label="Pkg Repeater"
        />
      </Grid>
    </Grid>
  );
};
