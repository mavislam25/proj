import { Paper, withStyles } from "@material-ui/core";

const KanbanColumn = withStyles(() => ({
  root: {
    width: 206,
    borderRadius: 4,
  },
}))(Paper);

export default KanbanColumn;
