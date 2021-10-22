import React,{ useState} from 'react'
import { Box,Typography,Avatar,makeStyles,withStyles, Paper } from '@material-ui/core';
import './index.css'
import { LidlIcon } from '../../components/Icons/LidlLogo';
import clsx from 'clsx';
import {HgHomeAndGardenTeamIcon} from '../../components/Icons/MerchTeams'
import {NegotiationIcon} from '../../components/Icons/MainIcons'
// import CaretDownIcon from '../../stories/09_controls/atoms/Carets.stories'
// import { CaretDownIcon } from "../../components/Icons/Carets";
import Drop from './dropmenu/index'

const Index = ({setSeletedpagename}) => {
    const useAvatarStyles = makeStyles((theme) => ({
        red: {
          backgroundColor: theme.palette.error.main,
        },
        small: {
          height: "16px",
          width: "16px",
          ...theme.typography.subtitle1,
        },
        medium: {
          height: "28px",
          width: "28px",
          ...theme.typography.h4,
        },
        large: {
          height: "48px",
          width: "48px",
          ...theme.typography.h2,
        },
      }));
    const classes = useAvatarStyles();
    const SidebarMenuItemBacker = withStyles((theme) => ({
      root: {
        "&:not(:hover)": {
          backgroundColor: theme.palette.primary.dark,
        },
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
        "&:active": {
          backgroundColor: theme.palette.primary.light,
        },
      },
    }))(Paper);
    const [isDrop, setisDrop] = useState(false);
    return (
        <Box className="menubg">
            <div className="header">
                <LidlIcon className="LidlIcon"/>
                <Typography variant="h4"className="LUP">Lidl Unified Platform</Typography>
            </div>
            <div className="account">
              <Avatar id="UserIcon"className={clsx([classes.medium, classes.red])}>US</Avatar>
                <Typography variant="h5"className="username">User</Typography>
              {/* <IconButton className="caret" component={CaretDownIcon} /> */}
            </div>
            <div className="account">
              <Avatar id="UserIcon"className={clsx([classes.medium, classes.red])}>US</Avatar>
                <Typography variant="h5"className="username">User</Typography>
              {/* <IconButton className="caret" component={CaretDownIcon} /> */}
            </div>
            <div className="Itemexpend">
              <SidebarMenuItemBacker className="menuitem">
              <HgHomeAndGardenTeamIcon className="home-icon"/><Typography className="home" variant="h5" >Home</Typography>
              </SidebarMenuItemBacker>
                <SidebarMenuItemBacker className="menuitem" onClick={() => setisDrop(!isDrop) }>  
                  <NegotiationIcon className="tracker-icon"/><Typography className="tracker" variant="h5">Commodities Tracker</Typography>
                </SidebarMenuItemBacker>
              <Drop open={isDrop} setSeletedpagename={setSeletedpagename}/>
            </div>
        </Box>
    )
}

export default Index
