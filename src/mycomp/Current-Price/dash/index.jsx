import React from 'react'
import './index.css';
import { Paper,Typography} from '@material-ui/core';

const Index = () => {
    return (
            <Paper elevation={2} className="current-price-dash">
                <div className="data-dash">
                    <Typography variant="h2" className="Price-dash">Current Price</Typography>
                <div className="data1-dash">
                    <div className="Country" >
                     <Typography >CFCC - China</Typography>
                    </div>
                    <Typography variant="h1" className="Pricevalue-dash">123.34</Typography>
                    <div className="high-low-dash">
                        <Typography variant="subtitle2" className="lowest-dash">Lowest:
                            <Typography variant="subtitle2" className="lowestvalue-dash">223.45</Typography>
                        </Typography>
                        <Typography variant="subtitle2" className="highest-dash">Highest:
                            <Typography variant="subtitle2" className="highestvalue-dash">244.45</Typography>
                        </Typography>
                    </div>
                    <div className="datediv-dash">
                        <Typography variant="subtitle2" className="date-dash">Date:
                            <Typography variant="subtitle2" className="datevalue-dash">12 July 2021</Typography>
                        </Typography>
                    </div>
                    </div>
                    <div className="data1-dash">
                    <Typography className="Country">CFCC - NewYork</Typography>
                    <Typography variant="h1" className="Pricevalue-dash">123.34</Typography>
                    <div className="high-low-dash">
                        <Typography variant="subtitle2" className="lowest-dash">Lowest:
                            <Typography variant="subtitle2" className="lowestvalue-dash">223.45</Typography>
                        </Typography>
                        <Typography variant="subtitle2" className="highest-dash">Highest:
                            <Typography variant="subtitle2" className="highestvalue-dash">244.45</Typography>
                        </Typography>
                    </div>
                    <div className="datediv-dash">
                        <Typography variant="subtitle2" className="date-dash">Date:
                            <Typography variant="subtitle2" className="datevalue-dash">12 July 2021</Typography>
                        </Typography>
                    </div>
                    </div>
                    <div className="data1-dash">
                    <Typography className="Country">CFCC - Pakistan</Typography>
                    <Typography variant="h1" className="Pricevalue-dash">123.34</Typography>
                    <div className="high-low-dash">
                        <Typography variant="subtitle2" className="lowest-dash">Lowest:
                            <Typography variant="subtitle2" className="lowestvalue-dash">223.45</Typography>
                        </Typography>
                        <Typography variant="subtitle2" className="highest-dash">Highest:
                            <Typography variant="subtitle2" className="highestvalue-dash">244.45</Typography>
                        </Typography>
                    </div>
                    <div className="datediv-dash">
                        <Typography variant="subtitle2" className="date-dash">Date:
                            <Typography variant="subtitle2" className="datevalue-dash">12 July 2021</Typography>
                        </Typography>
                    </div>
                    </div>
                    <div className="data1-dash">
                    <Typography className="Country">CFCC - India</Typography>
                    <Typography variant="h1" className="Pricevalue-dash">123.34</Typography>
                    <div className="high-low-dash">
                        <Typography variant="subtitle2" className="lowest-dash">Lowest:
                            <Typography variant="subtitle2" className="lowestvalue-dash">223.45</Typography>
                        </Typography>
                        <Typography variant="subtitle2" className="highest-dash">Highest:
                            <Typography variant="subtitle2" className="highestvalue-dash">244.45</Typography>
                        </Typography>
                    </div>
                    <div className="datediv-dash">
                        <Typography variant="subtitle2" className="date-dash">Date:
                            <Typography variant="subtitle2" className="datevalue-dash">12 July 2021</Typography>
                        </Typography>
                    </div>
                    </div>
                    <div className="data1-dash">
                    <Typography className="Country">CFCC - Brazil</Typography>
                    <Typography variant="h1" className="Pricevalue-dash">123.34</Typography>
                    <div className="high-low-dash">
                        <Typography variant="subtitle2" className="lowest-dash">Lowest:
                            <Typography variant="subtitle2" className="lowestvalue-dash">223.45</Typography>
                        </Typography>
                        <Typography variant="subtitle2" className="highest-dash">Highest:
                            <Typography variant="subtitle2" className="highestvalue-dash">244.45</Typography>
                        </Typography>
                    </div>
                    <div className="datediv-dash">
                        <Typography variant="subtitle2" className="date-dash">Date:
                            <Typography variant="subtitle2" className="datevalue-dash">12 July 2021</Typography>
                        </Typography>
                    </div>
                    </div>
                </div>
                
            </Paper>
    )
}

export default Index
