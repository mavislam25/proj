import KanbanHeader from "../../../components/KanbanHeader";
import Box from "@material-ui/core/Box";
import React from "react";

export default {
  title: "Layout/Molecules/KanbanHeader",
  component: KanbanHeader,
};

export const Default = () => (
  <Box width={205}>
    <KanbanHeader title={"Text"} count={3} />
  </Box>
);
