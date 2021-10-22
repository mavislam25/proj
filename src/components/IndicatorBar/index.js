import { Box, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  fullAlertBar: {
    height: 29,
  },
  halfAlertBar: {
    height: 13,
  },
  alertBar: {
    width: 4,
    marginTop: 3,
  },
  primaryAlertBar: {
    backgroundColor: "#F2994A",
  },
  secondaryAlertBar: {
    backgroundColor: "#2BBFBE",
  },
}));

const IndicatorBar = ({ primaryIndicator, secondaryIndicator, className }) => {
  const localClasses = useStyles();

  return (
    <Box className={className}>
      {primaryIndicator && (
        <Box
          className={clsx(localClasses.primaryAlertBar, localClasses.alertBar, {
            [localClasses.fullAlertBar]:
              primaryIndicator && !secondaryIndicator,
            [localClasses.halfAlertBar]: primaryIndicator && secondaryIndicator,
          })}
        />
      )}
      {secondaryIndicator && (
        <Box
          className={clsx(
            localClasses.secondaryAlertBar,
            localClasses.alertBar,
            {
              [localClasses.fullAlertBar]:
                secondaryIndicator && !primaryIndicator,
              [localClasses.halfAlertBar]:
                primaryIndicator && secondaryIndicator,
            }
          )}
        />
      )}
    </Box>
  );
};
IndicatorBar.propTypes = {
  primaryIndicator: PropTypes.bool,
  secondaryIndicator: PropTypes.bool,
  className: PropTypes.string,
};

IndicatorBar.defaultProps = {
  primaryIndicator: false,
  secondaryIndicator: false,
  className: "",
};

export default IndicatorBar;
