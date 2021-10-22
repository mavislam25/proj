import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  icon: {
    fontSize: 14,
    marginRight: 7,
  },
}));

const DropdownIconLabel = ({ IconComponent, label }) => {
  const classes = useStyles();

  return (
    <Box color={"primary.main"} display="flex">
      <IconComponent className={classes.icon} />
      {label}
    </Box>
  );
};

DropdownIconLabel.propTypes = {
  IconComponent: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default DropdownIconLabel;
