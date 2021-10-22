import { TableCell, TableRow } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useSherpaStyles = makeStyles((theme) => ({
  tableRow: {
    padding: 0,
    border: "none",
  },
  tableCell: {
    padding: 0,
    "&:first-child": {
      paddingLeft: 0,
    },
    border: "none",
    "& tr:not(:last-child)": {
      boxShadow: ({ color }) =>
        `inset 22px 3px 0px -2px ${color || theme.palette.background.default}`,
    },
    "& tr:last-child": {
      boxShadow: ({ color }) =>
        `inset 22px 3px 0px -2px ${
          color || theme.palette.background.default
        }, ${theme.palette.grey["300"]} 0px 1px 0px`,
    },
  },
}));

const SherpaInlineChildRowContainer = ({ colSpan, color, children }) => {
  const classes = useSherpaStyles({ color });
  return (
    <TableRow className={classes.tableRow}>
      <TableCell colSpan={colSpan} className={classes.tableCell}>
        {children}
      </TableCell>
    </TableRow>
  );
};

SherpaInlineChildRowContainer.propTypes = {
  colSpan: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default SherpaInlineChildRowContainer;
