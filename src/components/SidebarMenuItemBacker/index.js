import { Paper, withStyles } from "@material-ui/core";

const SidebarMenuItemBacker = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}))(Paper);

export default SidebarMenuItemBacker;
