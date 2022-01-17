import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './reportHeader.css'
import axios from 'axios'


function ReportHeader({ navigation, update }) {
    const [icon, setIcon] = useState('')

    const getImage = async () => {
        const res = await axios.get('/employer/icon')
        setIcon(res.data.image)
    }

    useEffect(() => {
        getImage()
    }, [])

    return (
        <div className="report-header">
            <div><NavLink className="report-navlink" to="/employer/report/analytics">Analytics</NavLink></div>
            <div><NavLink className="report-navlink" to="/employer/report/jobs">Jobs</NavLink></div>
            <div><NavLink className="report-navlink" to="/employer/report/candidates">Candidates</NavLink></div>
            <div><NavLink className="report-navlink" to="/employer/report/settings">Settings</NavLink></div>
            <div className="flex-space"></div>
            <img src={`/${icon}`} alt="" />
        </div>
    )
}

export default ReportHeader
