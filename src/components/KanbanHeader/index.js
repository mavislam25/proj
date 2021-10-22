import { makeStyles } from "@material-ui/core/styles";
import CountBadge, { useCountBadgeStyles } from "../CountBadge";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    boxShadow: `0px 3px 3px ${theme.palette.grey["500"]}`,
    height: 45,
    display: "flex",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
  },
  countBadge: {
    marginLeft: "auto",
    marginRight: 10,
  },
}));

const KanbanHeader = ({ title, count }) => {
  const classes = useStyles();
  const countBadgeClasses = useCountBadgeStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4" className={classes.text}>
        {title}
      </Typography>
      {count && (
        <CountBadge
          classes={{
            root: clsx(countBadgeClasses.lightBlue, classes.countBadge),
          }}
          label={count}
        />
      )}
    </Box>
  );
};

KanbanHeader.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
};

KanbanHeader.defaultProps = {
  count: null,
};

export default KanbanHeader;
