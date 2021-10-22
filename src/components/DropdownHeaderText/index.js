import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { IconButton, Typography } from "@material-ui/core";
import { CaretDownIcon } from "../Icons/Carets";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  label: {
    marginRight: 5,
  },
  selectedOptionText: {
    marginRight: 3,
  },
  iconButton: {
    padding: 0,
  },
  icon: {
    fontSize: 5,
  },
}));

const DropdownHeaderText = ({
  label,
  selectedOptionText,
  onClick,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box display="flex" onClick={onClick} {...props}>
      <Typography variant="h5" className={classes.label}>
        {label}
      </Typography>
      <Typography
        variant="h4"
        color="primary"
        className={classes.selectedOptionText}
      >
        {selectedOptionText}
      </Typography>
      <IconButton className={classes.iconButton}>
        <CaretDownIcon className={classes.icon} />
      </IconButton>
    </Box>
  );
};

DropdownHeaderText.propTypes = {
  label: PropTypes.string.isRequired,
  selectedOptionText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownHeaderText;
