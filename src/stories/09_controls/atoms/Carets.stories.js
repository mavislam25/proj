import SvgIcon from "@material-ui/core/SvgIcon";
import { CaretDownIcon, CaretUpIcon } from "../../../components/Icons/Carets";
import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Controls/Atoms/Carets",
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
}));

export const Up = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <IconButton component={CaretUpIcon} className={classes.iconBlue} />
      </Grid>
      <Grid item>
        <IconButton component={CaretUpIcon} className={classes.iconWhite} />
      </Grid>
    </Grid>
  );
};

export const Down = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <IconButton component={CaretDownIcon} className={classes.iconBlue} />
      </Grid>
      <Grid item>
        <IconButton component={CaretDownIcon} className={classes.iconWhite} />
      </Grid>
    </Grid>
  );
};
