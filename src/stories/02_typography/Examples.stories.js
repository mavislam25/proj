import { Link, Typography } from "@material-ui/core";
import DisabledLink from "../../components/DisabledLink";
import React from "react";
import Box from "@material-ui/core/Box";

export default {
  title: "Typography/Examples",
};

export const Body1Examples = () => (
  <Box width={300}>
    <Typography variant="body1" paragraph>
      Are you sure you want to disable this user? Are you sure you want to
      disable this user? They will not be able to log in the management. Are you
      sure you want to disable this user?
    </Typography>
    <Typography variant="body1">
      Are you sure you want to disable this user? They will not be able to log
      in the management.
    </Typography>
  </Box>
);

export const Body2Examples = () => (
  <Box width={300}>
    <Typography variant="body2" paragraph>
      Are you sure you want to disable this user? Are you sure you want to
      disable this user? They will not be able to log in the management. Are you
      sure you want to disable this user?
    </Typography>
    <Typography variant="body2">
      Are you sure you want to disable this user? They will not be able to log
      in the management.
    </Typography>
  </Box>
);

export const LinkDefault = () => (
  <>
    <Link variant="h5">This is a link</Link>
  </>
);

export const LinkDisabled = () => (
  <>
    <DisabledLink variant="h5">This is a link</DisabledLink>
  </>
);
