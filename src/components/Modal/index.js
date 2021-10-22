import {
  makeStyles,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { CloseIcon } from "../Icons/MainIcons";
import React from "react";
import PropTypes from "prop-types";
import { typography } from "../../theme/typography";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.grey[900],
  },
  closeButton: {
    position: "absolute",
    top: "calc(50% - 6px)",
    right: 12,
    width: 12,
    height: 12,
    fontSize: 12,
    padding: 0,
    color: theme.palette.grey[500],
    "&:hover": {
      color: theme.palette.grey[500],
    },
  },
  dialogPaper: {
    borderRadius: 4,
    boxShadow: `0px 0px 8px ${theme.palette.grey[700]}`,
  },
  dialogPaperWidthXs: {
    maxWidth: "340px",
    width: "340px",
  },
  dialogPaperWidthSm: {
    maxWidth: "375px",
    width: "375px",
  },
  dialogPaperWidthMd: {
    maxWidth: "500px",
    width: "500px",
  },
  dialogPaperWidthLg: {
    maxWidth: "750px",
    width: "750px",
  },
  dialogPaperWidthXl: {
    maxWidth: "1000px",
    width: "1000px",
  },
  dialogContent: {
    color: theme.palette.grey[700],
    padding: ({ modalType }) =>
      modalType === "text" ? "32px 20px 16px" : "28px 20px 12px",
    ...typography.body1,
  },
  dialogActionsRoot: {
    display: "flex",
    padding: "28px 56px",
    justifyContent: "center",
    flexDirection: ({ constructive }) => (constructive ? "row-reverse" : "row"),
  },
  button: {
    margin: "0 14px",
  },
}));

const Modal = ({
  open,
  onClose,
  ariaLabel,
  title,
  children,
  constructive,
  submitText,
  submitAction,
  submitDisabled,
  cancelText,
  cancelAction,
  maxWidth,
  modalType,
}) => {
  const classes = useStyles({ constructive, modalType });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={ariaLabel}
      fullWidth
      maxWidth={maxWidth}
      classes={{
        paper: classes.dialogPaper,
        paperWidthXs: classes.dialogPaperWidthXs,
        paperWidthSm: classes.dialogPaperWidthSm,
        paperWidthMd: classes.dialogPaperWidthMd,
        paperWidthLg: classes.dialogPaperWidthLg,
        paperWidthXl: classes.dialogPaperWidthXl,
      }}
    >
      <DialogTitle>
        <Typography className={classes.title} variant="h4">
          {title}
        </Typography>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        {children}
      </DialogContent>
      <DialogActions
        classes={{ root: classes.dialogActionsRoot }}
        disableSpacing
      >
        <Button
          variant={constructive ? "contained" : "outlined"}
          onClick={submitAction}
          disabled={submitDisabled}
          className={classes.button}
        >
          {submitText}
        </Button>
        {cancelText && cancelAction && (
          <Button
            variant={constructive ? "outlined" : "contained"}
            onClick={cancelAction}
            className={classes.button}
          >
            {cancelText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  constructive: PropTypes.bool,
  submitText: PropTypes.string.isRequired,
  submitAction: PropTypes.func.isRequired,
  submitDisabled: PropTypes.bool,
  cancelText: PropTypes.string,
  cancelAction: PropTypes.func,
  maxWidth: PropTypes.oneOf([false, "xs", "sm", "md", "lg", "xl"]),
  modalType: PropTypes.oneOf(["text", "field"]),
};

Modal.defaultProps = {
  ariaLabel: null,
  constructive: true,
  submitDisabled: false,
  cancelText: null,
  cancelAction: null,
  maxWidth: "xs",
  modalType: "text",
};

export default Modal;
