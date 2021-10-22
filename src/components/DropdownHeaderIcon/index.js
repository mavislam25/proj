import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { IconButton, Typography } from "@material-ui/core";
import { CaretDownIcon } from "../Icons/Carets";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  label: {
    marginLeft: 6,
    marginRight: 5,
  },
  iconButton: {
    padding: 0,
  },
  caretIcon: {
    fontSize: 5,
  },
  icon: {
    fontSize: 14,
  },
}));

const DropdownHeaderIcon = ({ label, onClick, IconComponent, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="flex" onClick={onClick} {...props}>
      <IconButton className={classes.iconButton}>
        <IconComponent className={classes.icon} />
      </IconButton>
      <Typography variant="h5" className={classes.label}>
        {label}
      </Typography>
      <IconButton className={classes.iconButton}>
        <CaretDownIcon className={classes.caretIcon} />
      </IconButton>
    </Box>
  );
};

DropdownHeaderIcon.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  IconComponent: PropTypes.elementType.isRequired,
};

export default DropdownHeaderIcon;
