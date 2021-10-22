import React from 'react'
import './index.css';
import { Paper,Typography, Divider,IconButton} from '@material-ui/core';
import { AddElementIcon } from "../../components/Icons/MainIcons";
const Index = () => {
    return (
            <Paper elevation={2} className="currency">
                <div className="content">
                    <Typography variant="h2" className="currencytitle">Currency</Typography>
                </div>
                <Divider/>   
                <div className="rate">
                    <Typography variant="h4" className="currencyname" >
                        EUR/USD
                    </Typography>
                    <Typography variant="h3" className="currencyvalue">
                        123.45
                    </Typography>
                    <Typography variant="h3" className="currencypercentage">
                        -5%
                    </Typography>
                </div>
                <Divider/> 
                <div className="rate">
                    <Typography variant="h4" className="currencyname" >
                        EUR/USD
                    </Typography>
                    <Typography variant="h3" className="currencyvalue">
                        123.45
                    </Typography>
                    <Typography variant="h3" className="currencypercentage">
                        -5%
                    </Typography>
                </div>
                <Divider/> 
                <div className="rate">
                    <Typography variant="h4" className="currencyname" >
                        EUR/USD
                    </Typography>
                    <Typography variant="h3" className="currencyvalue">
                        123.45
                    </Typography>
                    <Typography variant="h3" className="currencypercentage">
                        -5%
                    </Typography>
                </div>
                <Divider/> 
                <div className="addcurrency">
                    <IconButton>
                        <AddElementIcon />
                    </IconButton>
                </div>
            </Paper>
    )
}

export default Index