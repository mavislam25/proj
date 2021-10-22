import React from 'react'
import { Box,Typography} from "@material-ui/core";
import './index.css';
import SidebarMenuItem from '../../../../components/SidebarMenuItem'
import { Link } from "react-router-dom";

const Index = ({open}) => {
    if(!open) return null
    return (
        
            <Box className="country">
                <div className="category">
                <Typography variant="h4" className="category-title">
                Country
                </Typography>
                </div>
                <div className="Item">
                <Link to="/cotton" style={{textDecoration:'none'}}>
                    <SidebarMenuItem title="China"  />
                </Link>
                </div>
                <div className="Item">
                    <SidebarMenuItem title="New York"  />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="India" />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Pakistan" />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Brazil" />
                </div>
            
            </Box>
    )
}

export default Index
