import React from "react";
import {Table,TableHead, TableBody, TableRow, Box,TableCell} from "@material-ui/core";
import PropTypes from "prop-types";
import './index.css';
import {data} from '../../../../data'

const ExampleStatusRow = ({ row, onClickCollapse }) => {
    return (
      <>
        <TableCell id="cell" width={100} >{row.country}</TableCell>
        <TableCell id="cell" width={100} >{row.changes}</TableCell>
        <TableCell id="cell" width={100} >{row.daily}</TableCell>
        <TableCell id="cell" width={100} >{row.weekly}</TableCell>
        <TableCell id="cell" width={100} >{row.threeweeks}</TableCell>
        <TableCell id="cell" width={100} >{row.monthly}</TableCell>
        <TableCell id="cell" width={100} >{row.Apr}</TableCell>
        <TableCell id="cell" width={100} >{row.sixmonths}</TableCell>
        <TableCell id="cell" width={100} >{row.ninemonths}</TableCell>
        <TableCell id="cell" width={100} >{row.yearly}</TableCell>
      </>
    );
  };
  
  // ExampleStatusRow.propTypes = {
  //   row: PropTypes.shape({
  //     changes: PropTypes.string.isRequired,
  //     daily: PropTypes.string.isRequired,
  //     weekly: PropTypes.string.isRequired,
  //     threeweeks: PropTypes.string.isRequired,
  //     monthly: PropTypes.string.isRequired,
  //     Apr: PropTypes.string.isRequired,
  //     sixmonths: PropTypes.string.isRequired,
  //     ninemonths: PropTypes.string.isRequired,
  //     previous: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         changes: PropTypes.string.isRequired,
  //         daily: PropTypes.string.isRequired,
  //         weekly: PropTypes.string.isRequired,
  //         threeweeks: PropTypes.string.isRequired,
  //         monthly: PropTypes.string.isRequired,
  //         Apr: PropTypes.string.isRequired,
  //         sixmonths: PropTypes.string.isRequired,
  //         ninemonths: PropTypes.string.isRequired,
  //       })
  //     ),
  //   }),
  //   onClickCollapse: PropTypes.func.isRequired,
  // };
  
  ExampleStatusRow.defaultProps = {
    previous: null,
  };
const Index = ({country}) => {

    const headCells = [
        {
          id: "country",
          title: "Country",
        },
        {
          id: "changes",
          title: "Changes",
        },
        {
          id: "daily",
          title: "Daily",
        },
        {
          id: "weekly",
          title: "Weekly",
        },
        {
          id: "threeweeks",
          title:"3 Weeks"
        },
        {
          id: "monthly",
          title: "Monthly",
        },
        {
          id: "Apr",
          title: "3 Months",
        },
        {
          id: "sixmonths",
          title: "6 Months",
        },
        {
          id: "ninemonths",
          title: "9 Months",
        },
        {
          id: "yearly",
          title: "1 Year",
        },
      ];
      const con=country;
      console.log("con"+con);
      const China = [
        {
          id: 1.1,
          country:"China",
          changes:"Average",
          daily: "Con",
          weekly: "100",
          threeweeks: "100",
          monthly: "100",
          Apr: "100",
          sixmonths: "100",
          ninemonths: "100",
          yearly: "100",
        },
        {
          id: 1.2,
          changes:"%",
          daily: "5%",
          weekly: "5%",
          threeweeks: "5%",
          monthly: "5%",
          Apr: "5%",
          sixmonths: "5%",
          ninemonths: "5%",
          yearly: "5%",
        },
        {
          id: 2.1,
          country:"NewYork",
          changes:"Average",
          daily: "Con",
          weekly: "100",
          threeweeks: "100",
          monthly: "100",
          Apr: "100",
          sixmonths: "100",
          ninemonths: "100",
          yearly: "100",
        },
        {
          id: 2.2,
          changes:"%",
          daily: "5%",
          weekly: "5%",
          threeweeks: "5%",
          monthly: "5%",
          Apr: "5%",
          sixmonths: "5%",
          ninemonths: "5%",
          yearly: "5%",
        },
        {
          id: 3.1,
          country:"Pakistan",
          changes:"Average",
          daily: "Con",
          weekly: "100",
          threeweeks: "100",
          monthly: "100",
          Apr: "100",
          sixmonths: "100",
          ninemonths: "100",
          yearly: "100",
        },
        {
          id: 3.2,
          changes:"%",
          daily: "5%",
          weekly: "5%",
          threeweeks: "5%",
          monthly: "5%",
          Apr: "5%",
          sixmonths: "5%",
          ninemonths: "5%",
          yearly: "5%",
        },
        {
          id: 4.1,
          country:"India",
          changes:"Average",
          daily: "Con",
          weekly: "100",
          threeweeks: "100",
          monthly: "100",
          Apr: "100",
          sixmonths: "100",
          ninemonths: "100",
          yearly: "100",
        },
        {
          id: 4.2,
          changes:"%",
          daily: "5%",
          weekly: "5%",
          threeweeks: "5%",
          monthly: "5%",
          Apr: "5%",
          sixmonths: "5%",
          ninemonths: "5%",
          yearly: "5%",
        },
        {
          id: 5.1,
          country:"Brazil",
          changes:"Average",
          daily: "Con",
          weekly: "100",
          threeweeks: "100",
          monthly: "100",
          Apr: "100",
          sixmonths: "100",
          ninemonths: "100",
          yearly: "100",
        },
        {
          id: 5.2,
          changes:"%",
          daily: "5%",
          weekly: "5%",
          threeweeks: "5%",
          monthly: "5%",
          Apr: "5%",
          sixmonths: "5%",
          ninemonths: "5%",
          yearly: "5%",
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
            {China.map((row) => (
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

