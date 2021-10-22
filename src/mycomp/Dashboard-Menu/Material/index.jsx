import React from 'react'
import './index.css';
import { Paper, Button} from '@material-ui/core';
import { AddIcon } from "../../../components/Icons/MainIcons";
import { Link } from "react-router-dom";


const index = ({title,link,control}) => {
    return (
            <Paper elevation={2} className="material">
                <div className="contentdiv">
                    {control}
                    <Link to={link} style={{ textDecoration: 'none' }}>
                        <Button className="materialbutton">{title}</Button>
                    </Link>
                </div>
               
            </Paper>
    )
}

export default index
