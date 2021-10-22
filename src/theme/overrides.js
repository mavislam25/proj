import TitilliumWebExtraLightLatinExtraWoff from "../assets/fonts/TitilliumWeb-ExtraLight-latin-extra.woff2";
import TitilliumWebExtraLightLatinWoff from "../assets/fonts/TitilliumWeb-ExtraLight-latin.woff2";
import TitilliumWebRegularLatinExtWoff from "../assets/fonts/TitilliumWeb-Regular-latin-ext.woff2";
import TitilliumWebRegularLatinWoff from "../assets/fonts/TitilliumWeb-Regular-latin.woff2";
import TitilliumWebSemiBoldLatinExtWoff from "../assets/fonts/TitilliumWeb-SemiBold-latin-ext.woff2";
import TitilliumWebSemiBoldLatinWoff from "../assets/fonts/TitilliumWeb-SemiBold-latin.woff2";
import TitilliumWebBoldLatinExtWoff from "../assets/fonts/TitilliumWeb-Bold-latin.woff2";
import TitilliumWebBoldLatinWoff from "../assets/fonts/TitilliumWeb-Bold-latin-ext.woff2";
import { palette } from "./palette";
import { typography } from "./typography";
import { shadows } from "./shadows";

const TitilliumWebExtraLightLatinExtra = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 200,
  src: `local('Titillium Web ExtraLight'), local('TitilliumWeb-ExtraLight'), url(${TitilliumWebExtraLightLatinExtraWoff}) format('woff2');`,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};
const TitilliumWebExtraLightLatin = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 200,
  src: `local('Titillium Web ExtraLight'), local('TitilliumWeb-ExtraLight'), url(${TitilliumWebExtraLightLatinWoff}) format('woff2');`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};
const TitilliumWebRegularLatinExt = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 400,
  src: `local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(${TitilliumWebRegularLatinExtWoff}) format('woff2');`,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};
const TitilliumWebRegularLatin = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 400,
  src: `local('Titillium Web Regular'), local('TitilliumWeb-Regular'), url(${TitilliumWebRegularLatinWoff}) format('woff2');`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};
const TitilliumWebSemiBoldLatinExt = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 600,
  src: `local('Titillium Web SemiBold'), local('TitilliumWeb-SemiBold'), url(${TitilliumWebSemiBoldLatinExtWoff}) format('woff2');`,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};
const TitilliumWebSemiBoldLatin = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 600,
  src: `local('Titillium Web SemiBold'), local('TitilliumWeb-SemiBold'), url(${TitilliumWebSemiBoldLatinWoff}) format('woff2');`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

const TitilliumWebBoldLatinExt = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 700,
  src: `local('Titillium Web Bold'), local('TitilliumWeb-Bold'), url(${TitilliumWebBoldLatinExtWoff}) format('woff2');`,
  unicodeRange:
    "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
};

const TitilliumWebBoldLatin = {
  fontFamily: "Titillium Web",
  fontStyle: "normal",
  fontWeight: 700,
  src: `local('Titillium Web Bold'), local('TitilliumWeb-Bold'), url(${TitilliumWebBoldLatinWoff}) format('woff2');`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
};

export const overrides = {
  MuiButton: {
    root: {
      boxShadow: "0px 0px !important",
      textTransform: "inherit",
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: palette.primary.light,
      },
      "&:active": {
        backgroundColor: palette.primary.dark,
      },
      "&$disabled": {
        backgroundColor: palette.grey[400],
        color: palette.common.white,
      },
    },
    textPrimary: {
      "&:hover": {
        backgroundColor: "inherit",
      },
    },
    containedSecondary: {
      "&:hover": {
        backgroundColor: palette.secondary.light,
      },
      "&:active": {
        backgroundColor: palette.secondary.dark,
      },
    },
    outlined: {
      border: "1px solid",
      backgroundColor: `${palette.common.white} !important`,
      "&$disabled": {
        borderColor: palette.grey[400],
        color: palette.grey[400],
      },
    },
    outlinedPrimary: {
      borderColor: palette.primary.main,
      color: palette.primary.main,
      "&:hover": {
        borderColor: palette.primary.light,
        color: palette.primary.light,
      },
      "&:active": {
        borderColor: palette.primary.dark,
        color: palette.primary.dark,
      },
    },
    outlinedSecondary: {
      borderColor: palette.secondary.main,
      color: palette.secondary.main,
      "&:hover": {
        borderColor: palette.secondary.light,
        color: palette.secondary.light,
      },
      "&:active": {
        borderColor: palette.secondary.dark,
        color: palette.secondary.dark,
      },
    },
    startIcon: {
      margin: "0 !important",
      paddingRight: "8px",
    },
    sizeSmall: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "16px",
      textTransform: "capitalize",
      minWidth: "100px",
      height: "32px",
      padding: "8px",
    },
    containedSizeSmall: {
      padding: "4px 10px",
    },
  },
  MuiTab: {
    root: {
      textTransform: "none",
      minHeight: "20px",
      height: "20px",
      padding: "0px",
      marginBottom: "5px",
      fontWeight: "400px",
    },
    textColorPrimary: {
      color: palette.primary.main,
      "&$selected": {
        ...typography.h4,
      },
      "&:hover": {
        color: palette.primary.light,
      },
    },
  },
  MuiTabs: {
    root: {
      minHeight: "20px + 5px", // These values come from MuiTab.root (height + padding)
      height: "20px + 5px", // These values come from MuiTab.root (height + padding)
      borderBottom: `1px solid ${palette.grey[300]}`,
    },
  },
  MuiChip: {
    root: {
      borderRadius: "24px",
      height: "20px",
      ...typography.h6,
      "&.labelSmall": {
        padding: "0px",
      },
    },
    label: {
      paddingLeft: "3px",
      paddingRight: "3px",
    },
    sizeSmall: { height: "16px" },
    labelSmall: {
      paddingLeft: "3px",
      paddingRight: "3px",
    },
    iconSmall: {
      height: "12px",
      width: "12px",
    },
  },
  MuiCheckbox: {
    root: {
      color: palette.grey[500],
      backgroundColor: "transparent !important",
      padding: 6,
      "&.Mui-disabled": {
        "& svg > path": {
          fill: palette.grey[200],
        },
      },
      "&:hover": {
        "& + .MuiFormControlLabel-label": {
          color: palette.primary.light,
        },
      },
    },
    colorPrimary: {
      "&$disabled": {
        color: palette.grey[500],
        "& svg": {
          fill: palette.grey[400],
          border: "none",
          borderRadius: "1px",
        },
      },
      "&$indeterminate": {
        color: palette.primary.main,
        "& svg rect:last-child": {
          color: palette.grey[500],
        },
        "&:hover rect:last-child": {
          stroke: palette.primary.main,
        },
      },
    },
  },
  MuiRadio: {
    root: {
      color: palette.grey[500],
      "&$checked": {
        "& + .MuiFormControlLabel-label": {
          "&$disabled": {
            color: palette.grey[400],
          },
        },
      },
      "&$disabled": {
        "& rect": {
          stroke: palette.grey[400],
          fill: palette.grey[200],
        },
        "& path": {
          fill: palette.grey[400],
        },
      },
      "&:hover": {
        backgroundColor: "transparent !important",
      },
    },
  },
  MuiIconButton: {
    root: {
      "&.Mui-disabled": {
        color: palette.grey[400],
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    colorPrimary: {
      "&:hover": {
        color: palette.primary.light,
        backgroundColor: "transparent",
      },
      "&:active": {
        color: palette.primary.dark,
        backgroundColor: "transparent",
      },
    },
    colorSecondary: {
      "&:hover": {
        color: palette.secondary.light,
        backgroundColor: "transparent",
      },
      "&:active": {
        color: palette.secondary.dark,
        backgroundColor: "transparent",
      },
    },
  },
  MuiCssBaseline: {
    "@global": {
      "@font-face": [
        TitilliumWebExtraLightLatinExtra,
        TitilliumWebExtraLightLatin,
        TitilliumWebRegularLatinExt,
        TitilliumWebRegularLatin,
        TitilliumWebSemiBoldLatinExt,
        TitilliumWebSemiBoldLatin,
        TitilliumWebBoldLatinExt,
        TitilliumWebBoldLatin,
      ],
    },
  },
  MuiAccordion: {
    root: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  },
  MuiAccordionSummary: {
    root: {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      boxShadow: `0px 3px 3px ${palette.grey[500]}`,
      minHeight: "auto",
      backgroundColor: palette.grey[200],
      padding: "0px 12px 0px 20px",
      ...typography.h4,
      "&$expanded": {
        minHeight: "auto",
      },
    },
    content: {
      marginTop: 13,
      marginBottom: 16,
      "&$expanded": {
        marginTop: 13,
        marginBottom: 16,
      },
    },
    expandIcon: {
      padding: 0,
      marginRight: 0,
    },
  },
  MuiAccordionDetails: {
    root: {
      padding: "12px 20px",
      boxShadow: shadows[3],
    },
  },
  MuiSwitch: {
    switchBase: {
      color: palette.grey[400],
      "&:hover": {
        color: palette.grey[400],
      },
      "&$checked": {
        color: `${palette.success.main} !important`,
        opacity: 1,
      },
      "&$checked + $track": {
        backgroundColor: `${palette.success.dark} !important`,
        opacity: 1,
      },
      "&$disabled": {
        "&+ $track": {
          opacity: 1,
          backgroundColor: `${palette.grey[400]} !important`,
        },
        "&$checked + $track": {
          backgroundColor: `${palette.success.light} !important`,
          opacity: 1,
        },
        "&$checked": {
          color: `${palette.success.light} !important`,
        },
      },
    },
    thumb: {
      height: 20,
      width: 20,
      boxShadow: `0px 1px 1px ${palette.grey[500]} !important`,
    },
    track: {
      width: 34,
      height: 14,
      backgroundColor: `${palette.grey[500]} !important`,
      opacity: 1,
    },
  },
  MuiFormControlLabel: {
    root: {
      color: palette.grey[900],
      "&:hover": {
        color: palette.primary.light,
      },
    },
  },
  MuiSlider: {
    track: {
      height: 2,
      borderRadius: 2,
    },
    thumb: {
      height: 20,
      width: 20,
      marginTop: -9,
      marginLeft: -9,
      backgroundColor: palette.common.white,
      border: "1px solid currentColor",
      boxShadow: `0px 1px 1px ${palette.grey[500]}`,
      "&$active, &:hover, &:focus": {
        boxShadow: `0px 1px 1px ${palette.grey[500]}`,
      },
    },
    rail: {
      color: palette.grey[300],
      opacity: 1,
    },
  },
  MuiInputLabel: {
    outlined: {
      ...typography.h6,
      transform: "translate(0px, 0px) !important",
      position: "relative !important",
      marginBottom: "2px",
      color: palette.grey[900],
      "&$disabled": {
        color: palette.grey[500],
      },
      "&.Mui-error": {
        color: palette.error.main,
      },
      "&$disabled > .MuiFormLabel-asterisk": {
        visibility: "hidden",
      },
    },
  },
  MuiInputBase: {
    input: {
      ...typography.body1,
      color: palette.grey[700],
      "&::placeholder": {
        color: palette.grey[500],
        opacity: "1 !important",
      },
      "&$disabled": {
        color: palette.grey[500],
      },
    },
  },
  MuiFormLabel: {
    root: {
      ...typography.h6,
      color: palette.grey[900],
      "&$disabled": {
        color: palette.grey[500],
      },
      "&.Mui-error": {
        color: palette.error.main,
      },
    },
    asterisk: {
      color: palette.error.main,
      marginLeft: -2,
    },
  },
  MuiOutlinedInput: {
    root: {
      backgroundColor: palette.input.default,
      "& legend": {
        height: "11px",
        "& span": {
          display: "none",
        },
      },
      "&$disabled": {
        color: palette.grey[500],
        backgroundColor: palette.input.disabled,
      },
      "&.Mui-error": {
        backgroundColor: palette.input.error,
      },
      "& fieldset": {
        borderRadius: "2px",
        borderColor: palette.grey[400],
      },
      "&:hover $notchedOutline": {
        borderColor: palette.grey[400],
      },
      "&$focused $notchedOutline": {
        borderColor: palette.primary.main,
      },
      "&$disabled $notchedOutline": {
        borderColor: palette.input.disabled,
      },
      "&.Mui-error $notchedOutline": {
        borderColor: palette.error.main,
      },
    },
    adornedEnd: {
      paddingRight: "0px",
    },
    inputMarginDense: {
      paddingTop: 7,
      paddingBottom: 9,
    },
    input: {
      "&:not(textarea)": {
        height: 20,
      },
    },
    multiline: {
      alignItems: "stretch",
      "&$marginDense": {
        paddingTop: 6,
        paddingLeft: 8,
        paddingBottom: 8,
        paddingRight: 8,
      },
    },
  },
  MuiTextField: {
    root: {
      "label[data-shrink=false] + & ::-webkit-input-placeholder": {
        opacity: "0.5 !important",
      },
    },
  },
  MuiAutocomplete: {
    inputRoot: {
      height: "36px",
      padding: "7px 39px 9px 14px !important",
    },
    input: {
      padding: "0 !important",
      color: palette.grey[700],
      "&::placeholder": {
        color: palette.grey[500],
      },
    },
    popupIndicator: {
      color: "#5D5D5D",
      "&.Mui-disabled": {
        visibility: "hidden !important",
      },
    },
    paper: {
      boxShadow: `0px 3px 8px ${palette.grey[500]}`,
      margin: 0,
      padding: 4,
      borderRadius: "0 0 4px 4px",
    },
    option: {
      "&:hover": {
        backgroundColor: palette.accent.lightBlue,
      },
    },
    listbox: {
      padding: 0,
    },
    clearIndicator: {
      width: "12px",
      height: "12px",
      margin: "8px",
      marginRight: "2px",
      padding: "2px",
      borderRadius: "50%",
      backgroundColor: palette.grey[500],
      color: palette.common.white,
      "&:hover": {
        backgroundColor: palette.grey[500],
      },
      "& svg": {
        fontSize: "12px",
      },
    },
  },
  MuiFormHelperText: {
    root: {
      ...typography.caption,
      height: "20px",
      "&.Mui-error": {
        color: palette.error.main,
      },
    },
    contained: {
      marginLeft: "0px",
      marginRight: "0px",
    },
    marginDense: {
      marginTop: "0px",
    },
  },
  MuiInputAdornment: {
    positionStart: {
      marginRight: 6,
    },
    positionEnd: {
      marginLeft: 6,
    },
  },
  MuiMenu: {
    list: {
      paddingRight: 4,
      paddingLeft: 4,
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: "0px 0px 4px 4px",
      "&:last-child": {
        borderRadius: "0px 0px 4px 4px",
      },
    },
    paper: {
      marginTop: 8,
      borderRadius: "0px 0px 4px 4px",
    },
  },
  MuiMenuItem: {
    root: {
      height: "32px !important",
      ...typography.h5,
      "&:hover": {
        backgroundColor: palette.accent.lightBlue,
      },
      "&.MuiListItem-gutters": {
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: palette.grey[900],
      padding: "4px 10px 4px 10px",
      filter: `drop-shadow(${shadows[3]})`,
      ...typography.subtitle2,
    },
    arrow: {
      color: palette.grey[900],
    },
    tooltipPlacementTop: {
      // Overrides the media queries since Sherpa isn't responsive
      margin: "0px !important",
    },
    tooltipPlacementRight: {
      margin: "0px !important",
    },
    tooltipPlacementBottom: {
      margin: "0px !important",
    },
    tooltipPlacementLeft: {
      margin: "0px !important",
    },
  },
  MuiAlert: {
    root: {
      ...typography.h4,
      height: 36,
      width: 500,
      paddingLeft: 12,
      paddingRight: 12,
      alignItems: "center",
    },
    icon: {
      color: `${palette.common.white} !important`,
      marginRight: 15,
      height: 20,
      width: 20,
      padding: 0,
      "& svg": {
        height: 20,
        width: 20,
      },
    },
    message: {
      padding: 0,
    },
    action: {
      marginRight: 0,
    },
    standardSuccess: {
      backgroundColor: palette.success.main,
      color: palette.error.contrastText,
    },
    standardWarning: {
      backgroundColor: palette.warning.main,
      color: palette.error.contrastText,
    },
    standardError: {
      backgroundColor: palette.error.main,
      color: palette.error.contrastText,
    },
    standardInfo: {
      backgroundColor: palette.info.main,
      color: palette.info.contrastText,
    },
  },
  MuiDialogTitle: {
    root: {
      position: "relative",
      padding: "14px 30px 14px 20px",
      minHeight: "45px",
      color: palette.grey[900],
      background: palette.grey[200],
      boxShadow: `0px 3px 3px ${palette.grey[500]}`,
      ...typography.h4,
    },
  },
  MuiStepIcon: {
    root: {
      color: palette.grey[400],
      "&$active": {
        color: palette.accent.teal,
      },
      "&$completed": {
        color: palette.success.main,
      },
    },
    text: {
      ...typography.h5,
      "&$completed": {
        ...typography.h4,
      },
    },
  },
  MuiStepLabel: {
    label: {
      ...typography.h5,
      color: palette.text.primary,
      "&$completed, &$active": {
        color: palette.text.primary,
      },
      "&$active": {
        ...typography.h4,
      },
    },
    iconContainer: {
      paddingRight: 8,
    },
  },
  MuiStepper: {
    root: {
      padding: 0,
    },
  },
  MuiStep: {
    horizontal: {
      paddingLeft: 12,
      paddingRight: 12,
      "&:first-child": {
        paddingLeft: 0,
      },
      "&:last-child": {
        paddingRight: 0,
      },
    },
  },
  MuiLink: {
    root: {
      color: palette.primary.main,
      "&:hover": {
        color: palette.primary.light,
      },
      "&:active": {
        color: palette.primary.dark,
      },
    },
  },
  MuiBreadcrumbs: {
    ol: {
      alignItems: "flex-end",
    },
    separator: {
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 6,
    },
  },
  MuiDialog: {
    paper: {
      borderRadius: 4,
      boxShadow: shadows[4],
    },
    paperWidthXs: {
      maxWidth: "340px",
      width: "340px",
    },
  },
  MuiDialogContent: {
    root: {
      padding: "32px 20px 12px 20px",
      color: palette.text.primary,
      ...typography.body1,
    },
  },
  MuiDialogActions: {
    root: {
      padding: "28px 56px",
      justifyContent: "center",
    },
    spacing: {
      "& > :not(:first-child)": {
        marginLeft: "28px",
      },
    },
  },
  MuiPickersDay: {
    day: {
      color: palette.text.primary,
      margin: "2px 6px",
      width: "24px",
      height: "24px",
      borderRadius: "4px",
      "& .MuiTypography-root": {
        ...typography.h5,
      },
      "&:hover": {
        backgroundColor: palette.primary.light,
        color: palette.common.white,
      },
    },
    current: {
      color: palette.primary.main,
      "& .MuiTypography-root": {
        ...typography.button,
      },
    },
    dayDisabled: {
      color: palette.grey[400],
    },
    daySelected: {
      color: palette.common.white,
      backgroundColor: palette.primary.main,
      "& .MuiTypography-root": {
        ...typography.button,
      },
    },
  },
  MuiPickersCalendarHeader: {
    switchHeader: {
      borderBottom: `1px solid ${palette.grey[300]}`,
      marginTop: "26px",
      marginBottom: "0px",
      paddingBottom: "12px",
      color: palette.text.secondary,
    },
    daysHeader: {
      marginTop: "10px",
      height: "28px",
      minHeight: "28px",
    },
    dayLabel: {
      ...typography.body2,
      color: palette.text.secondary,
      width: "32px",
    },
    iconButton: {
      color: palette.primary.main,
      padding: "0px",
      "&.Mui-disabled": {
        color: palette.grey[400],
      },
    },
  },
  MuiPickersBasePicker: {
    container: {
      padding: "0px 8px 0px 8px",
    },
    pickerView: {
      minWidth: "0px",
      minHeight: "0px",
    },
  },
  MuiPickersCalendar: {
    transitionContainer: {
      minHeight: "168px",
      marginTop: "0px",
    },
  },
  MuiBadge: {
    badge: {
      border: `1px solid ${palette.common.white}`,
      height: 16,
      width: 16,
      minWidth: 16,
      "&$anchorOriginTopRightRectangle": {
        transform: "scale(1) translate(35%, -35%);",
      },
      ...typography.notificationNumber,
    },
    dot: {
      height: 10,
      minWidth: 10,
      width: 10,
      borderRadius: 5,
      "&$anchorOriginTopRightRectangle": {
        transform: "scale(1) translate(35%, -25%);",
      },
    },
  },
  MuiTypography: {
    paragraph: {
      "&$h1": {
        marginBottom: 20,
      },
      "&$h2": {
        marginBottom: 4,
      },
      "&$h3": {
        marginBottom: 4,
      },
      "&$h4": {
        marginBottom: 4,
      },
      "&$h5": {
        marginBottom: 4,
      },
      "&$h6": {
        marginBottom: 8,
      },
      "&$body1": {
        marginBottom: 12,
      },
      "&$body2": {
        marginBottom: 8,
      },
      "&$button": {
        marginBottom: 4,
      },
      "&$caption": {
        marginBottom: 0,
      },
    },
  },
  MuiSnackbar: {
    root: {
      "&$anchorOriginBottomCenter": {
        bottom: 36,
      },
    },
  },
  MuiTable: {
    root: {
      borderTop: `1px solid ${palette.grey[300]}`,
    },
  },
  MuiTableHead: {
    root: {
      ...typography.h6,
    },
  },
  MuiTableBody: {
    root: {
      ...typography.body2,
    },
  },
  MuiTableRow: {
    head: {
      backgroundColor: palette.grey[50],
      "&:last-child": {
        backgroundColor: palette.common.white,
      },
    },
    root: {
      height: 48,
      backgroundColor: palette.common.white,
      "&:nth-of-type(odd)": {
        backgroundColor: palette.grey[50],
      },
      "&.Mui-selected": {
        backgroundColor: "#FFFCE3",
      },
      "&.MuiTableRow-root.Mui-selected:hover": {
        backgroundColor: palette.accent.lightBlue,
      },
      "&.MuiTableRow-hover:hover": {
        backgroundColor: `${palette.accent.lightBlue} !important`,
      },
    },
  },
  MuiTableCell: {
    root: {
      padding: 0,
      paddingTop: 2,
      borderBottom: `1px solid ${palette.grey[300]}`,
      "&:first-child": {
        paddingLeft: 30,
      },
      "& .MuiCheckbox-root": {
        marginBottom: 2, // offset due to typography baseline
      },
    },
    paddingNone: {
      "&:first-child": {
        paddingLeft: 0,
      },
    },
    paddingCheckbox: {
      paddingTop: 4,
      "&:first-child": {
        paddingLeft: 30 - 6,
      },
    },
    head: {
      ...typography.h6,
      height: "43px !important",
      alignItems: "center",
      position: "inherit !important",
    },
    body: {
      ...typography.body2,
      height: "48px !important",
    },
  },
  MuiTableSortLabel: {
    root: {
      "& > svg": {
        minWidth: "12px",
      },
    },
    icon: {
      opacity: 1,
    },
    active: {
      "& .MuiTableSortLabel-iconDirectionAsc": {
        "& > path:nth-child(1)": {
          fill: palette.primary.main,
        },
      },
      "& .MuiTableSortLabel-iconDirectionDesc": {
        "& > path:nth-child(2)": {
          fill: palette.primary.main,
        },
      },
    },
    iconDirectionAsc: {
      transform: "none",
    },
    iconDirectionDesc: {
      transform: "none",
    },
  },
  MuiPaper: {
    elevation1: {
      boxShadow: shadows[3],
    },
  },
  MuiTouchRipple: {
    root: {
      visibility: "hidden",
    },
  },
};
overrides["MuiPickersModal"] = {
  dialogRoot: {
    width: "264px",
    minWidth: "264px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    "& .MuiDialogActions-root": {
      padding: "16px",
    },
    "& .MuiDialogActions-spacing": {
      "& > :first-child": {
        ...overrides["MuiButton"].outlined,
        ...overrides["MuiButton"].outlinedPrimary,
      },
      "& > :not(:first-child)": {
        marginLeft: "24px",
      },
    },
  },
};
