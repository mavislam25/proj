import React from 'react'
import './index.css';
import { Paper , Typography,Link,makeStyles} from '@material-ui/core';
import { AddIcon } from '../../components/Icons/MainIcons';
import clsx from "clsx";
import Graph from '../Rechart/Dash-Chart/index'
import Change from './table/changes/index'
import Price from './table/price/index'
import {data} from '../../data'


const Index = ({SeletedCountry, SeletedCurrency,SeletedUnit }) => {


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
        <div className="chart-dashtable">
        <Paper className="dashtablecontainer" elevation={1}>
        <div className="chart-table-dashcontent">
            <span className="title">
                <Typography className="materialname" variant="h2">CFCC - Cotton #1 CZCE CN</Typography>
                <Link className="compare" variant="h5">
                    <AddIcon className={clsx(classes.icon, classes.singleIcon)} />
                    Compare
                </Link>
            </span>
            <div className="chart">
                <Graph data={data} grid dataKey0="Time" dataKey1="China" dataKey2="NewYork"dataKey3="Pakistan" dataKey4="India"dataKey5="Brazil" Currency={SeletedCurrency} Unit={SeletedUnit}/>
            </div>
            <div className="changes">
              <Change country={SeletedCountry}/>
            </div>
            <div className="price">
              <Price country={SeletedCountry}/>
              </div>
            </div>
            </Paper>
        </div>
    )
}

export default Index
