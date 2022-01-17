import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { GoMail } from 'react-icons/go';
import { BsLock } from 'react-icons/bs';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Typography, Button } from '@material-ui/core';
import './singIn.css';
import { Checkbox } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'
import jwt from 'jsonwebtoken'


export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: null,
            password: null,
            show: false,
            errorMsg: null, 
            remember: false
        };
    }

    componentDidMount() {
        this.props.authorized()
            .then(authenticated => {
                if(authenticated) { 
                    this.props.history.push('/');
                }
            }).catch((e) => console.log(e))
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

        const token = jwt.sign({password: this.state.password}, "secret")

        const user = {
            email: this.state.email,
            password: token
        }
        
        axios.post('/employee/login', user)
              .then((response) => {
                if(response.data.success) {
                    this.props.history.push('/profile')
                } else {
                    this.setErrorMsg(response.data.message)
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
                                <div className="remember-container">
                                    <div className="check" onClick={this.handleCheck}>
                                        <Checkbox 
                                            color="primary" 
                                            size="small" 
                                            checked={this.state.remember}
                                            onClick={() => this.setState({remember : !this.state.remember})}
                                        />
                                        <div>Remember Me</div>
                                    </div>
                                    <Link className="forgot-msg" to="employee/forgotpassword">Forgot Password?</Link>
                                </div>
                                <div className="error-msg-spot-signIn">
                                    {this.state.errorMsg && (<Alert severity="error">{this.state.errorMsg}</Alert>)}
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

export default withRouter(SignIn)
