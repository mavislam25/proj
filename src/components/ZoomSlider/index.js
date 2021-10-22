import { Box, Grid, Slider, Typography, withStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const PercentageSlider = withStyles((theme) => ({
  root: {
    padding: "9px 0px",
  },
  thumb: {
    width: 40,
    height: 20,
    marginLeft: -19,
    borderRadius: 4,
    ...theme.typography.h4,
    "& span": {
      color: "#2BBFBE",
    },
  },
}))(Slider);

const PercentageThumb = (props) => {
  // eslint-disable-next-line react/prop-types
  const value = props["aria-valuenow"] || 0;
  return (
    <span {...props}>
      <span>{value}%</span>
    </span>
  );
};

const ZoomSlider = ({ SliderProps, ...props }) => (
  <Box {...props}>
    <Typography variant="h5">Zoom</Typography>
    <Grid container>
      <Grid item>
        <Typography variant="h4" style={{ paddingRight: 7 }}>
          -
        </Typography>
      </Grid>
      <Grid item xs>
        <PercentageSlider ThumbComponent={PercentageThumb} {...SliderProps} />
      </Grid>
      <Grid item>
        <Typography variant="h4" style={{ paddingLeft: 7 }}>
          +
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

ZoomSlider.propTypes = {
  SliderProps: PropTypes.object,
};

export default ZoomSlider;
