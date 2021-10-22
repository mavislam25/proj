import { makeStyles, Paper, Typography } from "@material-ui/core";
import CountBadge from "../CountBadge";
import SidebarMenuItemBacker from "../SidebarMenuItemBacker";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(0.5),
    height: 48,
    width: 220,
  },
  backer: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    "&:hover h4": {
      color: theme.palette.accent.lightBlue,
    },
    "&:active h4": {
      color: theme.palette.common.white,
    },
    "&:hover div, &:active div": {
      backgroundColor: theme.palette.accent.lightBlue,
      color: theme.palette.primary.main,
      transition: "none",
    },
  },
  typography: {
    marginLeft: theme.spacing(1.5),
  },
  countBadge: {
    marginLeft: "auto",
    marginRight: 10,
  },
}));
const SidebarMenuItem = ({ title, count }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <SidebarMenuItemBacker className={classes.backer}>
        <Typography variant="h4" className={classes.typography}>
          {title}
        </Typography>
        {count && (
          <CountBadge
            color={"primary"}
            classes={{
              root: classes.countBadge,
            }}
            label={count}
          />
        )}
      </SidebarMenuItemBacker>
    </Paper>
  );
};

SidebarMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
};

SidebarMenuItem.defaultProps = {
  count: null,
};

export default SidebarMenuItem;
