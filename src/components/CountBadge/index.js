import { Chip, makeStyles, withStyles } from "@material-ui/core";

export const useCountBadgeStyles = makeStyles((theme) => ({
  lightBlue: {
    backgroundColor: "#D3E7F4",
    color: theme.palette.primary.main,
  },
  redOutlined: {
    backgroundColor: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.contrastText}`,
    color: theme.palette.error.contrastText,
  },
  transparentOutlined: {
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.grey["600"]}`,
    color: theme.palette.grey["600"],
  },
}));

const CountBadge = withStyles((theme) => ({
  root: ({ size }) => ({
    width: size === "small" ? 20 : 30,
    // Overrides for the small chip, this this is no longer based off
    ...(size === "small" && {
      height: 12,
      ...theme.typography.subtitle1,
    }),
  }),
}))(Chip);

export default CountBadge;
