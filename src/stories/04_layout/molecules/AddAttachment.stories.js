import { IconButton, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { AddElementIcon } from "../../../components/Icons/MainIcons";
import clsx from "clsx";
import React from "react";

export default {
  title: "Layout/Molecules/AddAttachment",
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ({ type }) =>
      type === "image" ? theme.spacing(2) : theme.spacing(1),
    width: ({ type }) => (type === "image" ? 345 : 254),
    height: ({ type }) => (type === "image" ? 224 : 80),
    border: `1px dashed ${theme.palette.primary.main}`,
  },
  dragDrop: {
    marginTop: ({ type }) => (type === "image" ? 26 : -2),
  },
  iconButton: {
    marginTop: ({ type }) => type === "image" && 22,
    padding: 0,
  },
  addIcon: {
    fontSize: ({ type }) => (type === "image" ? 50 : 30),
  },
  subtitle: {
    color: theme.palette.grey[500],
  },
  firstImageText: {
    position: "absolute",
    bottom: theme.spacing(2),
  },
}));

const AddAttachment = ({ type }) => {
  const classes = useStyles({ type });

  return (
    <Paper className={classes.paper}>
      <IconButton className={classes.iconButton}>
        <AddElementIcon className={classes.addIcon} />
      </IconButton>
      <Typography className={classes.dragDrop}>
        Drag and drop files here or <Link>Select File</Link>
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle}>
        Upload limit per file is 100 MB
      </Typography>
      {type === "image" && (
        <Typography
          variant="subtitle2"
          className={clsx(classes.subtitle, classes.firstImageText)}
        >
          Your first image in general category will be the product thumbnail
        </Typography>
      )}
    </Paper>
  );
};

AddAttachment.propTypes = {
  type: PropTypes.oneOf(["image", "file"]),
};

export const Image = () => <AddAttachment type="image" />;

export const File = () => <AddAttachment type="file" />;
