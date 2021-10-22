import { makeStyles, Grid } from "@material-ui/core";
import React from "react";
import CheckboxWithLabel from "../../../components/CheckboxWithLabel";

export default {
  title: "Controls/Molecules/CheckboxWithLabel",
  component: CheckboxWithLabel,
};

const useStyles = makeStyles((theme) => ({
  mockHover: {
    color: theme.palette.primary.light,
    "& svg": {
      color: theme.palette.primary.light,
    },
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item container spacing={4}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" isHeader={true} />
        </Grid>
        <Grid item spacing={4} style={{ width: "100px" }}>
          <CheckboxWithLabel label="Multiline text" />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" checked />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" isHeader={true} checked />
        </Grid>
        <Grid item style={{ width: "100px" }} spacing={4}>
          <CheckboxWithLabel label="Multiline text" checked />
        </Grid>
      </Grid>
      <Grid item container spacing={4} className={classes.mockHover}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" isHeader={true} />
        </Grid>
        <Grid item spacing={4} style={{ width: "100px" }}>
          <CheckboxWithLabel label="Multiline text" />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" disabled />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" isHeader={true} disabled />
        </Grid>
        <Grid item style={{ width: "100px" }} spacing={4}>
          <CheckboxWithLabel label="Multiline text" disabled />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" disabled checked />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" isHeader={true} disabled checked />
        </Grid>
        <Grid item style={{ width: "100px" }} spacing={4}>
          <CheckboxWithLabel label="Multiline text" disabled checked />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" indeterminate />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" isHeader={true} indeterminate />
        </Grid>
        <Grid item style={{ width: "100px" }} spacing={4}>
          <CheckboxWithLabel label="Multiline text" indeterminate />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item spacing={4}>
          <CheckboxWithLabel label="Text" indeterminate disabled />
        </Grid>
        <Grid item spacing={4}>
          <CheckboxWithLabel
            label="Text"
            isHeader={true}
            indeterminate
            disabled
          />
        </Grid>
        <Grid item style={{ width: "100px" }} spacing={4}>
          <CheckboxWithLabel label="Multiline text" indeterminate disabled />
        </Grid>
      </Grid>
    </Grid>
  );
};
