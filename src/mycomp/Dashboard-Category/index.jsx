import React from 'react'
import './index.css';
import { Paper,Typography} from '@material-ui/core';
import Graph from '../Rechart/Dash-Chart/index'
import { data } from '../../data';
import {ExportIcon} from '../../components/Icons/MainIcons'
import Table from './data/index';
import { Link } from "react-router-dom";

const index = ({MaterialDash, title, SeletedCurrency,SeletedUnit}) => {
    return (
        <div>
            <Paper elevation={1} className="dash1">
                <div className="dashcontent">
                    <div className="dashtitle">
                        <Typography variant="h2" >{title}</Typography>
                        <Link to={MaterialDash}>
                        <ExportIcon className='icon'/>
                        </Link>
                    </div>
                    <div className='dashgraph'>
                        <Graph data={data} grid dataKey0="Time" dataKey1="China" dataKey2="NewYork"dataKey3="Pakistan" dataKey4="India"dataKey5="Brazil" Currency={SeletedCurrency} Unit={SeletedUnit}/>
                    </div>
                    <div className='dashtable'>
                        <Table/>
                    </div>
                </div>
            </Paper>
        
        </div>
    )
}

export default index
