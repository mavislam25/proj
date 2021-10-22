import { SvgIcon } from "@material-ui/core";
import React from "react";

import { ReactComponent as DhlSvg } from "../../../assets/logos/shipping/dhl.svg";
import { ReactComponent as TntSvg } from "../../../assets/logos/shipping/tnt.svg";

export const DhlIcon = (p) => (
  <SvgIcon component={DhlSvg} viewBox="0 0 30 30" {...p} />
);
DhlIcon.propTypes = SvgIcon.propTypes;
export const TntIcon = (p) => (
  <SvgIcon component={TntSvg} viewBox="0 0 30 30" {...p} />
);
TntIcon.propTypes = SvgIcon.propTypes;
