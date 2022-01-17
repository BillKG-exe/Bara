import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import './header.css'

function Header() {
    const [clicked, setclicked] = useState(false)
    
    const handleClick = (e) => {
        setclicked(!clicked)
    }

    return (
        <div className="header">
            <div className="logo">
                <Link to='/'><div className="">BARA</div></Link>
                <div className="faIcon">
                    <FaBars className={!clicked? "bar-show" : "bar-disable"} onClick={handleClick} />
                    <FaTimes className={clicked? "times-show" : "times-disable"} onClick={handleClick} />
                </div>
            </div>
            <div className={!clicked? "links" : "links-display"}>
                <div><NavLink exact to='/'><div className="link">HOME</div></NavLink></div>
                <div><NavLink to='/search'><div className="link">SEARCH</div></NavLink></div>
                <div><NavLink to='/profile'><div className="link">PROFILE</div></NavLink></div>
                {<div><NavLink to='/com'><div className="link">COMMUNITY</div></NavLink></div>}
                <div className="sign-up-mobile-btn">
                    <Link to='/signIn'>SIGN IN</Link>
                </div>
            </div>
            <div className="log"><Link to='/signIn'>SIGN IN</Link></div>
        </div>
    )
}

export default Header
