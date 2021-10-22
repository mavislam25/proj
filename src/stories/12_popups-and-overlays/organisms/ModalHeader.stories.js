import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import ModalHeader from "../../../components/ModalHeader";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import React from "react";

export default {
  title: "PopupsAndOverlays/Molecules/ModalHeader",
  component: Dialog,
};

const useStyles = makeStyles(() => ({
  button: {
    width: 100,
  },
}));

export const WithFields = () => {
  const classes = useStyles();

  return (
    <Dialog open maxWidth="xs">
      <ModalHeader title="Title" />
      <DialogContent>
        <Box>
          <TextField placeholder="Enter Text" fullWidth label="Label" />
        </Box>
        <Box mt="22px">
          <TextField placeholder="Enter Text" fullWidth label="Label" />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="medium" className={classes.button}>
          Text
        </Button>
        <Button size="medium" className={classes.button}>
          Text
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const PromptConstructive = () => {
  const classes = useStyles();
  return (
    <Dialog open maxWidth="xs">
      <ModalHeader title="Title" />
      <DialogContent>
        <Typography align="justify">
          Are you sure you want to add this? This is what will happen if you do.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="medium" className={classes.button}>
          Go Back
        </Button>
        <Button size="medium" className={classes.button}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export const PromptDestructive = () => {
  const classes = useStyles();
  return (
    <Dialog open maxWidth="xs">
      <ModalHeader title="Title" />
      <DialogContent>
        <Typography align="justify">
          Are you sure that you want to perform this task? This is what will
          happen if you do.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="medium" className={classes.button}>
          OK
        </Button>
        <Button size="medium" className={classes.button}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
