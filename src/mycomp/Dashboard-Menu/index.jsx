import React from 'react'
import './index.css';
import { Paper,Typography} from '@material-ui/core';
import Material from './material/index';
import { AddIcon,ExchangeIcon } from "../../components/Icons/MainIcons";
import { TxCottonKnitTeamIcon,TxWovenTeamIcon,HgOfficeTeamIcon,HgToolsTeamIcon,HgSportsTeamIcon,HgHomeAndGardenTeamIcon} from "../../components/Icons/MerchTeams";


const index = () => {
    return (
            <Paper elevation={2} className="menu">
               <Typography className="defaultdash" variant="h2">
                    Default Dashboards
               </Typography>
               <div className="menudiv">
                    <Material className="materialbox" title="Fibers" link="Dashboard" control={<TxCottonKnitTeamIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="Wood" control={<HgHomeAndGardenTeamIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="Paper" control={<HgOfficeTeamIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="Resin" control={<TxWovenTeamIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="Plastic" control={<HgSportsTeamIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="Steel" control={<AddIcon/>}/>
                    <Material className="materialbox" title="Metal" control={<HgToolsTeamIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="Oil" control={<AddIcon/>}/>
                    <Material className="materialbox" title="Currency" control={<ExchangeIcon className="material-icon"/>}/>
                    <Material className="materialbox" title="others" control={<AddIcon className="material-icon"/>}/>
               </div>
            </Paper>
    )
}

export default index
