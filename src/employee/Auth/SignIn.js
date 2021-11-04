import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoMail } from 'react-icons/go';
import { BsLock } from 'react-icons/bs';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Typography, Button } from '@material-ui/core';
import Error from '../customTags/Error';
import './singIn.css';
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'

const authStatus = {
    notFound: 'user not found',
    invalidCredentials: 'invalid credentials',
    success: 'success' 
}


export class SignIn extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: null,
            password: null,
            show: false,
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
            [e.target.id]: e.target.value
        })
    }

    handleShow = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post('http://localhost:8000/api/login', user)
              .then((response) => {
                console.log(response)
                const status = response.data

                if(status.message === authStatus.notFound || status.message === authStatus.invalidCredentials) {
                    this.setErrorMsg("Email or password is incorrect")
                } else {
                    this.props.history.push('/')
                }
            }, (error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="info">
                        <div className="info-msg">
                            <div className="text">
                                <div className="quote">Welcome to Bara
                                <div></div>
                                </div>
                                <div>Don't have an account yet?</div>
                                <Link id="signUp-btn-link" to='/signUp'>
                                    <Button id="signUp-btn" variant="contained" color="primary">
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + '/img/log.svg'} alt="connect" />
                    </div>
                    <div className="signIn-form">
                        <Typography id="typography" align="center" variant="h4">
                            SignIn
                        </Typography>
                        <div className="form-inputs">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-container">
                                    <div className="input-fields">
                                        <span>Email *</span>
                                        <GoMail className="icon" />
                                        <input type="email" id="email" placeholder="example@email.com" onChange={this.handleChange} required />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="input-fields">
                                        <span>Password *</span>
                                        <BsLock className="icon" />
                                        <input 
                                            type={!this.state.show? "password" : "text"} 
                                            id="password" 
                                            placeholder="password" 
                                            onChange={this.handleChange} 
                                            required />
                                    {
                                        !this.state.show? (
                                            <IoMdEye className="icon"
                                            onClick={this.handleShow} />
                                        ) : (
                                            <IoMdEyeOff className="icon"
                                            onClick={this.handleShow} />
                                        )
                                    }                                        
                                    </div>
                                </div>
                                <div className="error-msg-spot-signIn">
                                    {this.state.errorMsg && (<Alert /* variant="filled" */ severity="error">{this.state.errorMsg}</Alert>)}
                                </div>
                                <button id="signIn-btn">SIGN IN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
