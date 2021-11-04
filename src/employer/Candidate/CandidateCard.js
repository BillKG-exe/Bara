import React from 'react'
import './candidateCard.css'
import StringCleaner from '../Ref/StringCleaner'

function CandidateCard({ data }) {
    //console.log(data)

    const cleaner = new StringCleaner()

    const renderExperiences = (experiences) => {
        //console.log(experiences)
        return (
            <div>
                {
                    experiences.map((experience, index)=>(
                        <div key={index} className="work-experience">
                            <div className="jobTitle">{experience.title}</div>
                            <div style={{margin: "0 5px 0 5px", color: "#7f887f"}}> &#45;</div>
                            <div className="enterprise">{experience.company}</div>
                        </div>
                    ))
                }
                
            </div>    
        )
    }

    const renderEducation = (educations) => {
        //console.log(educations)
        return (
            <div>
                {
                    educations.map((education, index)=>(
                        (<div key={index} className="education">
                            <div className="education-degree">{education.degree}  &#45; </div>
                            <div className="education-establishment">{education.place}</div>
                        </div>)
                    ))
                }
            </div>    
        )
    }

    return (
        <div className="candidate-card">
            <div className="name-and-img">
                <div className="name">{data.name}</div>
                <img src={process.env.PUBLIC_URL + data.picture} alt="" />
            </div>
            <div className="place">{data.place}</div>
            <div className="degree">{data.jobTitle}</div>
            <div className="jobPosition"><span>Applied For &bull; </span>{data.search}</div>
            <div className="work-experiences">
                { renderExperiences(data.experiences) }
            </div>
            <div className="education-container">
                { renderEducation(data.education) }
            </div>
            <div className="hiring-status"><span>Hiring status </span> &bull; {cleaner.clean(data.status)}</div>
        </div>
    )
}

export default CandidateCard
