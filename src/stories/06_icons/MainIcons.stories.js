import * as MainIconComponents from "../../components/Icons/MainIcons";
import {
  AddElementIcon,
  ErrorIcon,
  InformationIcon,
  WarningIcon,
  ConfirmIcon,
} from "../../components/Icons/MainIcons";
import React from "react";
import * as MainSolidIconComponents from "../../components/Icons/MainSolidIcons";
import {
  ErrorSolidIcon,
  InformationSolidIcon,
  WarningSolidIcon,
  ConfirmSolidIcon,
} from "../../components/Icons/MainSolidIcons";
import { Grid, SvgIcon } from "@material-ui/core";
import IconDisplay from "../../sb-components/IconDisplay";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Icons/MainIcons",
  component: SvgIcon,
};

const useStyles = makeStyles((theme) => ({
  coloredIconPrimary: {
    fill: theme.palette.primary.main,
  },
  coloredIconPrimaryLight: {
    fill: theme.palette.primary.light,
  },
  coloredIconDisabled: {
    fill: theme.palette.grey[400],
  },
  coloredIconTeal: {
    fill: theme.palette.accent.teal,
  },
  coloredIconWhite: {
    fill: theme.palette.common.white,
  },
  coloredIconError: {
    fill: theme.palette.error.main,
  },
  coloredIconInfo: {
    fill: theme.palette.info.main,
  },
  coloredIconWarning: {
    fill: theme.palette.warning.main,
  },
  coloredIconConfirm: {
    fill: theme.palette.success.main,
  },
}));

export const SingleIcon = () => <AddElementIcon />;

export const AllIcons = () => (
  <Grid container spacing={4}>
    {Object.entries(MainIconComponents).map(([name, Icon]) => (
      <IconDisplay Icon={Icon} name={name} key={name} />
    ))}
  </Grid>
);

export const AllSolidIcons = () => (
  <Grid container spacing={4}>
    {Object.entries(MainSolidIconComponents).map(([name, Icon]) => (
      <IconDisplay Icon={Icon} name={name} key={name} />
    ))}
  </Grid>
);

export const ColoredIcons = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item>
        <AddElementIcon className={classes.coloredIconPrimary} />
      </Grid>
      <Grid item>
        <AddElementIcon className={classes.coloredIconPrimaryLight} />
      </Grid>
      <Grid item>
        <AddElementIcon className={classes.coloredIconDisabled} />
      </Grid>
      <Grid item>
        <AddElementIcon className={classes.coloredIconTeal} />
      </Grid>
      <Grid item>
        <AddElementIcon className={classes.coloredIconWhite} />
      </Grid>
    </Grid>
  );
};

export const ConditionIcons = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item container spacing={4}>
        <Grid item>
          <ErrorIcon className={classes.coloredIconError} />
        </Grid>
        <Grid item>
          <ErrorIcon className={classes.coloredIconWhite} />
        </Grid>
        <Grid item>
          <ErrorSolidIcon className={classes.coloredIconWhite} />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item>
          <InformationIcon className={classes.coloredIconInfo} />
        </Grid>
        <Grid item>
          <InformationIcon className={classes.coloredIconWhite} />
        </Grid>
        <Grid item>
          <InformationSolidIcon className={classes.coloredIconInfo} />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item>
          <WarningIcon className={classes.coloredIconWarning} />
        </Grid>
        <Grid item>
          <WarningIcon className={classes.coloredIconWhite} />
        </Grid>
        <Grid item>
          <WarningSolidIcon className={classes.coloredIconWhite} />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item>
          <ConfirmIcon className={classes.coloredIconConfirm} />
        </Grid>
        <Grid item>
          <ConfirmIcon className={classes.coloredIconWhite} />
        </Grid>
        <Grid item>
          <ConfirmSolidIcon className={classes.coloredIconWhite} />
        </Grid>
      </Grid>
    </Grid>
  );
};
