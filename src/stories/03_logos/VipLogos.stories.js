import * as VipLogoComponents from "../../components/Icons/Vip";
import { AccordLogo } from "../../components/Icons/Vip";
import React from "react";
import { Grid, SvgIcon } from "@material-ui/core";
import IconDisplay from "../../sb-components/IconDisplay";

export default {
  title: "Logos/VipLogos",
  component: SvgIcon,
};

export const SingleLogo = () => <AccordLogo />;

export const AllLogos = () => (
  <Grid container spacing={4}>
    {Object.entries(VipLogoComponents).map(([name, Logo]) => (
      <IconDisplay key={name} Icon={Logo} name={name} />
    ))}
  </Grid>
);
