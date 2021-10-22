import { Paper, withStyles } from "@material-ui/core";

const UserActionBarContainer = withStyles((theme) => ({
  root: {
    height: 50,
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    boxShadow: `0px 3px 3px ${theme.palette.grey["500"]}`,
  },
}))(Paper);

export default UserActionBarContainer;
