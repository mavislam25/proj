import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const HeaderContainer = withStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0px",
    zIndex: "100",
    backgroundColor: theme.palette.common.white,
    boxShadow: `0px 3px 3px ${theme.palette.grey["500"]}`,
  },
}))(Box);

export default HeaderContainer;
