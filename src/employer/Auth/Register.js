import React, { Component } from 'react'
import './register.css' //Some of the classes in register can be found in login.css
import Navbar from '../Nav/Navbar'
import VisibilityIcon from '@material-ui/icons/Visibility' 
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Validator from "../../utils/validator"
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { withRouter } from 'react-router'


export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: null,
            name: null,
            title: null,
            email: null,
            password: null,
            confirmation: null,
            show1: false,
            show2: false,
            errorMsg: null,
            success: false
        }
    }

    componentDidMount() {
        this.props.authorized()
            .then(authenticated => {
                if(authenticated) {
                    this.props.history.push('/employer/Dashboard');
                }
            }).catch((e) => console.log(e))
    }

    setErrorMsg = (msg) => {
        this.setState({
            errorMsg: msg
        })
    }

    handleShow1 = (e) => {
        this.setState({
            show1: !this.state.show1
        })
    }

    handleShow2 = (e) => {
        this.setState({
            show2: !this.state.show2
        })
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

        let validator = new Validator();

        if(e.target.id === "email" && !validator.isValidEmail(e.target.value)) {
            this.setErrorMsg(validator.emailError()) 
        } else if(e.target.id === "password" && !validator.isValidPassword(e.target.value)) {
            this.setErrorMsg(validator.passwordError())
        } else if(e.target.id === "confirmation" && !validator.isValidPassword(e.target.value)) {
            this.setErrorMsg("Please enter a valid confirmation password")
        } else {
            this.setErrorMsg(null)
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!this.state.companyName || !this.state.name || !this.state.title) {
            this.setErrorMsg('Please fill out all the forms')
        } else if(this.state.password !== this.state.confirmation) {
            this.setErrorMsg("Passwords do not match")
        } else {
            const user = {
                companyName: this.state.companyName,
                employerName: this.state.name,
                employerTitle: this.state.title,
                email: this.state.email,
                password: this.state.password
            }
        
            axios.post('/employer/register', user)
                  .then((response) => {
                    const valid = response.data.success
                    this.setState({ success: valid })
                    
                    if(!valid) {
                        this.setErrorMsg(response.data.message)
                    }
                }, (error) => {
                    console.log(error)
            });
        }
    }

    render() {
        return (
            <div className="employer-register-page">
                <Navbar />
                <div className="register-container">
                    <div className="company-register-component">
                        <img src={process.env.PUBLIC_URL + "/img/RegisterGreeting.jpg"} alt="" />
                        <form onSubmit={this.handleSubmit}>
                            <div className="title">Register</div>
                            <div className="greeting-msg">Hello!! sign up to our website to benefit of more features</div>
                            <div className="label">Company Name</div>
                            <div className="register-input-container">
                                <input 
                                    id="companyName"
                                    type="text"
                                    onChange={this.handleChange}
                                    required 
                                />
                            </div>
                            <div className="label">Employer's Name</div>
                            <div className="register-input-container">
                                <input 
                                    id="name"
                                    type="text"
                                    onChange={this.handleChange}
                                    required 
                                />
                            </div>
                            <div className="label">Employer's Title</div>
                            <div className="register-input-container">
                                <input
                                    id="title"
                                    type="text"
                                    onChange={this.handleChange}
                                    required 
                                />
                            </div>
                            <div className="label">Email</div>
                            <div className="register-input-container">
                                <input 
                                    id="email"
                                    type="email"
                                    onChange={this.handleChange}
                                    required 
                                />
                            </div>
                            <div className="label">Password</div>
                            <div className="register-input-container">
                                <input 
                                    id="password"
                                    type={!this.state.show1? "password" : "text"}
                                    onChange={this.handleChange}
                                    required 
                                />
                                {
                                    this.state.show1? 
                                        (<VisibilityOffIcon className="input-icon" onClick={this.handleShow1}/>) 
                                        : (<VisibilityIcon className="input-icon" onClick={this.handleShow1}/>)
                                }
                            </div>
                            <div className="label">Comfirmation</div>
                            <div className="register-input-container">
                                <input 
                                    id="confirmation"
                                    type={!this.state.show2? "password" : "text"}
                                    onChange={this.handleChange}
                                    required 
                                />
                                {
                                    this.state.show2? 
                                        (<VisibilityOffIcon className="input-icon" onClick={this.handleShow2}/>) 
                                        : (<VisibilityIcon className="input-icon" onClick={this.handleShow2}/>)
                                }
                            </div>
                            <div>{ this.state.errorMsg && (<Alert severity={"error"}>{this.state.errorMsg}</Alert>) }</div>
                            <button onClick={this.handleSubmit}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Register)
