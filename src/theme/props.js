import React from "react";
import { ReactComponent as RadioCheckedIcon } from "../assets/icons/misc/radio-checked.svg";
import { ReactComponent as RadioUncheckedIcon } from "../assets/icons/misc/radio-unchecked.svg";
import { ReactComponent as CheckboxCheckedIcon } from "../assets/icons/misc/checkbox-checked.svg";
import { ReactComponent as CheckboxUncheckedIcon } from "../assets/icons/misc/checkbox-unchecked.svg";
import { ReactComponent as CheckboxIndeterminateIcon } from "../assets/icons/misc/checkbox-indeterminate.svg";
import {
  ConfirmIcon,
  ErrorIcon,
  InformationIcon,
  WarningIcon,
} from "../components/Icons/MainIcons";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "../components/Icons/Chevrons";
import { palette } from "./palette";
import { TableSortDefaultIcon } from "../components/Icons/TableSort";

export const props = {
  MuiButton: {
    disableRipple: true,
    variant: "contained",
    color: "primary",
    size: "small",
  },
  MuiTab: {
    disableRipple: true,
  },
  MuiTabs: {
    textColor: "primary",
    indicatorColor: "primary",
  },
  // Labs components
  MuiToggleButton: {
    disableRipple: true,
  },
  MuiCheckbox: {
    disableRipple: true,
    color: "primary",
    checkedIcon: (
      <CheckboxCheckedIcon height={10} width={10} viewBox="0 0 12 12" />
    ),
    icon: <CheckboxUncheckedIcon height={10} width={10} viewBox="0 0 12 12" />,
    indeterminateIcon: (
      <CheckboxIndeterminateIcon height={10} width={10} viewBox="0 0 12 12" />
    ),
  },
  MuiRadio: {
    disableRipple: true,
    color: "primary",
    checkedIcon: <RadioCheckedIcon />,
    icon: <RadioUncheckedIcon />,
  },
  MuiIconButton: {
    disableRipple: true,
    color: "primary",
  },
  MuiPaper: {
    square: true,
    elevation: 0,
  },
  MuiTextField: {
    variant: "outlined",
    size: "small",
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiMenuItem: {
    disableRipple: true,
  },
  MuiTooltip: {
    arrow: true,
  },
  MuiAlert: {
    iconMapping: {
      error: <ErrorIcon />,
      info: <InformationIcon />,
      success: <ConfirmIcon />,
      warning: <WarningIcon />,
    },
  },
  MuiDialogTitle: {
    disableTypography: true,
  },
  MuiLink: {
    underline: "none",
  },
  MuiAccordion: {
    square: true,
    elevation: 0,
  },
  MuiBreadcrumbs: {
    separator: (
      <ChevronRightIcon style={{ fontSize: 8, color: palette.grey["500"] }} />
    ),
  },
  MuiAccordionSummary: {
    expandIcon: <ChevronDownIcon style={{ fontSize: 14 }} />,
  },
  MuiSnackbar: {
    autoHideDuration: 3000,
  },
  MuiTableSortLabel: {
    IconComponent: TableSortDefaultIcon,
  },
  MuiTableCell: {},
};
