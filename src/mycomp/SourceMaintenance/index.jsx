import React from 'react'
import { Paper,Typography ,Table,TableHead, TableBody, TableRow,TableCell,Button} from "@material-ui/core";
import { StatusTag } from '../../components';
import './index.css';
import PropTypes from "prop-types";

  const ExampleStatusRow = ({ row, onClickCollapse }) => {
    return (
      <>
        <TableCell id="cell" width={100} >{row.source}</TableCell>
        <TableCell id="cell" width={100} >{row.category}</TableCell>
        <TableCell id="cell" width={100} ><StatusTag variant="level4" label={row.status} /></TableCell>
        <TableCell id="cell" width={100} >{row.update}</TableCell>
        <TableCell id="cell" width={100} ><input type="file"/><Button>Upload</Button></TableCell>
      </>
    );
  };
  
  ExampleStatusRow.propTypes = {
    row: PropTypes.shape({
      source: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      update: PropTypes.string.isRequired,
      monthly: PropTypes.string.isRequired,
      previous: PropTypes.arrayOf(
        PropTypes.shape({
          source: PropTypes.string.isRequired,
          category: PropTypes.string.isRequired,
          status: PropTypes.string.isRequired,
          update: PropTypes.string.isRequired,
          monthly: PropTypes.string.isRequired,
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
        id: "source",
        title: "Source",
      },
      {
        id: "category",
        title: "Category",
      },
      {
        id: "status",
        title: "Server Status",
      },
      {
        id: "update",
        title:"Latest update"
      },
      {
        id: "Upload",
        title: "Upload",
      },
    ];
  
    const data = [
      {
        id: 1,
        source: "Emerging TX",
        category: "Fibrics",
        status: "Active",
        update: "12 July 2021",
      },
      {
        id: 2,
        source: "Emerging TX",
        category: "Fibrics",
        status: "Active",
        update: "12 July 2021",
      },
      {
          id: 3,
          source: "Mintec",
          category: "Fibrics",
          status: "Active",
          update: "12 July 2021",
        },
    ];
  return (
      <Paper className="sourcepaper" elevation={2}>
          <div className="source">
              <div className="title">
                  <Typography variant="h2"className="CommoditiesSources">Commodities Sources:</Typography>
              </div>
              <Table className="visitrecord">
                  <TableHead className="tablehead">
                      <TableRow width={100} >
                          {headCells.map((headCellData) => (
                          <TableCell key={headCellData.id} width={100} >{headCellData.title}</TableCell>
                          ))}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                  {data.map((row) => (
                      <>
                      <TableRow width={100}  key={row.id} hover>
                          <ExampleStatusRow row={row} />
                      </TableRow>
                      </>
                  ))}
                  </TableBody>
              </Table>
          </div>
      </Paper>
  )
}

export default Index

