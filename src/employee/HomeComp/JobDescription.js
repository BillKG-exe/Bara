import React, { useState, useEffect } from 'react'
import './jobDescription.css'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import moment from 'moment'


function JobDescription({ show, hide, jobId}) {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [qualification, setQualifcation] = useState([])
    const [requirement, setRequirement] = useState([])
    const [showJobDescription, setShowJobDescription] = useState(false)
    const [postDate, setPostDate] = useState()
    const [status, setStatus] = useState(false)

    const getDescription = async () => {
        const res = await axios.get(`/employee/jobs/${jobId}`)
        const { job } = res.data
        
        setData(job)
        setQualifcation([...job.qualification.split('/')])
        setRequirement(job.experience.split('/'))
    
        const currentMoment = moment()
        const pastMoment = moment(job.dateOfJobPosted)

        setPostDate(pastMoment.from(currentMoment))
    }

    const getAppliedStatus = async (jobId) => {
        const res = await axios.get(`/employee/application/status/${jobId}`)
        setStatus(res.data.status)
    }

    useEffect(() => {
        
        if(jobId) {
            getDescription()
            getAppliedStatus(jobId)
            setLoaded(true)
        }

        setShowJobDescription(show)
    }, [jobId]);

    const handleShowDescription = () => {
        setShowJobDescription(false)
        hide()
    }

    const updateAppliedStatus = async e => {
        setStatus(true)
        const res = await axios.get(`/employee/add/application/${jobId}`)
    }

    return (
        (jobId && data)? (
            <div className={showJobDescription? "show-job-desc" : "job-desc"}>
                <div className="job-desc-close-icon">
                    <CloseIcon onClick={handleShowDescription} />
                </div>
                <div className="company-header">
                    <img src={data.companyLogo} alt={"company logo"} />
                    <div>
                        <div className='company-name-desc'>{data.companyName}</div>
                        <div className='location-type'>
                            <em className='position-location'>{data.city +", "+ data.country}</em>
                            <div>•</div>
                            <div>{data.jobType}</div>
                            <div>•</div>
                            {<div>{postDate}</div>}
                        </div>
                        <div className='company-position'>{data.jobTitle}</div>
                        {
                            !status? (
                                <div className="apply-btn" onClick={updateAppliedStatus}><button>Apply</button></div>
                            ) : (
                                <div className='applied-status'>You have applied to this job</div>
                            )
                        }
                    </div>
                </div>
                {
                    data.description &&
                        <div className="company-job-desc">
                            <div className="desc-title">Descrition</div>
                            <div className="desc-content">
                                { data.description }
                            </div>
                        </div>
                }
                {
                    data.qualification &&
                        <div className="company-job-qualification">
                            <div className="qualification-title">Qualification</div>
                            <ul className="qualification-content"> 
                               { 
                                    qualification.map((q, index) => (
                                        <div key={Math.random() * 100}>
                                            { q && <li>{q}</li> }
                                        </div>
                                    )) 
                               }
                            </ul>
                        </div>
                }
                <div className="company-job-requirement">
                    <div className="requirement-title">Requirement</div>
                    <ul className="requirement-content">
                        { 
                            requirement.map((q, index) => (
                                <div key={Math.random() * 100}>
                                    { q && <li>{q}</li> }
                                </div>
                            )) 
                        }
                    </ul>
                </div>
            </div>
        ) : (
            <div></div>
        )
    )
}

export default JobDescription