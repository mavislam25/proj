import { KanbanColumn, KanbanHeader } from "../../../components";
import React from "react";

export default {
  title: "Layout/Organisms/KanbanColumn",
  component: KanbanColumn,
};

export const Default = () => {
  return (
    <KanbanColumn style={{ height: 459 }} elevation={3}>
      <KanbanHeader title="Text" count={3} />
    </KanbanColumn>
  );
};
