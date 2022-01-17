import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import FilterListIcon from '@material-ui/icons/FilterList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MapIcon from '@material-ui/icons/Map'
import './searchNav.css'

function SearchNav({ updateFilterToggle }) {

    return (
        <div className="search-nav">
            <div className="search-nav-logo">Bara</div>
            <div className="search-nav-icons">
                <div><NavLink exact to="/"><div className="search-icon"><HomeIcon /></div></NavLink></div>
                <div><NavLink to="/search"><div className="search-icon"><MapIcon style={{color: "#6400e1"}} /></div></NavLink></div>
                <div><div className="search-icon"><FilterListIcon /* onClick={handleToggleFilter} */ /></div></div>
                <div><NavLink to="/profile"><div className="search-icon"><AccountCircleIcon /></div></NavLink></div>
            </div>
        </div>
    )
}

export default SearchNav
