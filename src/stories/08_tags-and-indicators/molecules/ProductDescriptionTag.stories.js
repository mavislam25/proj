import { Chip, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

export default {
  title: "Tags/Molecules/ProductDescriptionTag",
  component: Chip,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "56px",
  },
  tagText: {
    backgroundColor: "#2BBFBE",
    color: "#FFFFFF",
  },
  noTags: {
    color: theme.palette.grey["600"],
    backgroundColor: theme.palette.grey["400"],
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Chip
          size="small"
          classes={{ root: clsx(classes.root, classes.tagText) }}
          label="Tag Text"
        />
      </Grid>
      <Grid item xs={12}>
        <Chip
          size="small"
          classes={{ root: clsx(classes.root, classes.noTags) }}
          label="No Tags"
        />
      </Grid>
    </Grid>
  );
};
