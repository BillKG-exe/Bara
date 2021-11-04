import React, { Component } from 'react'
import './userEdit.css'
import EducationInput from './EducationInput';
import ResumeContainerInput from './ResumeContainerInput';

export class UserEdit extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            intro: "",
            add: false,
            education: []
        };
    }

    updateEducation(eduObj) {
        this.setState({
            education: this.state.education.push(eduObj),
            /* add: addNewStatus */
        })

        this.setState({
            add: false
        })
        console.log(this.state)
    }

    handleIntroChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }

    getIntroSize() {
        return this.state.intro.length
    }

    handleAdd = (e) => {
        this.setState({
            add: true
        })
        console.log(this.state.add)
    }

    render() {
        return (
            <div className="resume-edit-section">
                <div className="resume-edit-intro">
                    <div className="resume-edit-title">INTRODUCTION</div>
                    <div className="resume-intro-container">
                        <textarea 
                            className="edit-introduction"
                            id="intro"
                            placeholder="Type a short introduction of yourself"
                            type="text"
                            value={this.state.intro}
                            onChange={this.handleIntroChange}
                        />
                        {/* <p>{this.getIntroSize()}/1000</p> */}
                        <button className="intro-save-button">SAVE</button>
                    </div>
                </div>
                <div className="resume-edit-education">
                    <div className="resume-edit-title">EDUCATION</div>
                    <EducationInput 
                        edit={false}
                        addStatus={this.state.add}
                        submit={this.state.updateEducation} />
                    <EducationInput 
                        edit={true}
                        addStatus={this.state.add}
                        submit={this.state.updateEducation} />
                    { this.state.addEducation? (<EducationInput />) : ("") }
                   
                    <div className="resume-edit-title">WORK EXPERIENCE</div>
                    <ResumeContainerInput edit={false} />
                    <ResumeContainerInput edit={false} />
                    
                    <div className="resume-edit-title">PROJECTS</div>
                    <ResumeContainerInput edit={false} />
                    <ResumeContainerInput edit={false} />
                </div>
            </div>
        )
    }
}

export default UserEdit

