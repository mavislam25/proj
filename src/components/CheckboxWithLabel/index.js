import {
  makeStyles,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  labelRoot: {
    alignItems: "flex-start",
  },
  checkboxRoot: {
    paddingTop: "4px",
  },
  checkboxIndeterminate: {
    "&.Mui-disabled svg": {
      backgroundColor: theme.palette.grey[500],
    },
    "&.Mui-disabled svg rect:first-child": {
      stroke: theme.palette.grey[200],
      fill: theme.palette.grey[200],
    },
    "&.Mui-disabled svg rect:last-child": {
      stroke: theme.palette.grey[500],
    },
    "& svg rect:last-child": {
      stroke: `${theme.palette.primary.light}`,
    },
  },
  checkboxDisabled: {
    "& svg": {
      borderRadius: "1px",
      backgroundColor: theme.palette.grey[400],
      border: "none !important",
    },
  },
}));

const CheckboxWithLabel = ({
  label,
  isHeader,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <FormControlLabel
      {...(disabled ? { disabled } : {})}
      classes={{
        root: classes.labelRoot,
      }}
      control={
        <Checkbox
          {...(checked === null ? {} : { checked })}
          {...(defaultChecked === null ? {} : { defaultChecked })}
          {...(indeterminate === null ? {} : { indeterminate })}
          {...(onChange === null ? {} : { onChange })}
          classes={{
            root: classes.checkboxRoot,
            indeterminate: classes.checkboxIndeterminate,
            disabled: classes.checkboxDisabled,
          }}
        />
      }
      label={<Typography variant={isHeader ? "h4" : "h5"}>{label}</Typography>}
    />
  );
};

CheckboxWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  isHeader: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxWithLabel.defaultProps = {
  isHeader: false,
  formControlLabelProps: {},
  checked: null,
  defaultChecked: null,
  disabled: null,
  indeterminate: null,
  onChange: null,
};

export default CheckboxWithLabel;
