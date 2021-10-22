import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { AddElementIcon } from "../../../components/Icons/MainIcons";

export default {
  title: "Buttons/Molecules/AddElement",
  component: Button,
};

const useStyles = makeStyles(() => ({
  button: {
    width: "144px",
    paddingLeft: "5px",
    paddingRight: "3px",
  },
  icon: {
    width: "16px",
    height: "16px",
  },
  startIcon: {
    marginRight: "8px",
    "&.MuiButton-iconSizeSmall": {
      marginLeft: "5px",
    },
  },
  label: {
    justifyContent: "flex-start",
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      classes={{ startIcon: classes.startIcon, label: classes.label }}
      startIcon={<AddElementIcon fontSize="inherit" className={classes.icon} />}
      className={classes.button}
    >
      Object/ Element
    </Button>
  );
};

export const Disabled = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      classes={{ startIcon: classes.startIcon, label: classes.label }}
      startIcon={<AddElementIcon fontSize="inherit" className={classes.icon} />}
      className={classes.button}
      disabled
    >
      Object/ Element
    </Button>
  );
};
