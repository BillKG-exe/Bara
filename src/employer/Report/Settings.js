import React, { Component } from 'react'
import './settings.css'
import Alert from '@material-ui/lab/Alert'
import Validator from 'C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/utils/validator' 

const text = "Say\nHello\nTo\nMy\nLittle\nFriend"

export class Settings extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            companyName: null,
            name: null,
            title: null,
            email: null,
            currentPassword: null,
            newPassword: null,
            companyLogo: {
                preview: null,
                raw: null
            },
            errorMsg: null
        };
    }

    setErrorMsg = (msg) => {
        this.setState({
            errorMsg: msg
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
        
        let validator = new Validator()

        if(e.target.id === "email" && !validator.isValidEmail(e.target.value)) {
            this.setErrorMsg(validator.emailError()) 
        } else if(e.target.id === "newPassword" && !validator.isValidPassword(e.target.value)) {
            this.setErrorMsg(validator.passwordError())
        } else {
            this.setErrorMsg(null)
        }
        /* console.log(e.target.id, "-> ", e.target.value) */
    }

    handleFileUpload = e => {
        if(e.target.files.length) {
            this.setState({
                companyLogo: {
                    preview: URL.createObjectURL(e.target.files[0]),
                    raw: e.target.files[0]
                }
            })
            //console.log(e.target.files)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="report-settings">
                <form onSubmit={this.handleSubmit}>
                    <div className="title">Account</div>
                    <input 
                        id="companyName" 
                        type="text"
                        placeholder="Company Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="employerName"
                        type="text"
                        placeholder="Employer's Name"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="employerTitle"
                        type="text"
                        placeholder="Employer's Title"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="currentPassword"
                        type="password"
                        placeholder="Current Password"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="newPassword"
                        type="password"
                        placeholder="New Password"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="logo">Upload company's logo</label>
                    <input 
                        className="upload-box"
                        id="companyLogo"
                        type="file"
                        accept=".jpg, .jpeg, .png, .svg"
                        onChange={this.handleFileUpload}
                        multiple={false}
                    />
                    <textarea 
                        placeholder="About us"
                        /* value={text} */
                    />
                    <div className="uploaded-img-preview">
                        { this.state.companyLogo.preview && (<img src={this.state.companyLogo.preview} alt="" />) }
                    </div>
                    <div className="error-msg-display">
                    { this.state.errorMsg && 
                        (<Alert severity="error">{this.state.errorMsg}</Alert>) }
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default Settings
