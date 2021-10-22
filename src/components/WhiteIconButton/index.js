// Note that this is not the "true" way to implement white icon buttons, however MaterialUI doesn't support it at the
// moment. This is the workaround proposed in https://github.com/mui-org/material-ui/issues/14185#issuecomment-468945615
// Additionally, there has been some movement on creating a long term solution here:
// https://github.com/mui-org/material-ui/issues/13875

import { IconButton, withStyles } from "@material-ui/core";

const WhiteIconButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.common.white,
    },
  },
}))(IconButton);

export default WhiteIconButton;
