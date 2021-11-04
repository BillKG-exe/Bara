import React from 'react'
import { NavLink } from 'react-router-dom'
import './reportHeader.css'

/* isNavSettings: true,
            isNavAnalytics: false,
            isNavJobPsted: false,
            isNavMyCandidates: false */

function ReportHeader({ navigation, update }) {

/*     const handleSetAnaliticsState = (e) => {
        navigation.isNavAnalytics = true
        navigation.isNavJobPsted = false
        navigation.isNavMyCandidates = false
        navigation.isNavSettings = false
        update(navigation)
    }

    const handleSetSettingsState = (e) => {
        navigation.isNavSettings = true
        navigation.isNavAnalytics = false
        navigation.isNavJobPsted = false
        navigation.isNavMyCandidates = false
        update(navigation)
    }

    const handleSetPostsState = (e) => {
        navigation.isNavJobPsted = true
        navigation.isNavAnalytics = false
        navigation.isNavMyCandidates = false
        navigation.isNavSettings = false
        update(navigation)
    }

    const handleSetCandidatesState = (e) => {
        navigation.isNavMyCandidates = true
        navigation.isNavAnalytics = false
        navigation.isNavJobPsted = false
        navigation.isNavSettings = false
        update(navigation)
    }
 */
    return (
        <div className="report-header">
            <div><NavLink className="report-navlink" to="/employer/report/analytics">Analytics</NavLink></div>
            <div><NavLink className="report-navlink" to="/employer/report/jobs">Jobs</NavLink></div>
            <div><NavLink className="report-navlink" to="/employer/report/candidates">Candidates</NavLink></div>
            <div><NavLink className="report-navlink" to="/employer/report/settings">Settings</NavLink></div>
            <div className="flex-space"></div>
            <img src={process.env.PUBLIC_URL +'/img/google.png'} alt="" />
        </div>
    )
}

export default ReportHeader


/* 

        <div className="report-header">
            <div className={ navigation.isNavAnalytics? "active" : "" } onClick={handleSetAnaliticsState}>Analytics</div>
            <div className={navigation.isNavJobPsted? "active" : "" } onClick={handleSetPostsState}>Jobs</div>
            <div className={navigation.isNavMyCandidates? "active" : "" } onClick={handleSetCandidatesState}>Candidates</div>
            <div className={ navigation.isNavSettings? "active" : "" } onClick={handleSetSettingsState}>Settings</div>
            <div className="flex-space"></div>
            <img src={process.env.PUBLIC_URL +'/img/google.png'} alt="" />
        </div>

*/