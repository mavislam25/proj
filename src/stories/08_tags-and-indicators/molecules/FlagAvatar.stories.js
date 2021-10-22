import { Avatar } from "@material-ui/core";
import FlagAvatar from "../../../components/FlagAvatar";
import React from "react";
import HongKongFlagSvg from "../../../assets/icons/flags/hong-kong.svg";

export default {
  title: "Tags/Molecules/FlagAvatar",
  component: Avatar,
};

export const Small = () => <FlagAvatar src={HongKongFlagSvg} size="small" />;

export const Medium = () => <FlagAvatar src={HongKongFlagSvg} size="medium" />;

export const Large = () => <FlagAvatar src={HongKongFlagSvg} size="large" />;
