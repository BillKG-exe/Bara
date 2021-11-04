import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './navigationBar.css'

function NavigationBar(props) {

    return (
        <div className="navigation">
            <div><NavLink className="navigation-link" exact to='/'><HomeIcon fontSize="small" /></NavLink></div>
            <div><NavLink className="navigation-link" to='/search'><MapIcon fontSize="small" /></NavLink></div>
            <div><NavLink className="navigation-link" to='/profile'><PersonIcon fontSize="small" /></NavLink></div>
            <div><ExitToAppIcon className="navigation-link" fontSize="small" /></div>
        </div>  
    )
}

export default NavigationBar
