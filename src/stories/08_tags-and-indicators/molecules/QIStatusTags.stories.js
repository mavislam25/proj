import { Chip, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

export default {
  title: "Tags/Molecules/QIStatusTags",
  component: Chip,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 96,
  },
  blueRoot: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  greenRoot: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
  orangeRoot: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  redRoot: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
  },
  purpleRoot: {
    backgroundColor: theme.palette.accent.purple,
    color: theme.palette.common.white,
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Chip
          classes={{ root: clsx([classes.root, classes.purpleRoot]) }}
          label="Ready to Send"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          classes={{ root: clsx([classes.root, classes.orangeRoot]) }}
          label="Sent, Waiting"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          classes={{ root: clsx([classes.root, classes.greenRoot]) }}
          label="Sent & Accepted"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          classes={{ root: clsx([classes.root, classes.redRoot]) }}
          label="CBX Data Failed"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          classes={{ root: clsx([classes.root, classes.redRoot]) }}
          label="Send & Rejected"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          classes={{ root: clsx([classes.root, classes.redRoot]) }}
          label="Invalid Data"
        />
      </Grid>
    </Grid>
  );
};
