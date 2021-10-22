import { SvgIcon } from "@material-ui/core";
import { ReactComponent as ChevronUpSvg } from "../../../assets/icons/misc/chevron-up.svg";
import { ReactComponent as ChevronRightSvg } from "../../../assets/icons/misc/chevron-right.svg";
import { ReactComponent as ChevronDownSvg } from "../../../assets/icons/misc/chevron-down.svg";
import { ReactComponent as ChevronLeftSvg } from "../../../assets/icons/misc/chevron-left.svg";
import React from "react";

export const ChevronUpIcon = (p) => (
  <SvgIcon component={ChevronUpSvg} viewBox="0 0 10 10" {...p} />
);
ChevronUpIcon.propTypes = SvgIcon.propTypes;

export const ChevronRightIcon = (p) => (
  <SvgIcon component={ChevronRightSvg} viewBox="0 0 10 10" {...p} />
);
ChevronRightIcon.propTypes = SvgIcon.propTypes;

export const ChevronDownIcon = (p) => (
  <SvgIcon component={ChevronDownSvg} viewBox="0 0 10 10" {...p} />
);
ChevronDownIcon.propTypes = SvgIcon.propTypes;

export const ChevronLeftIcon = (p) => (
  <SvgIcon component={ChevronLeftSvg} viewBox="0 0 10 10" {...p} />
);
ChevronLeftIcon.propTypes = SvgIcon.propTypes;
