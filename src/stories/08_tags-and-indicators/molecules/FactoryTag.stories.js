import { makeStyles, Grid } from "@material-ui/core";
import FactoryTag from "../../../components/FactoryTag";
import HongKongFlagSvg from "../../../assets/icons/flags/hong-kong.svg";
import React from "react";

export default {
  title: "Tags/Molecules/FactoryTag",
  component: FactoryTag,
};

const useStyles = makeStyles((theme) => ({
  yellowRoot: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
  },
  greenRoot: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
  orangeRoot: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  redRoot: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  blueRoot: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  greyRoot: {
    backgroundColor: theme.palette.grey["500"],
    color: theme.palette.grey["200"],
  },
  blackRoot: {
    backgroundColor: theme.palette.grey["900"],
    color: theme.palette.grey["500"],
  },
  purpleRoot: {
    backgroundColor: theme.palette.accent.purple,
    color: theme.palette.common.white,
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.purpleRoot }}
          label="Reserved"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.yellowRoot }}
          label="New"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.orangeRoot }}
          label="On Hold"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.greenRoot }}
          label="Existing"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.redRoot }}
          label="Overlapping"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.redRoot }}
          label="Overlapped- Oth"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.greyRoot }}
          label="No Value Set"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.greyRoot }}
          label="No Record"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.greenRoot }}
          label="Inpool"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.orangeRoot }}
          label="Outpool"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
      <Grid item xs={12}>
        <FactoryTag
          classes={{ root: classes.blackRoot }}
          label="Cancelled"
          FlagSvg={HongKongFlagSvg}
        />
      </Grid>
    </Grid>
  );
};
