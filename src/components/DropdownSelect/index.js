import { Select, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  selectRoot: {
    padding: "0 16px 0 0 !important",
    color: theme.palette.primary.main,
    ...theme.typography.h4,
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
  selectIcon: {
    fontSize: "16px",
    top: "calc(50% - 8px)",
    color: theme.palette.primary.main,
  },
  selectPaper: {
    marginTop: 3,
  },
  label: {
    marginRight: 5,
    ...theme.typography.h5,
  },
}));

const DropdownSelect = ({ label, value, onChange, children, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="baseline">
      {label && (
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.label}
        >
          {label}
        </Typography>
      )}
      <Select
        id="active-selection-select"
        value={value}
        onChange={onChange}
        disableUnderline
        classes={{
          root: classes.selectRoot,
          icon: classes.selectIcon,
        }}
        MenuProps={{
          classes: { paper: classes.selectPaper },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: label ? "right" : "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: label ? "right" : "left",
          },
          getContentAnchorEl: null,
        }}
        {...props}
      >
        {children}
      </Select>
    </Box>
  );
};

DropdownSelect.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

DropdownSelect.defaultProps = {};

export default DropdownSelect;
