import { SvgIcon } from "@material-ui/core";
import React from "react";

import { ReactComponent as AccordSvg } from "../../../assets/logos/vip/accord.svg";
import { ReactComponent as AmforiSvg } from "../../../assets/logos/vip/amfori.svg";
import { ReactComponent as BetterWorkSvg } from "../../../assets/logos/vip/better-work.svg";
import { ReactComponent as CbxSvg } from "../../../assets/logos/vip/cbx.svg";
import { ReactComponent as DisneySvg } from "../../../assets/logos/vip/disney.svg";
import { ReactComponent as EnvironmentalLicenseSvg } from "../../../assets/logos/vip/environmental-license.svg";
import { ReactComponent as SaiSvg } from "../../../assets/logos/vip/sai.svg";

export const AccordLogo = (p) => (
  <SvgIcon component={AccordSvg} viewBox="0 0 30 30" {...p} />
);
AccordLogo.propTypes = SvgIcon.propTypes;
export const AmforiLogo = (p) => (
  <SvgIcon component={AmforiSvg} viewBox="0 0 30 30" {...p} />
);
AmforiLogo.propTypes = SvgIcon.propTypes;
export const BetterWorkLogo = (p) => (
  <SvgIcon component={BetterWorkSvg} viewBox="0 0 30 30" {...p} />
);
BetterWorkLogo.propTypes = SvgIcon.propTypes;
export const CbxLogo = (p) => (
  <SvgIcon component={CbxSvg} viewBox="0 0 30 30" {...p} />
);
CbxLogo.propTypes = SvgIcon.propTypes;
export const DisneyLogo = (p) => (
  <SvgIcon component={DisneySvg} viewBox="0 0 30 30" {...p} />
);
DisneyLogo.propTypes = SvgIcon.propTypes;
export const EnvironmentalLicenseLogo = (p) => (
  <SvgIcon component={EnvironmentalLicenseSvg} viewBox="0 0 30 30" {...p} />
);
EnvironmentalLicenseLogo.propTypes = SvgIcon.propTypes;
export const SaiLogo = (p) => (
  <SvgIcon component={SaiSvg} viewBox="0 0 30 30" {...p} />
);
SaiLogo.propTypes = SvgIcon.propTypes;
