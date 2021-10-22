import { Grid, SvgIcon } from "@material-ui/core";
import * as ShippingLogoComponents from "../../components/Icons/Shipping";
import { DhlIcon } from "../../components/Icons/Shipping";
import React from "react";
import IconDisplay from "../../sb-components/IconDisplay";

export default {
  title: "Logos/ShippingLogos",
  component: SvgIcon,
};

export const SingleLogo = () => <DhlIcon />;

export const AllLogos = () => (
  <Grid spacing={4} container>
    {Object.entries(ShippingLogoComponents).map(([name, Logo]) => (
      <IconDisplay key={name} name={name} Icon={Logo} />
    ))}
  </Grid>
);
