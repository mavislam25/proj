import React from 'react'
import { Typography,withStyles, Paper } from '@material-ui/core';
import './index.css'
import { Link } from "react-router-dom";
import {ViewAsGridIcon,UploadIcon,MoodboardAttachmentIcon} from '../../../components/Icons/MainIcons'

const Index = ({open,setSeletedpagename}) => {
    const SidebarMenuItemBacker = withStyles((theme) => ({
        root: {
          "&:not(:hover)": {
            backgroundColor: theme.palette.primary.main,
          },
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
          },
          "&:active": {
            backgroundColor: theme.palette.common.white,
          },
          "&:focus": {
            backgroundColor: theme.palette.common.white,
          },
        },
      }))(Paper);
    if(!open) return null
    return (
        <div>
            <Link to="/DashMenu">
                <SidebarMenuItemBacker className="menuitem" onClick={() => setSeletedpagename("Dashboard") }>
                  <ViewAsGridIcon className="drop-icon"/><Typography className="drop" variant="h5" >Dashboard</Typography>
                </SidebarMenuItemBacker>
              </Link>
              <Link to="/Navigation">
                <SidebarMenuItemBacker className="menuitem"  onClick={() => setSeletedpagename("Commodities")}>
                  <MoodboardAttachmentIcon className="drop-icon"/><Typography className="drop" variant="h5">Commodities</Typography>
                </SidebarMenuItemBacker>
              </Link>
              <Link to="/Maintenance">
                <SidebarMenuItemBacker className="menuitem"onClick={() => setSeletedpagename("Source Maintenance")}>
                  <UploadIcon className="drop-icon"/><Typography className="drop" variant="h5">Source Maintenance</Typography>
                </SidebarMenuItemBacker>
              </Link>
        </div>
    )
}

export default Index
