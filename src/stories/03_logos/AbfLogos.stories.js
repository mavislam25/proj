import { Grid, SvgIcon } from "@material-ui/core";
import * as AbfLogoComponents from "../../components/Icons/Abf";
import React from "react";
import { ThreeYearWarrantyLogo } from "../../components/Icons/Abf";
import IconDisplay from "../../sb-components/IconDisplay";

export default {
  title: "Logos/AbfLogos",
  component: SvgIcon,
};

export const SingleLogo = () => <ThreeYearWarrantyLogo />;

export const AbfLogos = () => (
  <Grid container spacing={4}>
    {Object.entries(AbfLogoComponents).map(([name, Logo]) => (
      <IconDisplay key={name} name={name} Icon={Logo} xs={4} md={3} />
    ))}
  </Grid>
);
