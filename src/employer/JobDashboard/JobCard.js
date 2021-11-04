import React from 'react'
import './jobCard.css'
import PersonIcon from '@material-ui/icons/Person'

function JobCard({ jobPosted }) {
    return (
        <div className="job-card">
            <div className="card-header">
                <div className="title">{jobPosted.title}</div>
                <div className="number-of-applicant">{jobPosted.appliedAcc}</div>
                <PersonIcon className="icon" fontSize="small" />
            </div>
            <div className="qualifications">
                {
                    jobPosted.qualifications.map((qualification, index) => {
                        if(index <= 3){
                            return (
                                <div>
                                    <div id="bullet" >&bull; </div>
                                    <div key={index}>{qualification}</div> 
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="date-posted"><div style={{flex: '1'}}></div>{jobPosted.datePosted}</div>
        </div>
    )
}

export default JobCard
