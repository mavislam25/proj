/**
 * There is no such thing as a disabled link in material UI, however it is required in Sherpa
 */
import { Link, withStyles } from "@material-ui/core";

const DisabledLink = withStyles((theme) => ({
  root: {
    color: theme.palette.grey["500"],
    "&:hover, &:active": {
      color: theme.palette.grey["500"],
    },
  },
}))(Link);

export default DisabledLink;
