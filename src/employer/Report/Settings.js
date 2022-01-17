import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './settings.css'
import Alert from '@material-ui/lab/Alert'
import Validator from '../../utils/validator' 
import axios from 'axios'


export class Settings extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            companyName: null,
            name: null,
            title: null,
            email: null,
            address: null,
            city: null,
            country: null,
            about: null,
            currentPassword: null,
            newPassword: null,
            companyLogo: {
                preview: null,
                raw: null
            },
            errorMsg: null
        };
    }



    async componentDidMount() {
        try {
            const response = await axios.get('/employer/profile')

            const data = response.data.profile

            if(!response.data.authenticated) {
                this.props.history.push('/employer/login')
            }

            this.setState({
                companyName: data.employerCompanyName,
                name: data.employerName,
                title: data.employerJobTitle,
                email: data.employerEmail, 
                about: data.employerAbout
            })

        } catch (e) {
            console.log(e)
        }
    }

    setErrorMsg = (msg) => {
        this.setState({
            errorMsg: msg
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        
        let validator = new Validator()

        if(e.target.id === "email" && !validator.isValidEmail(e.target.value)) {
            this.setErrorMsg(validator.emailError()) 
        } else if(e.target.id === "newPassword" && !validator.isValidPassword(e.target.value)) {
            this.setErrorMsg(validator.passwordError())
        } else {
            this.setErrorMsg(null)
        }
    }

    handleFileUpload = async e => {
        if(e.target.files.length) {
            this.setState({
                companyLogo: {
                    preview: URL.createObjectURL(e.target.files[0]),
                    raw: e.target.files[0]
                }
            })

            const form = new FormData()

            form.append('icon', e.target.files[0], e.target.files[0].name)

            axios.post('/employer/upload/icon', form)
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        this.setState({ errorMsg: '' })

        const response = await axios.post('/employer/profile', this.state)

        console.log(response)
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
                        defaultValue={this.state.companyName}
                        onChange={this.handleChange}
                    />
                    <input 
                        id="name"
                        type="text"
                        placeholder="Employer's Name"
                        defaultValue={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        id="title"
                        type="text"
                        placeholder="Employer's Title"
                        defaultValue={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input 
                        id="address"
                        type="text"
                        placeholder="Address de Rue"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="city"
                        type="text"
                        placeholder="City"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="country"
                        type="text"
                        placeholder="Country"
                        onChange={this.handleChange}
                    />
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email"
                        defaultValue={this.state.email}
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
                        id="about"
                        placeholder="About us"
                        defaultValue={this.state.about}
                        onChange={this.handleChange}
                    />
                    <div className="uploaded-img-preview">
                        { this.state.companyLogo.preview && (<img src={this.state.companyLogo.preview} alt="" />) }
                    </div>
                    <div className="error-msg-display">
                    { this.state.errorMsg && 
                        (<Alert severity="error">{this.state.errorMsg}</Alert>) }
                    </div>
                    <button style={{cursor: 'pointer'}} onClick={this.handleSubmit}>Save</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Settings)
