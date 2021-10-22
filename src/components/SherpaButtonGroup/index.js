import { ToggleButtonGroup } from "@material-ui/lab";
import { withStyles } from "@material-ui/core";

const SherpaButtonGroup = withStyles((theme) => ({
  root: {
    width: "300px",
    borderRadius: "4px 4px 0px 0px",
  },
  groupedHorizontal: {
    borderRadius: "4px 4px 0px 0px",
    backgroundColor: "#FFFFFF",
    color: `${theme.palette.primary.main} !important`,
    "&:last-child": {
      borderRadius: "0px 4px 0px 0px",
    },
    "&:first-child": {
      borderRadius: "4px 0px 0px 0px",
    },
    "&:not(:first-child)": {
      borderLeft: `1px solid ${theme.palette.primary.main}`,
    },
    "&.MuiToggleButton-root": {
      border: `1px solid ${theme.palette.primary.main}`,
      padding: "0px",
      height: "36px",
      textTransform: "none",
      flexGrow: 1,
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: "#FFFFFF !important",
      },
      "&.Mui-selected": {
        border: `1px solid ${theme.palette.primary.light}`,
        backgroundColor: `${theme.palette.primary.main}`,
        color: "#FFFFFF !important",
        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}`,
        },
        "& + .MuiToggleButton-root": {
          borderLeft: `1px solid ${theme.palette.primary.light}`,
        },
      },
    },
  },
}))(ToggleButtonGroup);

export default SherpaButtonGroup;
