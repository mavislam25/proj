import { makeStyles, Slider, Typography } from "@material-ui/core";
import React from "react";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    paddingTop: 15,
    paddingBottom: 8,
  },
  priceRange: {
    color: "#2BBFBE",
  },
}));

const thousandsMagnitudeLookup = {
  0: "",
  1: "K",
  2: "M",
  3: "B",
  4: "T",
  5: "Q",
};

const toDisplayNumber = (number) => {
  const numberOfThousands = Math.floor((`${+number}`.length - 1) / 3);
  return `${number / 10 ** (numberOfThousands * 3)}${
    thousandsMagnitudeLookup[numberOfThousands]
  }`;
};

const PriceRangeSlider = ({ SliderProps, label, ...props }) => {
  const classes = useStyles();
  const { value, max, min } = SliderProps;
  return (
    <Box {...props}>
      <Typography variant="h5" display="inline">
        {label}:
      </Typography>
      &nbsp;
      <Typography variant="h4" display="inline" className={classes.priceRange}>
        {`${toDisplayNumber(value[0])} to ${toDisplayNumber(value[1])}`}
      </Typography>
      <Slider classes={{ root: classes.root }} {...SliderProps} />
      <Typography variant="h4" display="inline">
        {toDisplayNumber(min)}
      </Typography>
      <Typography variant="h4" display="inline" style={{ float: "right" }}>
        {toDisplayNumber(max)}
      </Typography>
    </Box>
  );
};

PriceRangeSlider.propTypes = {
  SliderProps: PropTypes.object,
  label: PropTypes.string,
};

PriceRangeSlider.defaultProps = {
  SliderProps: {},
  label: "",
};

export default PriceRangeSlider;
