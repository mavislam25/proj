import { SvgIcon } from "@material-ui/core";
import { ReactComponent as LidlSvg } from "../../../assets/logos/lidl.svg";
import React from "react";

export const LidlIcon = (p) => (
  <SvgIcon component={LidlSvg} viewBox="0 0 115 115" {...p} />
);
LidlIcon.propTypes = SvgIcon.propTypes;
