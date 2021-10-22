import { Paper, withStyles } from "@material-ui/core";

const ContentCardContainer = withStyles((theme) => ({
  root: {
    padding: "12px 20px",
    backgroundColor: theme.palette.background.default,
  },
}))(Paper);

export default ContentCardContainer;
