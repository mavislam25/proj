import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    width: "24px",
    justifyContent: "flex-end",
  },
  iconSmall: {
    marginLeft: "0px",
    marginRight: "0px",
  },
}));
const IconTag = ({ classes, ...p }) => {
  const internalClasses = useStyles();
  return (
    <Chip
      classes={{
        ...classes,
        root: clsx([internalClasses.root, classes && classes.root]),
        iconSmall: clsx([
          internalClasses.iconSmall,
          classes && classes.iconSmall,
        ]),
      }}
      size="small"
      {...p}
    />
  );
};

IconTag.propTypes = Chip.propTypes;

export default IconTag;
