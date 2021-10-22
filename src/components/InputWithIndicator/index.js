import IndicatorBar from "../IndicatorBar";
import SherpaInput from "../SherpaInput";
import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  marginTop: {
    marginTop: 16,
  },
}));

const InputWithIndicator = ({
  primaryIndicator,
  secondaryIndicator,
  StatefulInputProps,
}) => {
  const classes = useStyles();
  const { label } = StatefulInputProps;

  return (
    <Box display="flex" flexDirection="row">
      <IndicatorBar
        className={clsx({
          [classes.marginTop]: label,
        })}
        primaryIndicator={primaryIndicator}
        secondaryIndicator={secondaryIndicator}
      />
      <SherpaInput {...StatefulInputProps} />
    </Box>
  );
};

InputWithIndicator.propTypes = {
  primaryIndicator: PropTypes.bool,
  secondaryIndicator: PropTypes.bool,
  StatefulInputProps: PropTypes.exact(SherpaInput.propTypes),
};

InputWithIndicator.defaultProps = {
  primaryIndicator: false,
  secondaryIndicator: false,
  StatefulInputProps: {},
};

export default InputWithIndicator;
