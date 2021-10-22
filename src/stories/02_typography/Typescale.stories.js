import React from "react";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Typography/Typescale",
};

// Custom variants are not properly supported. Once it's supported these will not be needed
// @see: https://github.com/mui-org/material-ui/issues/15573
const useStyles = makeStyles((theme) => ({
  notificationNumberText: theme.typography.notificationNumber,
  tableCellText: theme.typography.tableCell,
  textDarkGray: {
    color: theme.palette.text.secondary,
  },
}));

export const Typescale = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" className={classes.textDarkGray}>
        H1
      </Typography>
      <Typography variant="h2" className={classes.textDarkGray}>
        H2
      </Typography>
      <Typography variant="h3" className={classes.textDarkGray}>
        H3
      </Typography>
      <Typography variant="h4" className={classes.textDarkGray}>
        H4
      </Typography>
      <Typography variant="h5" className={classes.textDarkGray}>
        H5
      </Typography>
      <Typography variant="h6" className={classes.textDarkGray}>
        H6
      </Typography>

      <Typography variant="subtitle1" className={classes.textDarkGray}>
        Subtitle 1
      </Typography>
      <Typography variant="subtitle2" className={classes.textDarkGray}>
        Subtitle 2
      </Typography>

      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="button" className={classes.textDarkGray}>
        Button Text
      </Typography>
      <Typography className={clsx(classes.tableCellText, classes.textDarkGray)}>
        Table Cell Text
      </Typography>
      <Typography variant="caption" className={classes.textDarkGray}>
        Caption
      </Typography>
      <Typography className={classes.notificationNumberText}>
        Notification Number
      </Typography>
    </>
  );
};
