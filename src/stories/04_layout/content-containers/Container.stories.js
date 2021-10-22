import React from "react";
import HeaderContainer from "../../../components/HeaderContainer";
import PageNavigationContainer from "../../../components/PageNavigationContainer";
import UserActionBarContainer from "../../../components/UserActionBarContainer";
import { makeStyles, Paper } from "@material-ui/core";

export default {
  title: "Layout/ContentContainers/Container",
  component: Paper,
};

export const Default = () => <Paper style={{ width: 250, height: 250 }} />;

export const Elevation1 = () => (
  <Paper elevation={1} style={{ width: 250, height: 250 }} />
);

export const Elevation2 = () => (
  <Paper elevation={2} style={{ width: 250, height: 250 }} />
);

const useException2Styles = makeStyles((theme) => ({
  root: {
    boxShadow: `0px 3px 3px ${theme.palette.grey["500"]}`,
  },
}));

export const Exception2 = () => {
  const classes = useException2Styles();
  return <Paper className={classes.root} style={{ width: 250, height: 250 }} />;
};

export const Elevation3 = () => (
  <Paper elevation={3} style={{ width: 250, height: 250 }} />
);

const useException3Styles = makeStyles((theme) => ({
  root: {
    boxShadow: `0px 3px 8px ${theme.palette.grey["500"]}`,
  },
}));

export const Exception3 = () => {
  const classes = useException3Styles();
  return <Paper className={classes.root} style={{ width: 250, height: 250 }} />;
};

export const Elevation4 = () => (
  <Paper elevation={4} style={{ width: 250, height: 250 }} />
);

export const Header = () => (
  <HeaderContainer>
    <PageNavigationContainer>This is the header</PageNavigationContainer>
    <UserActionBarContainer>This is the user action bar</UserActionBarContainer>
  </HeaderContainer>
);

// Note that MaterialUI supports 24 levels of elevation, however Sherpa currently has two defined
