import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";

const SherpaAutocomplete = ({
  label,
  placeholder,
  required,
  classes,
  InputProps,
  ...AutoCompleteProps
}) => {
  /* eslint-disable react/jsx-props-no-spreading */
  const SearchField = (props) => (
    <TextField
      {...InputProps}
      {...props}
      label={label}
      placeholder={placeholder}
      required={required}
    />
  );
  return (
    <Autocomplete
      {...AutoCompleteProps}
      renderInput={SearchField}
      className={classes}
    />
  );
};

SherpaAutocomplete.propTypes = {
  getOptionLabel: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  classes: PropTypes.string,
  InputProps: PropTypes.shape({}),
};
SherpaAutocomplete.defaultProps = {
  label: "",
  placeholder: "Select",
  required: false,
  classes: "",
  onChange: undefined,
  InputProps: null,
};
export default SherpaAutocomplete;
