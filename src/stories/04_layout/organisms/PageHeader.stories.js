import { PageNavigationContainer } from "../../../components";
import { Badge, Breadcrumbs, Link, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { BellIcon } from "../../../components/Icons/MainIcons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

export default {
  title: "Layout/Organisms/PageHeader",
};

const useStyles = makeStyles((theme) => ({
  badge: {
    marginTop: 4,
    marginRight: theme.spacing(3),
  },
  typography: {
    marginTop: 0,
  },
  inactiveLink: {
    color: theme.palette.text.disabled,
  },
  h2: {
    marginBottom: -1,
  },
  breadCrumb: {
    marginBottom: 18,
    marginTop: 18,
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <PageNavigationContainer>
      <Breadcrumbs className={classes.breadCrumb}>
        <Typography variant="h3" className={clsx(classes.inactiveLink)}>
          Page Link
        </Typography>
        <Link variant="h3">Page Link</Link>
        <Typography variant="h2" className={classes.h2}>
          Web Page Name
        </Typography>
      </Breadcrumbs>
      <Box display="flex" flexDirection="row" marginLeft="auto" marginRight={3}>
        <Badge color="error" badgeContent={24} className={classes.badge}>
          <BellIcon color="primary" style={{ fontSize: 16 }} />
        </Badge>
        <Typography className={classes.typography}>
          Page Level Information / Function
        </Typography>
      </Box>
    </PageNavigationContainer>
  );
};
