import { Grid, SvgIcon } from "@material-ui/core";
import * as FileIconComponents from "../../components/Icons/FileType";
import { SevenZipFile } from "../../components/Icons/FileType";
import React from "react";
import IconDisplay from "../../sb-components/IconDisplay";

export default {
  title: "Icons/FileTypeIcons",
  component: SvgIcon,
};

export const SingleIcon = () => <SevenZipFile />;

export const AllIcons = () => (
  <Grid container spacing={4}>
    {Object.entries(FileIconComponents).map(([name, FileIcon]) => (
      <IconDisplay Icon={FileIcon} name={name} key={name} />
    ))}
  </Grid>
);
