import React from "react";
import { SvgIcon, Chip, makeStyles, Avatar } from "@material-ui/core";

export default {
  title: "Tags/Containers",
  component: SvgIcon,
};

const usePillStyles = makeStyles(() => ({
  size: {
    width: "75px",
  },
}));

export const Pill = () => {
  const classes = usePillStyles();
  return <Chip className={classes.size} size="medium" color="primary" />;
};

const useCircleStyles = makeStyles(() => ({
  size: {
    height: "28px",
    width: "28px",
  },
}));

export const Circle = () => {
  const classes = useCircleStyles();
  return <Avatar className={classes.size}>{""}</Avatar>;
};
