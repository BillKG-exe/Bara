import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { useHistory } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { IoIosLogOut } from 'react-icons/io'
import { FiLogOut } from 'react-icons/fi'
import { HiOutlineLogout } from "react-icons/hi"
import axios from 'axios'



function Navbar(props) {
    const history = useHistory()
    const [isMenuClicked, setIsMenuClicked] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(null)
    const [authenticated, setAuthenticated] = React.useState(false)

    const auth = async () => {
        const res = await axios.get('/employer/authenticated')
        setAuthenticated(res.data.authenticated)
    }

    useEffect(() => {
        const path = window.location.pathname.split("/")

        setCurrentPage(path[path.length - 1].toLowerCase())

        auth()
    }, [])

    const handleLogout = async e => {
        const res = await axios.get('/employer/logout')

        if(res.data.success) {
            history.push('/employer/login')
        }
    }

    

    return (
        <div className="company-navigation-bar">
            <Link to="/employer"><div className="bara-company-logo">BARA</div></Link>
            <div className={isMenuClicked? "company-navigation-links-responsive" : "company-navigation-links"}>
                <div><NavLink className="navlink" to='/employer/Dashboard'><div className="company-link">Dashboard</div></NavLink></div>
                <div><NavLink className="navlink" to='/employer/recruit'><div className="company-link">Recruit</div></NavLink></div>
                <div><NavLink className="navlink" to='/employer/report/settings'><div className="company-link">Report</div></NavLink></div>
                <div className="mobile">
                    <NavLink className="navlink" to='/employer/report/candidates'><div className="company-link">Candidates</div></NavLink>
                </div>
                <div className="mobile">
                    <NavLink className="navlink" to='/employer/report/jobs'><div className="company-link">Jobs</div></NavLink>
                </div>
                <div className="mobile">
                    <NavLink className="navlink" to='/employer/report/analytics'><div className="company-link">Analytics</div></NavLink>
                </div>
                <div className="mobile">
                    <NavLink className="navlink" to='/employer/login'><div className="company-link">Login</div></NavLink>
                </div>
                <div className="mobile">
                    <NavLink className="navlink" to='/employer/register'><div className="company-link">Register</div></NavLink>
                </div>
            </div>
            {
                !authenticated &&
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
            }
            {
                authenticated && 
                    <div className="employer-logout-icon" onClick={handleLogout}>
                        <div className="icon"><HiOutlineLogout /></div>
                        <div className="text">Logout</div>
                    </div>
            }
            <div className="company-responsive-mobile-btn" onClick={() => { setIsMenuClicked(!isMenuClicked) }}>
                {
                    !isMenuClicked? (
                        <MenuIcon />
                    ) : (
                        <CloseIcon />
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
