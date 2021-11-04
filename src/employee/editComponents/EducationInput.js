import React, { Component } from 'react'
import './educationInput.css'
import DeleteIcon from '@material-ui/icons/Delete'
import SpaceDivider from '../customTags/SpaceDivider'

export class EducationInput extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: this.props.id,
            name: null,
            location: null,
            degree: null,
            start: null,
            end: null
        };

        //console.log(this.props.addStatus)

        if(this.props.addStatus) {
            props.submit(this.state)
            console.log("In EDU Input")
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(this.state)
    }

    handleDelete = (e) => {
        console.log("clicked")
    }

    handleSave = (e) => {
        //this.handleEdit()
        console.log(this.state.end)
    }

    render() {
        return (
            <div className="education-input-section" id={this.state.id}>
                <div className="edit-delete-container">
                    <DeleteIcon 
                        className="edit-icon" 
                        id={this.state.id} 
                        onClick={this.handleDelete} />
                </div>
                <div className="education-information">
                    <input 
                        id="name" 
                        placeholder="School Name" 
                        type="text" 
                        onChange={this.handleChange} 
                        />
                    <input 
                        id="location" 
                        placeholder="Location" 
                        type="text" 
                        onChange={this.handleChange} 
                        />
                    <input 
                        id="degree" 
                        placeholder="Degree Earned" 
                        type="text" 
                        onChange={this.handleChange} 
                        />
                </div>
                <div className="education-date">
                    <input 
                        id="start" 
                        placeholder="From (Month/Year)" 
                        type="text" 
                        onChange={this.handleChange} 
                        />
                    <div> - </div>
                    <input 
                        id="end" 
                        placeholder="To (Month/Year)" 
                        type="text" 
                        onChange={this.handleChange} 
                        />
                </div>
                <button className={"add-save-button"} onClick={this.handleSave} >SAVE</button>
                <SpaceDivider height="25px" width="100%" margin="auto" padding="0" />
        </div>
        )
    }
}

export default EducationInput
