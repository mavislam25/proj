import { Grid, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const IconDisplay = ({ Icon, name, ...props }) => (
  <Grid
    item
    xs={3}
    md={2}
    container
    direction="column"
    alignItems="center"
    {...props}
  >
    <Grid item>
      <Icon />
    </Grid>
    <Grid item>
      <Typography>{name}</Typography>
    </Grid>
  </Grid>
);

IconDisplay.propTypes = {
  Icon: PropTypes.elementType,
  name: PropTypes.string,
};

export default IconDisplay;
