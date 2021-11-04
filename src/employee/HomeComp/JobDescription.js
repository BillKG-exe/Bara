import React, { useState, useEffect } from 'react'
import './jobDescription.css'
import CloseIcon from '@material-ui/icons/Close';


function JobDescription(props) {
    const [showJobDescription, setShowJobDescription] = useState(false)

    useEffect(() => {
        setShowJobDescription(props.show)
    });

    const handleShowDescription = () => {
        setShowJobDescription(false)
        props.hide()
    }

    return (
        <div className={showJobDescription? "show-job-desc" : "job-desc"}>
            <div className="job-desc-close-icon">
                <CloseIcon onClick={handleShowDescription} />
            </div>
            <div className="company-header">
                <img src={process.env.PUBLIC_URL + '/img/google.png'} alt={"company logo"} />
                <div className="company-name">GOOGLE Inc</div>
            </div>
            <div className="company-job-desc">
                <div className="desc-title">Descrition</div>
                <div className="desc-content">
                    Apply sound engineering principles and state-of-the-art methodologies in the development, testing and documentation of products and manufacturing systems. As a systems engineer intern you will apply your engineering knowledge to assist HummingbirdEV’s development, testing, data logging and documentation efforts.
                </div>
            </div>
            <div className="company-job-qualification">
                <div className="qualification-title">Qualification</div>
                {/* make the qualifications a list*/}
                <div className="qualification-content"> 
                    Excellent knowledge of vehicle communication protocol and vehicle EE architecture.

                    Familiar with vehicle network and diagnostic solution development and evaluation tools (CANoe, CANalyzer, etc.)

                    Experience with Software: C,C++, Matlab/Simulink, CANdb++ Editor.
                </div>
            </div>
            <div className="company-job-requirement">
                <div className="requirement-title">Requirement</div>
                <div className="requirement-content">
                    Good analytical and problem-solving skills
                    Strong written and verbal communication skills
                    Ability to Document a Technical Issue for escalation
                    Customer Service and Relationship Management
                </div>
            </div>
        </div>
    )
}

export default JobDescription
