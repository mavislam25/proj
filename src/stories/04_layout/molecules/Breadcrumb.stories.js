import { Breadcrumbs, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default {
  title: "Layout/Molecules/Breadcrumbs",
  component: Breadcrumbs,
};

const useStyles = makeStyles((theme) => ({
  inactiveLink: {
    color: theme.palette.text.disabled,
  },
  h2: {
    marginBottom: -1,
  },
}));
export const Default = () => {
  const classes = useStyles();
  return (
    <Breadcrumbs>
      <Typography variant="h3" className={classes.inactiveLink}>
        Page Link
      </Typography>
      <Link variant="h3">Page Link</Link>
      <Typography variant="h2" className={classes.h2}>
        Web Page Name
      </Typography>
    </Breadcrumbs>
  );
};
