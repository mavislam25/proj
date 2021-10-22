import React from "react";
import {Table,TableHead, TableBody, TableRow, Box,TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import './index.css';

const ExampleStatusRow = ({ row }) => {
    return (
      <>
        <TableCell id="cell" width={100} >{row.countries}</TableCell>
        <TableCell id="cell" width={100} >{row.currency}</TableCell>
        <TableCell id="cell" width={100} >{row.Jan}</TableCell>
        <TableCell id="cell" width={100} >{row.Feb}</TableCell>
        <TableCell id="cell" width={100} >{row.Mar}</TableCell>
        <TableCell id="cell" width={100} >{row.Apr}</TableCell>
        <TableCell id="cell" width={100} >{row.May}</TableCell>
        <TableCell id="cell" width={100} >{row.Jun}</TableCell>
        <TableCell id="cell" width={100} >{row.Jul}</TableCell>
        <TableCell id="cell" width={100} >{row.Aug}</TableCell>
        <TableCell id="cell" width={100} >{row.Sep}</TableCell>
        <TableCell id="cell" width={100} >{row.Oct}</TableCell>
        <TableCell id="cell" width={100} >{row.Nov}</TableCell>
        <TableCell id="cell" width={100} >{row.Dec}</TableCell>
      </>
    );
  };
  
  ExampleStatusRow.propTypes = {
    row: PropTypes.shape({
      countries: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      Jan: PropTypes.string.isRequired,
      Feb: PropTypes.string.isRequired,
      Mar: PropTypes.string.isRequired,
      Apr: PropTypes.string.isRequired,
      May: PropTypes.string.isRequired,
      Jun: PropTypes.string.isRequired,
      Jul: PropTypes.string.isRequired,
      Aug: PropTypes.string.isRequired,
      Sep: PropTypes.string.isRequired,
      Oct: PropTypes.string.isRequired,
      Nov: PropTypes.string.isRequired,
      Dec: PropTypes.string.isRequired,
      previous: PropTypes.arrayOf(
        PropTypes.shape({
          countries: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
          Jan: PropTypes.string.isRequired,
          Feb: PropTypes.string.isRequired,
          Mar: PropTypes.string.isRequired,
          Apr: PropTypes.string.isRequired,
          May: PropTypes.string.isRequired,
          Jun: PropTypes.string.isRequired,
          Jul: PropTypes.string.isRequired,
          Aug: PropTypes.string.isRequired,
          Sep: PropTypes.string.isRequired,
          Oct: PropTypes.string.isRequired,
          Nov: PropTypes.string.isRequired,
          Dec: PropTypes.string.isRequired,
        })
      ),
    }),
    onClickCollapse: PropTypes.func.isRequired,
  };
  
  ExampleStatusRow.defaultProps = {
    previous: null,
  };
const Index = ({country}) => {
    const headCells = [
        {
          id: "countries",
          title: "Countries",
        },
        {
          id: "currency",
          title: "Currency",
        },
        {
          id: "Jan",
          title: "Jan",
        },
        {
          id: "Feb",
          title:"Feb"
        },
        {
          id: "Mar",
          title: "Mar",
        },
        {
          id: "Apr",
          title: "Apr",
        },
        {
          id: "May",
          title: "May",
        },
        {
          id: "Jun",
          title: "Jun",
        },
        {
          id: "Jul",
          title: "Jul",
        },
        {
          id: "Aug",
          title:"Aug"
        },
        {
          id: "Sep",
          title: "Sep",
        },
        {
          id: "Oct",
          title: "Oct",
        },
        {
          id: "Nov",
          title: "Nov",
        },
        {
          id: "Dec",
          title: "Dec",
        },
      ];
    
      const data = [
        {
          id: "local",
          countries:country,
          currency: "local",
          Jan: "100",
          Feb: "100",
          Mar: "100",
          Apr: "100",
          May: "100",
          Jun: "100",
          Jul: "100",
          Aug: "100",
          Sep: "100",
          Oct: "100",
          Nov: "100",
          Dec: "100",
        },
        {
          id: "USD",
          currency: "USD",
          Jan: "100",
          Feb: "100",
          Mar: "100",
          Apr: "100",
          May: "100",
          Jun: "100",
          Jul: "100",
          Aug: "100",
          Sep: "100",
          Oct: "100",
          Nov: "100",
          Dec: "100",
        },
      ];
    return (
      <Box >
        <Table>
        <TableHead className="tablehead">
            <TableRow id="cell"width={100} >
                {headCells.map((headCellData) => (
                <TableCell key={headCellData.id} id="cell"width={100} >{headCellData.title}</TableCell>
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

