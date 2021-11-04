import React from 'react'
import './resume.css'
import ResumeSectionContainer from '../customTags/ResumeSectionContainer'
import LittleBox from '../customTags/LittleBox'


function Resume({ showStatusBtn }) {
    return (
        <div className="resume-section">
            <div className="resume-owner-name">Jane Doe</div>
            <div className="resume-owner-location">Jersey City, NJ</div>
            <div className="resume-owner-phone">+1 (201)238-3998</div>
            <div className="resume-owner-email">noreply@example.com</div>
            <div className="resume-owner-intro">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </div>
            <div className="resume-education">
                <div className="resume-title">EDUCATION</div>
                    <ResumeSectionContainer
                        title="School Name"
                        location="Location"
                        occupation="Degree"
                        period="MONTH 20XX - MONTH 20XX"
                        desc=""
                    />
                    <ResumeSectionContainer
                        title="School Name"
                        location="Location"
                        occupation="Degree"
                        period="MONTH 20XX - MONTH 20XX"
                        desc=""
                    />
            </div>
            <div className="resume-work-experience">
                <div className="resume-title">WORK EXPERIENCE</div>
                    <ResumeSectionContainer
                        title="Company"
                        location="Location"
                        occupation="Job Title"
                        period="MONTH 20XX - MONTH 20XX"
                        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
                    />
                    <ResumeSectionContainer
                        title="Company"
                        location="Location"
                        occupation="Job Title"
                        period="MONTH 20XX - MONTH 20XX"
                        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
                    />
            </div>
            <div className="resume-project">
                <div className="resume-title">PROJECTS</div>
                    <ResumeSectionContainer
                        title="Company"
                        location="Location"
                        occupation="Job Title"
                        period="MONTH 20XX - MONTH 20XX"
                        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
                    />
                    <ResumeSectionContainer
                        title="Company"
                        location="Location"
                        occupation="Job Title"
                        period="MONTH 20XX - MONTH 20XX"
                        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore."
                    />
            </div>
            <div className="resume-skills-section">
                <div className="resume-title">SKILLS</div>
                <div className="resume-skill-container">
                    {/* <div className="skill-box-container"><LittleBox text="C++" /></div>
                    <div className="skill-box-container"><LittleBox text="Python" /></div>
                    <div className="skill-box-container"><LittleBox text="Java" /></div>
                    <div className="skill-box-container"><LittleBox text="Node js" /></div>
                    <div className="skill-box-container"><LittleBox text="Flutter" /></div>
                    <div className="skill-box-container"><LittleBox text="React Native" /></div>
                    <div className="skill-box-container"><LittleBox text="Good Communication" /></div>
                    <div className="skill-box-container"><LittleBox text="Team work" /></div>
                    <div className="skill-box-container"><LittleBox text="Fast Learner" /></div>
                    <div className="skill-box-container"><LittleBox text="French" /></div> */}
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
