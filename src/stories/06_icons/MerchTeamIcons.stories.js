import { Grid, SvgIcon } from "@material-ui/core";
import * as MerchTeamIconComponents from "../../components/Icons/MerchTeams";
import { AllAllTeamIcon } from "../../components/Icons/MerchTeams";

import React from "react";
import IconDisplay from "../../sb-components/IconDisplay";

export default {
  title: "Icons/MerchTeamIcons",
  component: SvgIcon,
};

export const SingleIcon = () => <AllAllTeamIcon />;

export const AllIcons = () => (
  <Grid container spacing={4}>
    {Object.entries(MerchTeamIconComponents).map(([name, TeamIcon]) => (
      <IconDisplay Icon={TeamIcon} name={name} key={name} />
    ))}
  </Grid>
);
