import { UserActionBarContainer } from "../../../components";
import { Link, Typography } from "@material-ui/core";
import { FilterIcon } from "../../../components/Icons/MainIcons";
import DropdownItem from "../../../components/DropdownItem";
import DropdownIconLabel from "../../../components/DropdownIconLabel";
import React from "react";
import Box from "@material-ui/core/Box";
import MoreActionsMenu from "../../../components/MoreActionsMenu";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Layout/Organisms/UserActionBar",
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginBottom: -2,
    marginRight: 7,
    fontSize: "inherit",
  },
  singleIcon: {
    marginRight: theme.spacing(1),
  },
  menuActionItem: {
    marginRight: theme.spacing(2.5),
  },
  separator: {
    height: 24,
    width: 1,
    backgroundColor: theme.palette.grey[300],
  },
}));

export const Default = () => {
  const classes = useStyles();
  return (
    <UserActionBarContainer>
      <Typography>
        Main User Task for Page (i.e. search, comment, change status)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        marginLeft="auto"
        alignItems="center"
        marginRight={3}
      >
        <span className={clsx(classes.separator, classes.menuActionItem)} />
        <Link variant="h5" className={classes.menuActionItem}>
          <FilterIcon className={clsx(classes.icon, classes.singleIcon)} />
          Link Default
        </Link>
        <Link variant="h5" className={classes.menuActionItem}>
          <FilterIcon className={clsx(classes.icon, classes.singleIcon)} />
          Link Default
        </Link>
        <MoreActionsMenu>
          <DropdownItem>
            <DropdownIconLabel
              IconComponent={FilterIcon}
              label="Link Default"
            />
          </DropdownItem>
          <DropdownItem>
            <DropdownIconLabel
              IconComponent={FilterIcon}
              label="Link Default"
            />
          </DropdownItem>
          <DropdownItem>
            <DropdownIconLabel
              IconComponent={FilterIcon}
              label="Link Default"
            />
          </DropdownItem>
          <DropdownItem>
            <DropdownIconLabel
              IconComponent={FilterIcon}
              label="Link Default"
            />
          </DropdownItem>
        </MoreActionsMenu>
      </Box>
    </UserActionBarContainer>
  );
};
