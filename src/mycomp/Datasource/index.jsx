import React from 'react'
import { Paper,Typography, Switch} from '@material-ui/core';
import './index.css';

const Index = () => {
    return (
        <div>
            <Paper className="datasource" elevation={2}>
                <div className="datasourcecontent">
                    <Typography className="datasourcetitle" variant="h4">Data source</Typography>
                    <div className="commodity1">
                        <Typography className="ET" variant="h3">Emerging TX</Typography>
                        <Switch className="switch"/>
                    </div>
                    <div className="update1">
                            <Typography className="Date" variant="subtitle2" >Date:
                                <Typography className="Datevalue" variant="subtitle2" >12 July 2021</Typography>
                            </Typography>
                    </div>
                    <div className="commodity2">
                        <Typography className="ET" variant="h3">Mintech</Typography>
                        <Switch className="switch"/>
                    </div>
                    <div className="update2">
                            <Typography className="Date" variant="subtitle2" >Date:
                                <Typography className="Datevalue" variant="subtitle2" >12 July 2021</Typography>
                            </Typography>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default Index
