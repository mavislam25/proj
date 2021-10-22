import React,{ useState} from 'react'
import { Box,Typography} from "@material-ui/core";
import './index.css';
import SidebarMenuItem from '../../../components/SidebarMenuItem'
import Fiber from '../fiber/index'


const Index = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className="navwrapper">
            <Box className="navbar">
                <div className="category">
                <Typography variant="h4" className="category-title">
                Category
                </Typography>
                </div>
                <div className="Item" onClick={() => setisOpen(!isOpen)}>
                    <SidebarMenuItem title="Fibers" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Wood" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Paper" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Resin" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Plastic" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Steel" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Metal" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Oil" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Others" count={30} />
                </div>
            </Box>

            <Fiber open={isOpen}/>


        </div> 
    )
}

export default Index
