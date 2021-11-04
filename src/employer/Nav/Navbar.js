import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Navbar(props) {
    const [isMenuClicked, setIsMenuClicked] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(null)

    useEffect(() => {
        const path = window.location.pathname.split("/")

        setCurrentPage(path[path.length - 1].toLowerCase())
        //console.log(currentPage)
    })

    const history = useHistory()

    return (
        <div className="company-navigation-bar">
            <Link to="/employer"><div className="bara-company-logo">BARA</div></Link>
            <div className="company-navigation-links">
                <div><NavLink className="navlink" to='/employer/Dashboard'><div className="company-link">Dashboard</div></NavLink></div>
                <div><NavLink className="navlink" to='/recruit'><div className="company-link">Recruit</div></NavLink></div>
                <div><NavLink className="navlink" to='/employer/report/settings'><div className="company-link">Report</div></NavLink></div>
                <div className="mobile-login">
                    <NavLink className="navlink" to='/employer/login'><div className="company-link">Login</div></NavLink>
                </div>
                <div className="mobile-register">
                    <NavLink className="navlink" to='/employer/register'><div className="company-link">Register</div></NavLink>
                </div>
            </div>
            <div className="company-navbar-auth-btn">
                <button className={currentPage === "login"? "active-nav-auth-btn" : "company-nav-register"}
                    onClick={() => history.push('/employer/login')}>
                    LOGIN
                </button>
                <button className={currentPage === "register"? "active-nav-auth-btn" : "company-nav-register"}
                    onClick={() => history.push('/employer/register')}>
                    REGISTER
                </button>
            </div>
            <div className="company-responsive-mobile-btn">
                {/* To hold menu and close icons */}
            </div>
        </div>
    )
}

export default Navbar
