import { Grid, makeStyles } from "@material-ui/core";
import IconTag from "../../../components/IconTag";
import {
  BoxSolidIcon,
  ManualSolidIcon,
  FactorySolidIcon,
  LabelSolidIcon,
} from "../../../components/Icons/MainSolidIcons";
import {
  BoxIcon,
  ManualIcon,
  FactoryIcon,
  LabelIcon,
} from "../../../components/Icons/MainIcons";
import React from "react";

export default {
  title: "Tags/Molecules/IconTag",
  component: IconTag,
};

const useStyles = makeStyles((theme) => ({
  redRoot: {
    backgroundColor: theme.palette.error.main,
  },
  redIconSmall: {
    color: "#FFFFFF",
  },
  orangeRoot: {
    backgroundColor: theme.palette.warning.main,
  },
  orangeIconSmall: {
    color: "#FFFFFF",
  },
  blackRoot: {
    backgroundColor: theme.palette.grey["900"],
  },
  blackIconSmall: {
    color: theme.palette.grey["400"],
  },
  greenRoot: {
    backgroundColor: theme.palette.success.main,
  },
  greenIconSmall: {
    color: "#FFFFFF",
  },
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <IconTag
          classes={{
            root: classes.greenRoot,
            iconSmall: classes.greenIconSmall,
          }}
          icon={<BoxSolidIcon />}
        />
        <IconTag
          classes={{
            root: classes.greenRoot,
            iconSmall: classes.greenIconSmall,
          }}
          icon={<ManualSolidIcon />}
        />
        <IconTag
          classes={{
            root: classes.greenRoot,
            iconSmall: classes.greenIconSmall,
          }}
          icon={<FactorySolidIcon />}
        />
        <IconTag
          classes={{
            root: classes.greenRoot,
            iconSmall: classes.greenIconSmall,
          }}
          icon={<LabelSolidIcon />}
        />
      </Grid>
      <Grid item xs={12}>
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<BoxSolidIcon />}
        />
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<ManualSolidIcon />}
        />
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<FactorySolidIcon />}
        />
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<LabelSolidIcon />}
        />
      </Grid>
      <Grid item xs={12}>
        <IconTag
          classes={{ root: classes.redRoot, iconSmall: classes.redIconSmall }}
          icon={<BoxSolidIcon />}
        />
        <IconTag
          classes={{ root: classes.redRoot, iconSmall: classes.redIconSmall }}
          icon={<ManualSolidIcon />}
        />
        <IconTag
          classes={{ root: classes.redRoot, iconSmall: classes.redIconSmall }}
          icon={<FactorySolidIcon />}
        />
        <IconTag
          classes={{ root: classes.redRoot, iconSmall: classes.redIconSmall }}
          icon={<LabelSolidIcon />}
        />
      </Grid>
      <Grid item xs={12}>
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<BoxIcon />}
        />
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<ManualIcon />}
        />
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<FactoryIcon />}
        />
        <IconTag
          classes={{
            root: classes.orangeRoot,
            iconSmall: classes.orangeIconSmall,
          }}
          icon={<LabelIcon />}
        />
      </Grid>
      <Grid item xs={12}>
        <IconTag
          classes={{
            root: classes.blackRoot,
            iconSmall: classes.blackIconSmall,
          }}
          icon={<BoxIcon />}
        />
        <IconTag
          classes={{
            root: classes.blackRoot,
            iconSmall: classes.blackIconSmall,
          }}
          icon={<ManualIcon />}
        />
        <IconTag
          classes={{
            root: classes.blackRoot,
            iconSmall: classes.blackIconSmall,
          }}
          icon={<FactoryIcon />}
        />
        <IconTag
          classes={{
            root: classes.blackRoot,
            iconSmall: classes.blackIconSmall,
          }}
          icon={<LabelIcon />}
        />
      </Grid>
    </Grid>
  );
};
