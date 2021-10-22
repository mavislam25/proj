import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, TextField } from "@material-ui/core";
import useDebounce from "../../hooks/useDebounce";
import clsx from "clsx";

const noop = () => {};

const useStyles = makeStyles(() => ({
  readOnlyRoot: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "transparent",
      "& fieldset": {
        borderColor: "transparent !important",
      },
    },
  },
}));

const SherpaInput = ({
  value,
  helperText,
  isValid,
  restrictInput,
  onChange,
  disabled,
  InputProps,
  classes,
  ...rest
}) => {
  const [localValue, setLocalValue] = useState(value);
  const [isDirty, setIsDirty] = useState(!!value && !disabled);
  const [focused, setFocused] = useState(false);
  const debouncedOnChange = useDebounce((v) => onChange(v), 250, [onChange]);

  const { readOnly } = InputProps;
  const localClasses = useStyles();

  const isError = () => isValid && !isValid(localValue) && isDirty && !disabled;

  const getHelperText = () => {
    if (isError() || (!isValid && helperText)) {
      return helperText;
    }
    if (isValid && helperText) {
      return " ";
    }
    return null;
  };

  useEffect(() => {
    if (value) setIsDirty(true);
  }, [value]);

  useEffect(() => {
    if (!focused && value !== localValue) {
      setLocalValue(value);
    }
  }, [localValue, value, focused]);

  return (
    <TextField
      helperText={getHelperText()}
      error={isValid && !isValid(localValue) && isDirty && !disabled}
      disabled={disabled}
      InputProps={InputProps}
      {...rest}
      value={localValue}
      onChange={(e) => {
        if (restrictInput && !RegExp(restrictInput).test(e.target.value))
          return;
        setLocalValue(e.target.value);
        debouncedOnChange(e.target.value);
      }}
      onFocus={(e) => {
        setFocused(true);
        if (rest.onFocus) rest.onFocus(e.target.value);
      }}
      onBlur={(e) => {
        setIsDirty(true);
        setFocused(false);
        if (localValue !== value) {
          debouncedOnChange.cancel();
          onChange(e.target.value);
        }
        if (rest.onBlur) rest.onBlur(e.target.value);
      }}
      classes={{
        root: clsx(
          {
            [localClasses.readOnlyRoot]: readOnly,
          },
          classes.root
        ),
        ...classes,
      }}
    />
  );
};

SherpaInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  restrictInput: PropTypes.string, // Regex
  helperText: PropTypes.string,
  isValid: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  InputProps: PropTypes.object,
  classes: PropTypes.object,
};

SherpaInput.defaultProps = {
  restrictInput: null,
  helperText: null,
  isValid: null,
  onChange: noop,
  disabled: false,
  InputProps: {},
  classes: {},
};

export default SherpaInput;
