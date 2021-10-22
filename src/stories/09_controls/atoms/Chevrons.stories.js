import SvgIcon from "@material-ui/core/SvgIcon";
import { IconButton, Grid } from "@material-ui/core";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "../../../components/Icons/Chevrons";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Controls/Atoms/Chevrons",
  component: SvgIcon,
};

const useStyles = makeStyles((theme) => ({
  iconBlue: {
    fill: theme.palette.primary.main,
    fontSize: "10px",
    padding: 0,
  },
  iconWhite: {
    color: theme.palette.common.white,
    fontSize: "10px",
    padding: 0,
  },
  iconInactive: {
    color: theme.palette.grey[400],
    fontSize: "10px",
  },
}));

export const Up = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <IconButton component={ChevronUpIcon} className={classes.iconBlue} />
      </Grid>
      <Grid item>
        <IconButton component={ChevronUpIcon} className={classes.iconWhite} />
      </Grid>
    </Grid>
  );
};

export const Right = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <IconButton component={ChevronRightIcon} className={classes.iconBlue} />
      </Grid>
      <Grid item>
        <IconButton
          component={ChevronRightIcon}
          className={classes.iconWhite}
        />
      </Grid>
    </Grid>
  );
};

export const Down = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <IconButton component={ChevronDownIcon} className={classes.iconBlue} />
      </Grid>
      <Grid item>
        <IconButton component={ChevronDownIcon} className={classes.iconWhite} />
      </Grid>
    </Grid>
  );
};

export const Left = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <IconButton component={ChevronLeftIcon} className={classes.iconBlue} />
      </Grid>
      <Grid item>
        <IconButton component={ChevronLeftIcon} className={classes.iconWhite} />
      </Grid>
    </Grid>
  );
};

export const BreadcrumbInactive = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <ChevronRightIcon className={classes.iconInactive} />
      </Grid>
    </Grid>
  );
};
