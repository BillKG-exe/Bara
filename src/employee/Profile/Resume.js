import React from 'react'
import './resume.css'
import ResumeSectionContainer from '../customTags/ResumeSectionContainer'
/* import { useState, useEffect } from 'react'
import axios from 'axios' */


function Resume({ showStatusBtn, user, educationList, experienceList, projectsList, skillsList }) {
    return (
        <div className="resume-section">
            <div className="resume-owner-name">{user? user.candidateName : ""}</div>
            <div className="resume-owner-location">Jersey City, NJ</div>
            <div className="resume-owner-phone">{user? user.candidatePhone : ""}</div>
            <div className="resume-owner-email">{user? user.candidateEmail : ""}</div>
            <div className="resume-owner-intro">
                { user? user.introduction : "" }
            </div>
            <div className="resume-education">
                <div className="resume-title">EDUCATION</div>
                {   educationList && (
                        educationList.map((item) => (
                            <ResumeSectionContainer
                                key={item.educationId}
                                title={item.schoolName}
                                location={item.location}
                                occupation={item.degreeEarned}
                                period={`MONTH 20XX - MONTH 20XX`}
                                desc={item.description}
                            />
                        ))
                    )
                }
            </div>
            <div className="resume-work-experience">
                <div className="resume-title">WORK EXPERIENCE</div>
                {
                    experienceList && (
                        experienceList.map((item) => (
                            <ResumeSectionContainer
                                key={item.workId}
                                title={item.companyName}
                                location={item.location}
                                occupation={item.jobTitle}
                                period={`MONTH 20XX - MONTH 20XX`}
                                desc={item.description}
                            />
                        ))
                    )
                }
            </div>
            <div className="resume-project">
                <div className="resume-title">PROJECTS</div>
                {
                    projectsList && (
                        projectsList.map((item) => (
                            <ResumeSectionContainer
                                key={item.projectId}
                                title={item.projectName}
                                location={item.location}
                                occupation={item.jobTitle}
                                period={`MONTH 20XX - MONTH 20XX`}
                                desc={item.description}
                            />
                        ))
                    )
                }
            </div>
            <div className="resume-skills-section">
                <div className="resume-title">SKILLS</div>
                <div className="resume-skill-container">
                    { skillsList? skillsList : "" }
                </div>
            </div>
            <div className="status-btn" style={{display: showStatusBtn? "flex" : "none"}}>
                <button>Interviewed</button>
                <button>Hired</button>
            </div>
        </div>
    )
}

export default Resume
