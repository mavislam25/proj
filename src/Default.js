import React, { useState } from "react";
import Menu from './mycomp/menu'
import Topbar from './mycomp/topbar';

const Default = () => {
    const [Selectedpagename, setSeletedpagename]=useState("Dashboard");
    return (
        <div>
            <Menu setSeletedpagename={setSeletedpagename}/>
            <Topbar Selectedpagename={Selectedpagename}/>
        </div>
    )
}

export default Default
