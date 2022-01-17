import React from 'react'
import './candidateCard.css'
import StringCleaner from '../Ref/StringCleaner'
import { useState, useEffect } from 'react'
import axios from 'axios'


function CandidateCard({ data, handleDisplayClicks, showApplicationTitle }) {
    const [info, setInfo] = useState()
    const [experiences, setExperiences] = useState([])
    const [educations, setEducations] = useState([])
    const [projects, setProjects] = useState([])
    const [skills, setSkills] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [appliedFor, setAppliedFor] = useState('')
    const cleaner = new StringCleaner()

    const getData = async () => {
        const info = await axios.get(`/employer/${data.employeeId}`)
        const ed = await axios.get(`/employer/${data.employeeId}/education`)
        const exp = await axios.get(`/employer/${data.employeeId}/experience`)
        const proj = await axios.get(`/employer/${data.employeeId}/projects`)
        const sk = await axios.get(`/employer/${data.employeeId}/skills`)

        setInfo(info.data.user)
        setEducations([...ed.data.list])
        setExperiences([...exp.data.list])
        setProjects([...proj.data.list])
        setSkills([sk.data.list.listOfSkills])
        
        const res = await axios.get(`/employee/jobs/${data.jobId}`)
        setAppliedFor(res.data.job.jobTitle)
    }

    useEffect(() => {
        getData()
        setLoaded(true)
    }, [loaded])

    const handleClick = e => { 
        handleDisplayClicks({
            candidate: info,
            education: educations,
            experience: experiences,
            project: projects,
            skills: skills
        }) 
    }

    const renderExperiences = () => {
        
        return (
            <div>
                {
                    experiences.map((experience)=>(
                        <div key={experience.experienceId} className="work-experience">
                            <div className="jobTitle">{experience.jobTitle}</div>
                            <div style={{margin: "0 5px 0 5px", color: "#7f887f"}}> &#45;</div>
                            <div className="enterprise">{experience.companyName}</div>
                        </div>
                    ))
                }
                
            </div>    
        )
    }

    const renderEducation = () => {
        
        return (
            <div>
                {
                    educations.map((education)=>(
                        (<div key={education.educationId} className="education">
                            <div className="education-degree">{education.degreeEarned}  &#45; </div>
                            <div className="education-establishment">{education.schoolName}</div>
                        </div>)
                    ))
                }
            </div>    
        )
    }

    return (
        loaded && info? (
            <div className="candidate-card" onClick={handleClick}>
                <div className="name-and-img">
                    <div className="name">{info.candidateName}</div>
                    <img src={"/"+info.candidatePicture} alt="" />
                </div>
                <div className="place">{info.address}</div>
                {/* <div className="degree">{data.jobTitle}</div> */}
                { showApplicationTitle && (<div className="jobPosition"><span>Applied For &bull; </span>{appliedFor}</div>) }      
                <div className="work-experiences">
                    { renderExperiences() }
                </div>
                <div className="education-container">
                    { renderEducation() }
                </div>
                {/* <div className="hiring-status"><span>Hiring status </span> &bull; {cleaner.clean()}</div> */}
            </div>
        ) : (
            <div></div>
        )
    )
}

export default CandidateCard
