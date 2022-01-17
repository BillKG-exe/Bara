import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './navigationBar.css'
import axios from 'axios'
import { useHistory } from "react-router";

function NavigationBar(props) {
    const history = useHistory()

    const handleLogout = async e => {
        const response = await axios.get(`/employee/logout`)
        
        if(response.data.success) {
            history.push('/signin')
        }
    }

    return (
        <div className="navigation">
            <div><NavLink className="navigation-link" exact to='/'><HomeIcon fontSize="small" /></NavLink></div>
            <div><NavLink className="navigation-link" to='/map'><MapIcon fontSize="small" /></NavLink></div>
            <div><NavLink className="navigation-link" to='/profile'><PersonIcon fontSize="small" /></NavLink></div>
            <div><ExitToAppIcon className="navigation-link" fontSize="small" onClick={handleLogout} /></div>
        </div>  
    )
}

export default NavigationBar
