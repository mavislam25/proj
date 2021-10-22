import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 96,
  },
  blueRoot: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  greenRoot: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
  },
  orangeRoot: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
  },
  redRoot: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
  },
  whiteRoot: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
  },
  yellowRoot: {
    backgroundColor: "#E9B400",
    color: theme.palette.common.white,
  },
  greyRoot: {
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
  },
  purpleRoot: {
    backgroundColor: theme.palette.accent.purple,
    color: theme.palette.common.white,
  },
}));

const StatusTag = ({ variant, label }) => {
  const classes = useStyles();
  return (
    <Chip
      classes={{
        root: clsx(classes.root, {
          [classes.purpleRoot]: variant === "level1",
          [classes.yellowRoot]: variant === "level2",
          [classes.orangeRoot]: variant === "level3",
          [classes.greenRoot]: variant === "level4",
          [classes.redRoot]: variant === "level5",
          [classes.whiteRoot]: variant === "cancelled",
          [classes.greyRoot]: variant === "disabled",
        }),
      }}
      size="medium"
      label={label}
    />
  );
};

StatusTag.propTypes = {
  variant: PropTypes.oneOf([
    "level1",
    "level2",
    "level3",
    "level4",
    "level5",
    "cancelled",
    "disabled",
  ]).isRequired,
  label: PropTypes.string,
};

StatusTag.defaultProps = {
  label: "",
};

export default StatusTag;
