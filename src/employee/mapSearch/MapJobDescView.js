import './MapJobDescView.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import CloseIcon from '@material-ui/icons/Close'


const MapJobDescView = ({ jobId }) => {
    const [data, setData] = useState(null)
    const [postDate, setPostDate] = useState('')
    const [qualification, setQualifcation] = useState([])
    const [experience, setExperience] = useState([])
    const [showJobDescription, setShowJobDescription] = useState(true)//false
    const [status, setStatus] = useState(false)

    const getDescription = async () => {
        const res = await axios.get(`/employee/jobs/${jobId}`)
        const { job } = res.data
        
        const currentMoment = moment()
        const pastMoment = moment(job.dateOfJobPosted)

        setPostDate(pastMoment.from(currentMoment))

        setData(job)
        setQualifcation([...job.qualification.split('/')])
        setExperience(job.experience.split('/'))
    }

    const getAppliedStatus = async (jobId) => {
        const res = await axios.get(`/employee/application/status/${jobId}`)
        setStatus(res.data.status)
    }

    useEffect(() => {        
        if(jobId) {
            getDescription()
            getAppliedStatus(jobId)
        }
        setShowJobDescription(true)
    }, [jobId]);

    const handleShowDescription = e => {
        setShowJobDescription(!showJobDescription)
    }

    const updateAppliedStatus = async e => {
        setStatus(true)
        const res = await axios.get(`/employee/add/application/${jobId}`)
    }

    return (
        (jobId && data)? (
            <div className={showJobDescription? "map-view-description" : "hide-map-view-description"}>
                <div>
                    <div className='desc-close-btn' onClick={() => { setShowJobDescription(false) }}><CloseIcon /></div>
                    <div className='company-img-desc'><img src={data.companyLogo} alt="company logo" /></div>
                    <div className='company-name-desc'>{data.companyName}</div>
                    <div className='location-type'>
                        <em className='position-location'>{data.city +", "+ data.country}</em>
                        <div>•</div>
                        <div>{data.jobType}</div>
                        <div>•</div>
                        <div>{postDate}</div>
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
                <div className='desc-block'>
                    <div className='title'>Description</div>
                    <div className='content'>{data.description}</div>
                </div>
                <div className='desc-block'>
                    <div className='title'>Qualification</div>
                    <ul className='content' style={{paddingLeft: "15px"}}>
                        { 
                            qualification.map((q) => (
                                <div key={Math.random() * 100}>
                                    { q && <li>{q}</li> }
                                </div>
                            )) 
                        }
                    </ul>
                </div>
                <div className='desc-block'>
                    <div className='title'>Experience</div>
                    <ul className='content' style={{paddingLeft: "15px"}}>
                    { 
                        experience.map((q) => (
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
 
export default MapJobDescView