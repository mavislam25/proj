import {
  rgbToHex,
  makeStyles,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";
import React from "react";
import { palette } from "../../theme/palette";
import PropTypes from "prop-types";

export default {
  title: "Colors",
};

const useColorItemStyles = makeStyles((theme) => ({
  color: {
    display: "flex",
    alignItems: "center",
    "& div:first-of-type": {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const useColorDisplayStyles = makeStyles((theme) => ({
  group: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const ColorItem = ({ color, name }) => {
  const classes = useColorItemStyles();
  return (
    <Grid item xs={4} className={classes.color}>
      <div style={{ backgroundColor: color }} />
      <div>
        <Typography variant="body2">{name || ""}</Typography>
        <Typography variant="body2" color="textSecondary">
          {rgbToHex(color)}
        </Typography>
      </div>
    </Grid>
  );
};

ColorItem.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export const ColorPalette = () => {
  const classes = useColorDisplayStyles();
  return (
    <div>
      <Typography>
        The Sherpa color palette overrides the official MaterialUI color palette
        which can be found on the{" "}
        <Link href="https://material-ui.com/customization/default-theme/">
          official website
        </Link>
        .{" "}
      </Typography>
      <Typography variant="h3" className={classes.group}>
        Primary Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.primary.main} name={"palette.primary.main"} />
        <ColorItem
          color={palette.primary.light}
          name={"palette.primary.light"}
        />
        <ColorItem color={palette.primary.dark} name={"palette.primary.dark"} />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Secondary Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem
          color={palette.secondary.main}
          name={"palette.secondary.main"}
        />
        <ColorItem
          color={palette.secondary.light}
          name={"palette.secondary.light"}
        />
        <ColorItem
          color={palette.secondary.dark}
          name={"palette.secondary.dark"}
        />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Success / Green Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.success.main} name={"palette.success.main"} />
        <ColorItem
          color={palette.success.light}
          name={"palette.success.light"}
        />
        <ColorItem color={palette.success.dark} name={"palette.success.dark"} />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Warning Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.warning.main} name={"palette.warning.main"} />
        <ColorItem
          color={palette.warning.light}
          name={"palette.warning.light"}
        />
        <ColorItem color={palette.warning.dark} name={"palette.warning.dark"} />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Error Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.error.main} name={"palette.error.main"} />
        <ColorItem color={palette.error.light} name={"palette.error.light"} />
        <ColorItem color={palette.error.dark} name={"palette.error.dark"} />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Info Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.info.main} name={"palette.info.main"} />
        <ColorItem color={palette.info.light} name={"palette.info.light"} />
        <ColorItem color={palette.info.dark} name={"palette.info.dark"} />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Accent Colors
      </Typography>
      <Typography gutterBottom>
        Accent colors are not officially supported in MaterialUI so they cannot
        be set using the color prop. You can assign colors to a component using
        the makeStyles function or withStyles HOC.
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.accent.teal} name={"palette.accent.teal"} />
        <ColorItem
          color={palette.accent.lightBlue}
          name={"palette.accent.lightBlue"}
        />
        <ColorItem
          color={palette.accent.purple}
          name={"palette.accent.purple"}
        />
        <ColorItem
          color={palette.accent.lidlRed}
          name={"palette.accent.lidlRed"}
        />
        <ColorItem
          color={palette.accent.lidlBlue}
          name={"palette.accent.lidlBlue"}
        />
        <ColorItem
          color={palette.accent.lidlYellow}
          name={"palette.accent.lidlYellow"}
        />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Text Colors
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.text.primary} name={"palette.text.primary"} />
        <ColorItem
          color={palette.text.secondary}
          name={"palette.text.secondary"}
        />
        <ColorItem
          color={palette.text.disabled}
          name={"palette.text.disabled"}
        />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Common Color
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.common.white} name={"palette.common.white"} />
      </Grid>

      <Typography variant="h3" className={classes.group}>
        Grays
      </Typography>
      <Grid container spacing={2}>
        <ColorItem color={palette.grey["900"]} name={"palette.grey['900']"} />
        <ColorItem color={palette.grey["700"]} name={"palette.grey['700']"} />
        <ColorItem color={palette.grey["600"]} name={"palette.grey['600']"} />
        <ColorItem color={palette.grey["500"]} name={"palette.grey['500']"} />
        <ColorItem color={palette.grey["400"]} name={"palette.grey['400']"} />
        <ColorItem color={palette.grey["300"]} name={"palette.grey['300']"} />
        <ColorItem color={palette.grey["200"]} name={"palette.grey['200']"} />
        <ColorItem color={palette.grey["50"]} name={"palette.grey['50']"} />
      </Grid>
    </div>
  );
};
