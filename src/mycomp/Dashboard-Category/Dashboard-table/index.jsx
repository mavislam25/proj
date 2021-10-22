import React from "react";
import {Table,TableHead, TableBody, TableRow, Box,TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import './index.css';

const ExampleStatusRow = ({ row }) => {
    return (
      <>
        <TableCell id="cell" width={100} >{row.changes}</TableCell>
        <TableCell id="cell" width={100} >{row.Current}</TableCell>
        <TableCell id="cell" width={100} >{row.Avg}</TableCell>
        <TableCell id="cell" width={100} >{row.Diff}</TableCell>
      </>
    );
  };
  
  ExampleStatusRow.propTypes = {
    row: PropTypes.shape({
      changes: PropTypes.string.isRequired,
      Current: PropTypes.number.isRequired,
      Avg: PropTypes.string.isRequired,
      Diff: PropTypes.string.isRequired,
      previous: PropTypes.arrayOf(
        PropTypes.shape({
          changes: PropTypes.string.isRequired,
          Current: PropTypes.number.isRequired,
          Avg: PropTypes.string.isRequired,
          Diff: PropTypes.string.isRequired,
        })
      ),
    }),
    onClickCollapse: PropTypes.func.isRequired,
  };
  
  ExampleStatusRow.defaultProps = {
    previous: null,
  };
const Index = () => {
    const headCells = [
        {
          id: "changes",
          title: "",
        },
        {
          id: "Current",
          title: "Current",
        },
        {
          id: "Avg",
          title: "Avg",
        },
        {
          id: "Diff",
          title:"Diff %",
        },
      ];
    
      const data = [
        {
          id: 1,
          changes:"China",
          Current: "100",
          Avg: "100",
          Diff: "100"
        },
        {
          id: 2,
          changes:"India",
          Current: "5",
          Avg: "5%",
          Diff: "5%",
        },
        {
            id: 3,
            changes:"Pakistan",
            Current: "5%",
            Avg: "5%",
            Diff: "5%",
          },
      ];
    return (
        <Box >
        <Table>
        <TableHead className="tablehead">
            <TableRow id="cell"width={100} >
                {headCells.map((headCellData) => (
                <TableCell key={headCellData.id} id="cell" width={100} >{headCellData.title}</TableCell>
                ))}
            </TableRow>
        </TableHead>
            <TableBody>
            {data.map((row) => (
                <>
                <TableRow id="cell"width={100}  key={row.id} hover>
                    <ExampleStatusRow row={row} />
                </TableRow>
                </>
            ))}
            </TableBody>
        </Table>
        </Box>
    )
}

export default Index

