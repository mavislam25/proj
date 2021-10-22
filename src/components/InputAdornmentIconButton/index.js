import { IconButton, withStyles } from "@material-ui/core";

const InputAdornmentIconButton = withStyles(() => ({
  root: {
    paddingRight: 0,
    paddingLeft: 8,
  },
}))(IconButton);

export default InputAdornmentIconButton;
