import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { PdfFile } from "../../../components/Icons/FileType";

export default {
  title: "Buttons/Molecules/FileButton",
  component: Button,
};

const useStyles = makeStyles(() => ({
  button: {
    width: "147px",
    textTransform: "none",
    paddingLeft: "3px",
    paddingRight: "3px",
  },
  icon: {
    width: "21px",
    height: "24px",
  },
  startIcon: {
    marginRight: "5px",
    "&.MuiButton-iconSizeSmall": {
      marginLeft: "0px",
    },
  },
  label: {
    justifyContent: "flex-start",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      classes={{ startIcon: classes.startIcon, label: classes.label }}
      startIcon={<PdfFile className={classes.icon} />}
      className={classes.button}
    >
      Artwork_V 1.0.Pdf
    </Button>
  );
};
