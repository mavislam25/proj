import { Badge, SvgIcon } from "@material-ui/core";
import { BellIcon, CommentIcon } from "../../../components/Icons/MainIcons";
import React from "react";

export default {
  title: "Icons/Molecules/Alert",
  component: SvgIcon,
};

export const Alert = () => (
  <Badge color="error" invisible>
    <BellIcon color="primary" style={{ fontSize: 16 }} />
  </Badge>
);

export const AlertWithBadge = () => (
  <Badge color="error" badgeContent={88}>
    <BellIcon color="primary" style={{ fontSize: 16 }} />
  </Badge>
);

export const Comment = () => (
  <Badge color="error" variant="dot" invisible>
    <CommentIcon color="primary" style={{ fontSize: 16 }} />
  </Badge>
);

export const CommentWithBadge = () => (
  <Badge color="error" variant="dot">
    <CommentIcon color="primary" style={{ fontSize: 16 }} />
  </Badge>
);
