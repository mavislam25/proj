import { Button, withStyles } from "@material-ui/core";

const DropdownSubmitButton = withStyles((theme) => ({
  root: {
    borderRadius: "0px 0px 4px 4px",
    boxShadow: `${theme.shadows[3]} !important`,
  },
}))(Button);

export default DropdownSubmitButton;
