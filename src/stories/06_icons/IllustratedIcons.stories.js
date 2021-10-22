import { Grid, SvgIcon, Typography } from "@material-ui/core";
import * as IllustratedIconComponents from "../../components/Icons/IllustratedIcons";
import { NotFoundErrorIllustratedIcon } from "../../components/Icons/IllustratedIcons";
import React from "react";

export default {
  title: "Icons/IllustratedIcons",
  component: SvgIcon,
};

export const SingleIcon = () => (
  <NotFoundErrorIllustratedIcon style={{ fontSize: "150px" }} />
);

export const AllIcons = () => (
  <Grid container spacing={4}>
    {Object.entries(IllustratedIconComponents).map(
      ([name, IllustratedIcon]) => (
        <Grid
          key={name}
          item
          xs={3}
          md={2}
          container
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <IllustratedIcon style={{ fontSize: "150px" }} />
          </Grid>
          <Grid item>
            <Typography>{name}</Typography>
          </Grid>
        </Grid>
      )
    )}
  </Grid>
);
