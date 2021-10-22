import { Grid, Typography, makeStyles } from "@material-ui/core";
import format from "date-fns/format";
import { Decimal } from "decimal.js";
import React from "react";

export default {
  title: "Typography/Formats",
};

const morningDate = new Date("March 26 2020 10:10");
const afternoonDate = new Date("March 26 2020 17:30");

const styles = makeStyles((theme) => ({
  textLabel: {
    color: theme.palette.text.secondary,
  },
}));

export const Formats = () => {
  const classes = styles();
  return (
    <Grid container spacing={2} style={{ width: 400 }}>
      <Grid item xs={6}>
        <Typography className={classes.textLabel}>Date Format</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{format(morningDate, "dd-MMM-yyyy")}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography className={classes.textLabel}>Time Format</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          {format(morningDate, "hh:mm aaa")}{" "}
          {format(afternoonDate, "hh:mm aaa")}
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography className={classes.textLabel}>Number Format</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{Intl.NumberFormat("en-HK").format(1234)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography className={classes.textLabel}>Phone Format</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>+86 123456789</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography className={classes.textLabel}>
          Price Format (Item)*
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{new Decimal(1.0).toFixed(3)}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography className={classes.textLabel}>
          Price Format (Total)*
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>{new Decimal(1.0).toFixed(2)}</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body2">
          *no currency symbol appears before the price. The currency must be
          stated in a label or notation in an appropriate and visible location
        </Typography>
      </Grid>
    </Grid>
  );
};
