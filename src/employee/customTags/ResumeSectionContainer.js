import React from 'react'
import './resumeSectionContainer.css'

function ResumeSectionContainer({ title, location, occupation, period, desc }) {
    return (
        <div className="resume-repeat-custom-container">
            <div className="section-header">
                <div className="section-title">{title},</div>
                <div className="section-location">{location}, </div>
                <div className="section-occupation">{occupation}</div>
            </div>
            <div className="section-period">{period}</div>
            <div className="section-desc">
                {desc}
            </div>
        </div>
    )
}

export default ResumeSectionContainer
