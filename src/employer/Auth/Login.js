import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input'
import './login.css'
import Navbar from '../Nav/Navbar'
import VisibilityIcon from '@material-ui/icons/Visibility' 
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Checkbox } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'


export class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: null,
            password: null,
            show: false,
            remember: false,
            errorMsg: null
        };
    }

    handleClick = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }

    handleCheck = (e) => {
        this.setState({
            remember: !this.state.remember
        })
        console.log(this.state.remember)
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <div className="company-login">
                <Navbar />
                <div className="login-container">
                    {/* Add Img to left of form for good look */}
                    <div className="company-greeting-img-and-form">
                        <img className="company-login-greeting-img" 
                            src={process.env.PUBLIC_URL + "/img/BuildingGreeting.jpg"} alt="sj,bkjkjabs"/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="title">Login</div>
                            <div className="greeting-msg">Welcome back!! Login to access your account</div>
                            <div className="label">Email</div>
                            <div className="login-input-container">
                                <input 
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="label">Password</div>
                            <div className="login-input-container">
                                <input 
                                    id="password"
                                    type={!this.state.show? "password" : "text"}
                                    placeholder="Enter password"
                                    onChange={this.handleChange}
                                    required
                                />
                                {
                                    this.state.show? 
                                        (<VisibilityOffIcon className="login-input-icon" onClick={this.handleClick}/>) 
                                        : (<VisibilityIcon className="login-input-icon" onClick={this.handleClick}/>)
                                }
                                
                            </div>
                            <div className="remember-forgot-container">
                                <div className="remember" onClick={this.handleCheck}>
                                    <Checkbox 
                                        color="primary" 
                                        size="small" 
                                        checked={this.state.remember}
                                    />
                                    <div>Remember Me</div>
                                </div>
                                <Link className="forgot-msg" to="forgotpassword">Forgot Password?</Link>
                            </div>
                            <div className="error-msg">
                                { this.state.errorMsg && 
                                    (<Alert variant="filled" severity="error">
                                        {this.state.errorMsg}
                                    </Alert>) }
                            </div>
                            <button>Login</button>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
