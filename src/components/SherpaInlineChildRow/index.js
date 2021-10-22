import { TableRow, withStyles } from "@material-ui/core";

const SherpaInlineChildRow = withStyles(() => ({
  root: {
    backgroundColor: "#FFFCE3",
    "& :first-child": {
      borderColor: "transparent",
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFFCE3",
    },
  },
}))(TableRow);

export default SherpaInlineChildRow;
