import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Paper, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    paddingLeft: 12,
    "& rect:last-child": {
      stroke: theme.palette.grey["500"],
    },
  },
  clearAll: {
    float: "right",
    marginTop: 6,
    marginRight: 9,
  },
}));

const DropdownCheckboxHeader = ({
  onSelectAll,
  onClearAll,
  style,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Paper
      elevation={0}
      style={{ height: 40, width: 200, ...style }}
      {...props}
    >
      <Box
        style={{ height: "100%", display: "inline-flex", alignItems: "center" }}
      >
        <Checkbox
          className={classes.checkbox}
          indeterminate
          onClick={onSelectAll}
        />
        <Typography variant="h4" display="inline">
          Select All
        </Typography>
      </Box>
      <Typography
        variant="h5"
        display="inline"
        color="primary"
        className={classes.clearAll}
        onClick={onClearAll}
        role="button"
      >
        Clear All
      </Typography>
    </Paper>
  );
};

DropdownCheckboxHeader.propTypes = {
  onSelectAll: PropTypes.func.isRequired,
  onClearAll: PropTypes.func.isRequired,
  style: PropTypes.object,
};

DropdownCheckboxHeader.defaultProps = {
  style: {},
};

export default DropdownCheckboxHeader;
