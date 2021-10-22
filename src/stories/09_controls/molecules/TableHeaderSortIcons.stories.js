import { IconButton } from "@material-ui/core";
import {
  TableSortAscIcon,
  TableSortDefaultIcon,
  TableSortDescIcon,
} from "../../../components/Icons/TableSort";
import React from "react";

export default {
  title: "Controls/Molecules/TableHeadSort",
  component: IconButton,
};

export const Default = () => <IconButton component={TableSortDefaultIcon} />;

export const Ascending = () => <IconButton component={TableSortAscIcon} />;

export const Descending = () => <IconButton component={TableSortDescIcon} />;
