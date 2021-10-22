import { ReactComponent as TableSortDefaultSvg } from "../../../assets/icons/misc/table-sort-default.svg";
import { ReactComponent as TableSortAscSvg } from "../../../assets/icons/misc/table-sort-asc.svg";
import { ReactComponent as TableSortDescSvg } from "../../../assets/icons/misc/table-sort-desc.svg";
import { SvgIcon } from "@material-ui/core";
import React from "react";

export const TableSortDefaultIcon = (p) => (
  <SvgIcon component={TableSortDefaultSvg} viewBox="0 0 12 12" {...p} />
);
TableSortDefaultIcon.propTypes = SvgIcon.propTypes;

export const TableSortAscIcon = (p) => (
  <SvgIcon component={TableSortAscSvg} viewBox="0 0 12 12" {...p} />
);
TableSortAscIcon.propTypes = SvgIcon.propTypes;

export const TableSortDescIcon = (p) => (
  <SvgIcon component={TableSortDescSvg} viewBox="0 0 12 12" {...p} />
);
TableSortDescIcon.propTypes = SvgIcon.propTypes;
