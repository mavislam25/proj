import { Avatar, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

export default {
  title: "Tags/Molecules/Avatar",
  component: Avatar,
};

const useAvatarStyles = makeStyles((theme) => ({
  red: {
    backgroundColor: theme.palette.accent.lidlRed,
  },
  small: {
    height: "16px",
    width: "16px",
    ...theme.typography.subtitle1,
  },
  medium: {
    height: "28px",
    width: "28px",
    ...theme.typography.h4,
  },
  large: {
    height: "48px",
    width: "48px",
    ...theme.typography.h2,
  },
}));

export const Small = () => {
  const classes = useAvatarStyles();
  return <Avatar className={clsx([classes.small, classes.red])}>FL</Avatar>;
};

export const Medium = () => {
  const classes = useAvatarStyles();
  return <Avatar className={clsx([classes.medium, classes.red])}>FL</Avatar>;
};

export const Large = () => {
  const classes = useAvatarStyles();
  return <Avatar className={clsx([classes.large, classes.red])}>FL</Avatar>;
};
