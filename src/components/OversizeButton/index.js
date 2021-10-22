import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  button: () => ({
    height: "400px",
    width: "300px",
    display: "flex",
    padding: "0px",
    borderRadius: "8px",
    textTransform: "none",
    filter: "drop-shadow(0px 0px 8px #5D5D5D)",
  }),
  icon: {
    fontSize: "105px",
  },
  label: {
    flexDirection: "column",
    justifyContent: "start",
    height: "100%",
    width: "100%",
    border: "3px solid transparent",
    "&:hover": {
      border: "3px solid #FFFFFF",
    },
    borderRadius: "8px",
  },
  text: {
    margin: `${theme.spacing(5)}px 0px`,
  },
}));

const OversizeButton = ({ children, Icon, color }) => {
  const classes = useStyles();
  return (
    <Button
      color={color}
      classes={{ label: classes.label, root: classes.button }}
    >
      <Typography variant="h1" className={classes.text}>
        {children}
      </Typography>
      {Icon && <Icon className={classes.icon} />}
    </Button>
  );
};

OversizeButton.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  children: PropTypes.node,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

OversizeButton.defaultProps = {
  children: "",
  color: "primary",
};

export default OversizeButton;
