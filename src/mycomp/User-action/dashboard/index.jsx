import React from 'react'
import './index.css';
import { UserActionBarContainer } from "../../../components";
import {Box,makeStyles, FormControlLabel,Typography} from "@material-ui/core";
import DropdownItem from "../../../components/DropdownItem";
import Download from "../../../components/Download";
import clsx from "clsx";
import { XlsFile,PdfFile } from "../../../components/Icons/FileType";
// import DropdownSubmitButton from "../../../components/DropdownSubmitButton";


const Index = () => {
    const useStyles = makeStyles((theme) => ({
        icon: {
          marginBottom: -2,
          marginRight: 7,
          fontSize: "inherit",
        },
        singleIcon: {
          marginRight: theme.spacing(1),
        },
        menuActionItem: {
          marginRight: theme.spacing(2.5),
        },
        separator: {
          height: 24,
          width: 1,
          backgroundColor: theme.palette.grey[300],
        },
      }));      
    const classes = useStyles();
    return (

        <UserActionBarContainer>
        <div className="action">
        <Typography variant="h2">Fiber Dashboard</Typography>
        </div>
        
        <Box
          display="flex"
          flexDirection="row"
          marginLeft="auto"
          alignItems="center"
          marginRight={3}
        >
          <span className={clsx(classes.separator, classes.menuActionItem)} />
          
          <Download>
            <DropdownItem id="item" onClick={() => alert("Download Excel")}>
                <FormControlLabel control={<XlsFile />} label="Excel" />
            </DropdownItem>
            <DropdownItem id="item" onClick={() => alert("Download PDF")}>
                <FormControlLabel control={<PdfFile /> } label="PDF" />
            </DropdownItem >
          </Download>
        </Box>
      </UserActionBarContainer>
    )
  }

export default Index
