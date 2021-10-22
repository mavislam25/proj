import {
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CloseIcon } from "../Icons/MainIcons";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    top: "calc(50% - 6px)",
    right: 12,
    width: 12,
    height: 12,
    padding: 0,
    fontSize: 12,
    color: theme.palette.grey["500"],
    "&:hover": {
      color: theme.palette.grey["500"],
    },
  },
}));

const ModalHeader = ({ title, onClose, ...props }) => {
  const classes = useStyles();

  return (
    <DialogTitle {...props}>
      <Typography variant="h4">{title}</Typography>
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon fontSize="inherit" />
      </IconButton>
    </DialogTitle>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
