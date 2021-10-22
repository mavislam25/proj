import React from "react";
import CountBadge, {
  useCountBadgeStyles,
} from "../../../components/CountBadge";
import { Grid } from "@material-ui/core";

export default {
  title: "Tags/Molecules/CountBadge",
  component: CountBadge,
};

export const Default = () => {
  const classes = useCountBadgeStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CountBadge size="medium" color="primary" label="43" />
      </Grid>
      <Grid item xs={12}>
        <CountBadge
          size="medium"
          classes={{ root: classes.lightBlue }}
          label="43"
        />
      </Grid>
      <Grid item xs={12}>
        <CountBadge
          size="medium"
          classes={{ root: classes.redOutlined }}
          label="1"
        />
      </Grid>
      <Grid item xs={12}>
        <CountBadge
          size="medium"
          classes={{ root: classes.transparentOutlined }}
          label="2"
        />
      </Grid>
      <Grid item xs={12}>
        <CountBadge size="small" color="primary" label="2" />
      </Grid>
    </Grid>
  );
};
