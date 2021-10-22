import { IconButton, SvgIcon, makeStyles } from "@material-ui/core";
import { AddElementIcon } from "../../components/Icons/MainIcons";
import React from "react";

export default {
  title: "Icons/IconButton",
  component: SvgIcon,
};

const styles = makeStyles((theme) => ({
  disabled: {
    "&.MuiIconButton-root.Mui-disabled": {
      color: theme.palette.grey["400"],
    },
  },
}));

export const Primary = () => (
  <IconButton>
    <AddElementIcon />
  </IconButton>
);

export const Secondary = () => (
  <IconButton color="secondary">
    <AddElementIcon />
  </IconButton>
);

export const Disabled = () => {
  const classes = styles();
  return (
    <IconButton disabled className={classes.disabled}>
      <AddElementIcon />
    </IconButton>
  );
};
