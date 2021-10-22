import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Box,
  TableCell,
  Checkbox,
  TableSortLabel,
  Link,
  IconButton,
  Collapse,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { StatusTag, TableField } from "../../../components";
import { CaretUpIcon } from "../../../components/Icons/Carets";
import PropTypes from "prop-types";
import SherpaInlineChildRowContainer from "../../../components/SherpaInlineChildRowContainer";
import SherpaInlineChildRow from "../../../components/SherpaInlineChildRow";

export default {
  title: "Tables/Examples/Table",
  component: Table,
};

const threeSfRegex = /^\d(\.\d{0,3}?)?$/;

const ExampleStatusRow = ({ row, onClickCollapse }) => {
  return (
    <>
      <TableCell width={150}>
        <Link>{row.ian}</Link>
      </TableCell>
      <TableCell width={150}>{row.department}</TableCell>
      <TableCell width={150}>
        {row?.previous?.length + 1 || row.version}&nbsp;
        {row?.previous ? (
          <IconButton
            style={{ paddingLeft: 0, paddingBottom: 14 }}
            disabled={row.previous && !row.previous.length}
            onClick={onClickCollapse}
          >
            <CaretUpIcon style={{ fontSize: 5 }} />
          </IconButton>
        ) : null}
      </TableCell>
      <TableCell width={150}>
        <StatusTag
          variant={row.status === "Sent & Accepted" ? "level4" : "level5"}
          label={row.status}
        />
      </TableCell>
      <TableCell width={150}>{row.stage}</TableCell>
      <TableCell width={150}>{row.reference}</TableCell>
      <TableCell width={150}>{row.lastUpdated}</TableCell>
    </>
  );
};

ExampleStatusRow.propTypes = {
  row: PropTypes.shape({
    ian: PropTypes.string.isRequired,
    version: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    stage: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    previous: PropTypes.arrayOf(
      PropTypes.shape({
        ian: PropTypes.string.isRequired,
        version: PropTypes.number.isRequired,
        department: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        stage: PropTypes.string.isRequired,
        reference: PropTypes.string.isRequired,
        lastUpdated: PropTypes.string.isRequired,
      })
    ),
  }),
  onClickCollapse: PropTypes.func.isRequired,
};

ExampleStatusRow.defaultProps = {
  previous: null,
};

export const TableHeader = () => {
  const [isSelected, setIsSelected] = useState();
  const headCells = [
    {
      id: "titleItem",
      title: "Title Item",
      sortable: false,
      isNumeric: false,
    },
    {
      id: "sortableItem",
      title: "Sortable Item",
      sortable: true,
      isNumeric: false,
    },
    {
      id: "longItem",
      title: "Very Very Long Title Header Item",
      sortable: false,
      isNumeric: false,
    },
  ];

  const handleSelectAll = () => {
    setIsSelected((isSelected) => !isSelected);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" style={{ width: 140 }}>
            <Checkbox
              style={{ marginLeft: 6 }}
              onClick={handleSelectAll}
              selected={isSelected}
            />
            Checkable Item
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              style={{ width: 130 }}
              align={headCell.isNumeric ? "left" : "center"}
            >
              {headCell.title}
              {headCell.sortable && (
                <TableSortLabel active direction={"desc"} />
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </Table>
  );
};

export const DefaultRow = () => {
  const data = {
    linkItem: "Link Item xyz",
    status: "In Progress",
    lineItem1: "Line Item xyz",
    lineItem2: "Line Item xyz",
    number1: null,
    number2: 1.36,
  };
  return (
    <Table style={{ width: 800 }}>
      <TableRow hover>
        <TableCell>
          <Link>{data.linkItem}</Link>
        </TableCell>
        <TableCell>
          <StatusTag variant="level1" label={data.status} />
        </TableCell>
        <TableCell>{data.lineItem1}</TableCell>
        <TableCell>{data.lineItem2}</TableCell>
        <TableCell>
          <TableField
            value={data.number1}
            placeholder="Enter No."
            restrict={threeSfRegex}
            style={{ width: 60 }}
          />
        </TableCell>
        <TableCell>
          <TableField
            value={data.number2}
            placeholder="Enter No."
            restrict={threeSfRegex}
            style={{ width: 60 }}
          />
        </TableCell>
      </TableRow>
    </Table>
  );
};

export const MultiRow = () => {
  const data = [
    {
      id: 1,
      linkItem: "Link Item xyz",
      status: "In Progress",
      lineItem1: "Line Item xyz",
      lineItem2: "Line Item xyz",
      number1: null,
      number2: 1.36,
    },
    {
      id: 2,
      linkItem: "Link Item xyz",
      status: "In Progress",
      lineItem1: "Line Item xyz",
      lineItem2: "Line Item xyz",
      number1: null,
      number2: 1.36,
    },
  ];
  return (
    <Table style={{ width: 800 }}>
      {data.map((rowItem) => (
        <TableRow key={`${rowItem.id}`} hover>
          <TableCell>
            <Link>{rowItem.linkItem}</Link>
          </TableCell>
          <TableCell>
            <StatusTag variant="level1" label={rowItem.status} />
          </TableCell>
          <TableCell>{rowItem.lineItem1}</TableCell>
          <TableCell>{rowItem.lineItem2}</TableCell>
          <TableCell>
            <TableField
              value={rowItem.number1}
              placeholder="Enter No."
              restrict={threeSfRegex}
              style={{ width: 60 }}
            />
          </TableCell>
          <TableCell>
            <TableField
              value={rowItem.number2}
              placeholder="Enter No."
              restrict={threeSfRegex}
              style={{ width: 60 }}
            />
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

const ExampleTableRow = ({
  row: { id, version, linkItem, sortableItem, blankNumber, number },
  level,
}) => {
  return (
    <TableRow
      key={id}
      style={{ backgroundColor: level === 2 && "transparent" }}
    >
      <TableCell padding={level === 2 ? "none" : "checkbox"}>
        <Checkbox style={{ paddingLeft: level === 2 && 0 }} />
      </TableCell>
      <TableCell width={150} align="center">
        <Link>{linkItem}</Link>
      </TableCell>
      <TableCell width={150} align="center">
        {version}{" "}
        {level !== 2 && (
          <IconButton
            style={{ paddingLeft: 0, paddingBottom: 14 }}
            disabled={version < 2}
          >
            <CaretUpIcon style={{ fontSize: 5 }} />
          </IconButton>
        )}
      </TableCell>
      <TableCell width={150} align="center">
        <StatusTag variant="level1" label="In Progress" />
      </TableCell>
      <TableCell width={150} align="center">
        {sortableItem}
      </TableCell>
      <TableCell width={150} align="center">
        <TableField
          value={blankNumber}
          placeholder="Enter No."
          restrict={threeSfRegex}
          style={{ width: 60 }}
        />
      </TableCell>
      <TableCell width={150} align="center">
        <TableField
          value={number}
          placeholder="Enter No."
          restrict={threeSfRegex}
          style={{ width: 60 }}
        />
      </TableCell>
    </TableRow>
  );
};

ExampleTableRow.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    version: PropTypes.number.isRequired,
    linkItem: PropTypes.string.isRequired,
    sortableItem: PropTypes.string.isRequired,
    blankNumber: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  level: PropTypes.number.isRequired,
};

export const TableWithInlineChild = () => {
  const [isOpen, setIsOpen] = useState(true);
  const headCells = [
    {
      id: "ian",
      title: "IAN",
    },
    {
      id: "department",
      title: "Department",
    },
    {
      id: "numberOfChildRecords",
    },
    {
      id: "status",
      title: "Status",
    },
    {
      id: "stage",
      title: "Stage",
    },
    {
      id: "reference",
      title: "Reference",
    },
    { id: "lastUpdated", title: "Last Updated" },
  ];

  const data = [
    {
      id: 1,
      ian: "12345678_1234",
      department: "Household 1",
      status: "Sent & Accepted",
      stage: "RFQ",
      reference: "RFQ-123456",
      lastUpdated: "2 Hours Ago",
      previous: [
        {
          id: 45,
          version: 2,
          ian: "12345678_1234",
          department: "Household 1",
          status: "Sent & Rejected",
          stage: "RFQ",
          reference: "RFQ-123456",
          lastUpdated: "2 Hours Ago",
        },
        {
          id: 78,
          version: 3,
          ian: "12345678_1234",
          department: "Household 1",
          status: "Sent & Rejected",
          stage: "RFQ",
          reference: "RFQ-123456",
          lastUpdated: "2 Hours Ago",
        },
        {
          id: 79,
          version: 3,
          ian: "12345678_1234",
          department: "Household 1",
          status: "Sent & Rejected",
          stage: "RFQ",
          reference: "RFQ-123456",
          lastUpdated: "2 Hours Ago",
        },
      ],
    },
    {
      id: 2,
      ian: "12345678_1234",
      department: "Textiles 4",
      status: "Sent & Accepted",
      stage: "RFQ",
      reference: "RFQ-123456",
      lastUpdated: "2 Hours Ago",
      previous: [],
    },
    {
      id: 3,
      ian: "12345678_1234",
      department: "Textiles 4",
      status: "Sent & Accepted",
      stage: "RFQ",
      reference: "RFQ-123456",
      lastUpdated: "2 Hours Ago",
      previous: [],
    },
  ];

  const handleCollapse = () => {
    setIsOpen((previousValue) => !previousValue);
  };

  return (
    <Box width={900}>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCellData) => (
              <TableCell key={headCellData.id}>{headCellData.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <>
              <TableRow key={row.id} hover>
                <ExampleStatusRow row={row} onClickCollapse={handleCollapse} />
              </TableRow>
              {row.previous.length && isOpen ? (
                <SherpaInlineChildRowContainer colSpan={8} color={"#e5e5e5"}>
                  <Collapse in={isOpen}>
                    {row.previous.map((previousRow) => (
                      <SherpaInlineChildRow key={previousRow.id} hover>
                        <ExampleStatusRow row={previousRow} />
                      </SherpaInlineChildRow>
                    ))}{" "}
                  </Collapse>
                </SherpaInlineChildRowContainer>
              ) : null}
            </>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export const TableWithMultipleHeadRows = () => {
  const headCells = [
    {
      id: "ian",
      title: "IAN",
    },
    {
      id: "department",
      title: "Department",
    },
    {
      id: "numberOfChildRecords",
    },
    {
      id: "status",
      title: "Status",
    },
    {
      id: "stage",
      title: "Stage",
    },
    {
      id: "reference",
      title: "Reference",
    },
    { id: "lastUpdated", title: "Last Updated" },
  ];

  const data = [
    {
      id: 1,
      ian: "12345678_1234",
      department: "Household 1",
      status: "Sent & Accepted",
      stage: "RFQ",
      reference: "RFQ-123456",
      lastUpdated: "2 Hours Ago",
    },
    {
      id: 2,
      ian: "12345678_1234",
      department: "Textiles 4",
      status: "Sent & Accepted",
      stage: "RFQ",
      reference: "RFQ-123456",
      lastUpdated: "2 Hours Ago",
    },
    {
      id: 3,
      ian: "12345678_1234",
      department: "Textiles 4",
      status: "Sent & Accepted",
      stage: "RFQ",
      reference: "RFQ-123456",
      lastUpdated: "2 Hours Ago",
    },
  ];

  return (
    <Box width={900}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={7}>
              <Typography variant="h2">Buyer Negotiation</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>
              <Typography variant="h4">Target</Typography>
            </TableCell>
            <TableCell colSpan={3}>
              <Typography variant="h4">Our Offer</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            {headCells.map((headCellData) => (
              <TableCell key={headCellData.id}>{headCellData.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <>
              <TableRow key={row.id} hover>
                <ExampleStatusRow row={row} />
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
