/**
 * This file contains a set of overrides for Material UI's default theme. Please see the following page to learn more
 * about how to customise the appearance of the components.
 * @see https://material-ui.com/customization/theming/
 *
 * You can find out about the class names by visiting the API page for the component that you are interested in theming.
 **/
import { createMuiTheme } from "@material-ui/core";
import { typography } from "./typography";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { props } from "./props";
import { shadows } from "./shadows";

export const muiTheme = createMuiTheme({
  typography,
  overrides,
  palette,
  props,
  shadows,
});
