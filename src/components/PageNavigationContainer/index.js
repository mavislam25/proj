import { Paper, withStyles } from "@material-ui/core";

const PageNavigationContainer = withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: 60,
    paddingLeft: theme.spacing(4),
  },
}))(Paper);

export default PageNavigationContainer;
