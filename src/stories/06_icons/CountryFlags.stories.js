import { Grid, SvgIcon } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { HongKongFlag } from "../../components/Icons/CountryFlags";
import IconDisplay from "../../sb-components/IconDisplay";

export default {
  title: "Icons/CountryFlags",
  component: SvgIcon,
};

export const SingleFlag = () => <HongKongFlag />;

export const AllCountryFlags = () => {
  const [flagComponents, setFlagComponents] = useState(null);
  useEffect(() => {
    import("../../components/Icons/CountryFlags").then((comps) => {
      setFlagComponents(comps);
    });
  });

  return (
    <Grid container spacing={4}>
      {flagComponents &&
        Object.entries(flagComponents).map(([name, Flag]) => (
          <IconDisplay Icon={Flag} name={name} key={name} />
        ))}
    </Grid>
  );
};
