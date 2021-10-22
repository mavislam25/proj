import React from 'react'
import { Paper,Typography ,Table,TableHead, TableBody, TableRow,TableCell} from "@material-ui/core";
import './index.css';
import PropTypes from "prop-types";

  const ExampleStatusRow = ({ row, onClickCollapse }) => {
    return (
      <>
        <TableCell id="cell" width={100} >{row.Commodity}</TableCell>
        <TableCell id="cell" width={100} >{row.Country}</TableCell>
        <TableCell id="cell" width={100} >{row.Latestprice}</TableCell>
        <TableCell id="cell" width={100} >{row.Date}</TableCell>
        <TableCell id="cell" width={100} >{row.Source}</TableCell>
      </>
    );
  };
  
  ExampleStatusRow.propTypes = {
    row: PropTypes.shape({
      Commodity: PropTypes.string.isRequired,
      Country: PropTypes.number.isRequired,
      Latestprice: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
      Source: PropTypes.string.isRequired,
      previous: PropTypes.arrayOf(
        PropTypes.shape({
          Commodity: PropTypes.string.isRequired,
          Country: PropTypes.number.isRequired,
          Latestprice: PropTypes.string.isRequired,
          Date: PropTypes.string.isRequired,
          Source: PropTypes.string.isRequired,
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
          id: "Commodity",
          title: "Commodity",
        },
        {
          id: "Country",
          title: "Country",
        },
        {
          id: "Latestprice",
          title: "Latest Price",
        },
        {
          id: "Date",
          title:"Date"
        },
        {
          id: "Source",
          title: "Source",
        },
      ];
    
      const data = [
        {
          id: 1,
          Commodity: "100",
          Country: "China",
          Latestprice: "100",
          Date: "12 July 20201",
          Source: "Mintec",
        },
        {
          id: 2,
          Commodity: "5%",
          Country: "China",
          Latestprice: "5%",
          Date: "12 July 20201",
          Source: "Emerging TX",
        },
        {
            id: 3,
            Commodity: "5%",
            Country: "China",
            Latestprice: "5%",
            Date: "12 July 20201",
            Source: "Mintec",
          },
      ];
    return (
        <Paper className="history" elevation={2}>
            <div className="record">
                <div className="recent">
                    <Typography variant="h2"className="recentlyvisited">Recently visited:</Typography>
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

