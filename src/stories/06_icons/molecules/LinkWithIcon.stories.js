import { Link, SvgIcon } from "@material-ui/core";
import {
  CallIcon,
  EMailIcon,
  FilterIcon,
  MobileIcon,
} from "../../../components/Icons/MainIcons";
import { makeStyles } from "@material-ui/core/styles";
import { ChinaFlag } from "../../../components/Icons/CountryFlags";
import clsx from "clsx";
import React from "react";

export default {
  title: "Icons/Molecules/LinkWithIcon",
  component: SvgIcon,
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: -2,
    marginRight: 7,
    fontSize: "inherit",
  },
  singleIcon: {
    marginRight: theme.spacing(1),
  },
  doubleIcon: {
    marginRight: theme.spacing(0.5),
  },
  disabledLink: {
    color: theme.palette.text.disabled,
  },
}));

export const LinkDefault = () => {
  const classes = useStyles();
  return (
    <Link variant="h5">
      <FilterIcon className={clsx(classes.icon, classes.singleIcon)} />
      Link Default
    </Link>
  );
};

export const LinkDisabled = () => {
  const classes = useStyles();
  return (
    <Link variant="h5" className={classes.disabledLink}>
      <FilterIcon className={clsx(classes.icon, classes.singleIcon)} />
      Link Default
    </Link>
  );
};

export const ContactCall = () => {
  const classes = useStyles();
  return (
    <Link variant="h5">
      <CallIcon className={clsx(classes.icon, classes.doubleIcon)} />
      <ChinaFlag className={clsx(classes.icon, classes.doubleIcon)} />
      +86 1388155443
    </Link>
  );
};

export const ContactMobile = () => {
  const classes = useStyles();
  return (
    <Link variant="h5">
      <MobileIcon className={clsx(classes.icon, classes.doubleIcon)} />
      <ChinaFlag className={clsx(classes.icon, classes.doubleIcon)} />
      +86 1388100499
    </Link>
  );
};

export const ContactEmail = () => {
  const classes = useStyles();
  return (
    <Link variant="h5">
      <EMailIcon className={clsx(classes.icon, classes.singleIcon)} />
      zhu8888@icq.com
    </Link>
  );
};
