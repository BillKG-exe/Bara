import React, { Component } from 'react'
import './register.css' //Some of the classes in register can be found in login.css
import Navbar from '../Nav/Navbar'
import VisibilityIcon from '@material-ui/icons/Visibility' 
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import Validator from "C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/utils/validator"
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
        }
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

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.password !== this.state.confirmation) {
            this.setErrorMsg("Passwords do not match")
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
                            { this.state.errorMsg && (<p>{this.state.errorMsg}</p>) }
                            <button>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register
