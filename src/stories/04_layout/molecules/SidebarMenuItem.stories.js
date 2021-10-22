import SidebarMenuItem from "../../../components/SidebarMenuItem";
import React from "react";

export default {
  title: "Layout/Molecules/SidebarMenuItem",
  component: SidebarMenuItem,
};

export const Default = () => <SidebarMenuItem title="General Information" />;

export const WithCountBadge = () => (
  <SidebarMenuItem title="Product Details" count={30} />
);
