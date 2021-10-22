import { ReactComponent as CaretUpSvg } from "../../../assets/icons/misc/caret-up.svg";
import { ReactComponent as CaretDownSvg } from "../../../assets/icons/misc/caret-down.svg";
import { SvgIcon } from "@material-ui/core";
import React from "react";

export const CaretUpIcon = (p) => (
  <SvgIcon component={CaretUpSvg} viewBox="0 0 5 4" {...p} />
);
CaretUpIcon.propTypes = SvgIcon.propTypes;

export const CaretDownIcon = (p) => (
  <SvgIcon component={CaretDownSvg} viewBox="0 0 5 4" {...p} />
);
CaretDownIcon.propTypes = SvgIcon.propTypes;
