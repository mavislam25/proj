import { CheckIcon } from "../Icons/MainIcons";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    justifyContent: "center",
    paddingRight: "20px !important",
    paddingLeft: "20px !important",
  },
  checkIcon: {
    fontSize: 10,
    color: theme.palette.primary.main,
    position: "absolute",
    left: 1,
  },
}));

const DropdownItem = ({ children, checked, ...props }) => {
  const classes = useStyles();

  return (
    <MenuItem className={classes.menuItem} checked={checked} {...props}>
      {checked && <CheckIcon className={classes.checkIcon} />}
      {children}
    </MenuItem>
  );
};

DropdownItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

DropdownItem.defaultProps = {
  checked: false,
};

export default DropdownItem;
