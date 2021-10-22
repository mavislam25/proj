import withStyles from "@material-ui/core/styles/withStyles";
import SherpaInput from "../SherpaInput";

const TableField = withStyles(() => ({
  root: {
    "& .MuiOutlinedInput-inputMarginDense": {
      paddingTop: 2,
      paddingBottom: 2,
    },
    "& .MuiOutlinedInput-input": {
      textAlign: "center",
      paddingLeft: 2,
      paddingRight: 2,
    },
  },
}))(SherpaInput);

export default TableField;
