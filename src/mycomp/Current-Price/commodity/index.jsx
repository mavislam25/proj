import React from 'react'
import './index.css';
import { Paper,Typography} from '@material-ui/core';

const Index = () => {
    return (
            <Paper elevation={2} className="current-price">
                <div className="data">
                    <Typography variant="h2" className="Price">Current Price</Typography>
                    <Typography variant="h1" className="Pricevalue">123.34</Typography>
                    <div className="high-low">
                        <Typography variant="subtitle2" className="lowest">Lowest:
                            <Typography variant="subtitle2" className="lowestvalue">223.45</Typography>
                        </Typography>
                        <Typography variant="subtitle2" className="highest">Highest:
                            <Typography variant="subtitle2" className="highestvalue">244.45</Typography>
                        </Typography>
                    </div>
                    <div className="datediv">
                        <Typography variant="subtitle2" className="date">Date:
                            <Typography variant="subtitle2" className="datevalue">12 July 2021</Typography>
                        </Typography>
                    </div>
                </div>
                
            </Paper>
    )
}

export default Index
