import React from 'react'
import './index.css';
import { UserActionBarContainer } from "../../../components";
import { Link,Box,makeStyles, FormControlLabel} from "@material-ui/core";
import { ExportIcon } from "../../../components/Icons/MainIcons";
import DropdownItem from "../../../components/DropdownItem";
import Download from "../../../components/Download";
import clsx from "clsx";
import SearchBar from "../../../components/SearchBar";
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
        <SearchBar style={{ width: 176 }} placeholder="Search products..." />
        </div>
        
        <Box
          display="flex"
          flexDirection="row"
          marginLeft="auto"
          alignItems="center"
          marginRight={3}
        >
          <span className={clsx(classes.separator, classes.menuActionItem)} />
          <Link variant="h5" className={classes.menuActionItem}>
            <ExportIcon className={clsx(classes.icon, classes.singleIcon)} />
            Share
          </Link>
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
