import { Chip, makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import FlagAvatar from "../FlagAvatar";
import PropTypes from "prop-types";

const useFactoryTagStyles = makeStyles(() => ({
  root: {
    width: 96,
    justifyContent: "center",
  },
  label: {
    marginLeft: "0px",
    paddingLeft: "0px",
    textOverflow: "unset",
  },
  flagAvatar: {
    marginRight: 4,
  },
}));

const FactoryTag = ({ classes, FlagSvg, ...p }) => {
  const internalClasses = useFactoryTagStyles();

  const {
    root: rootClass,
    label: labelClass,
    icon: iconClass,
    ...restOfClasses
  } = classes || {};

  return (
    <Box display="flex">
      <FlagAvatar
        size="medium"
        src={FlagSvg}
        className={internalClasses.flagAvatar}
      />
      <Chip
        size="medium"
        classes={{
          icon: clsx([internalClasses.icon, iconClass]),
          label: clsx([internalClasses.label, labelClass]),
          root: clsx([internalClasses.root, rootClass]),
          ...restOfClasses,
        }}
        {...p}
      />
    </Box>
  );
};

FactoryTag.propTypes = {
  classes: PropTypes.object,
  FlagSvg: PropTypes.string.isRequired,
};

FactoryTag.defaultProps = {
  classes: {},
};

export default FactoryTag;
