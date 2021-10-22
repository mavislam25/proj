import React,{ useState} from 'react'
import { Box,Typography} from "@material-ui/core";
import './index.css';
import SidebarMenuItem from '../../../components/SidebarMenuItem'
import Country from './country/index'


const Index = ({open}) => {


    const [isOpen, setisOpen] = useState(false);

    if(!open) return null

    return (
        <div className="navwrapper">
        
            <Box className="fiber">
                <div className="category">
                <Typography variant="h4" className="category-title">
                Commodity
                </Typography>
                </div>
                <div className="Item" onClick={() => setisOpen(!isOpen)}>
                    <SidebarMenuItem title="Cotton" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Polyester" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Viscose" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Acrylic" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Recycled Polyester" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Spandex" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Linen" count={30} />
                </div>
                <div className="Item">
                    <SidebarMenuItem title="Organic Cotton" count={30} />
                </div>
            </Box>

            <Country open={isOpen}/>

            </div> 





    )
}

export default Index
