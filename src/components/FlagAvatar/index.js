import { Avatar, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  large: {
    height: "24px",
    width: "24px",
    border: `1px solid ${theme.palette.grey["300"]}`,
    borderRadius: "50%",
  },
  medium: {
    height: 20,
    width: 20,
    border: `1px solid ${theme.palette.grey["300"]}`,
    borderRadius: "50%",
  },
  small: {
    height: "14px",
    width: "14px",
    border: `1px solid ${theme.palette.grey["300"]}`,
    borderRadius: "50%",
  },
}));

const FlagAvatar = ({ size, className, ...p }) => {
  const classes = useStyles();

  return (
    <Avatar
      className={clsx([
        {
          [classes.small]: size === "small",
          [classes.medium]: size === "medium",
          [classes.large]: size === "large",
        },
        className,
      ])}
      {...p}
    />
  );
};

FlagAvatar.propTypes = {
  // size: PropTypes.oneOf[("small", "medium", "large")],
  className: PropTypes.string,
};

FlagAvatar.defaultProps = {
  size: "small",
  className: "",
};

export default FlagAvatar;
