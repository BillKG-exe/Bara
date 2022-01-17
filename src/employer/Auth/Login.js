import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import './login.css'
import Navbar from '../Nav/Navbar'
import VisibilityIcon from '@material-ui/icons/Visibility' 
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import { Checkbox } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'


export class Login extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: '',
            show: false,
            remember: false,
            errorMsg: null
        };
    }

    componentDidMount() {
        this.props.authorized()
            .then(authenticated => {
                if(authenticated) {
                    this.props.history.push('/employer/Dashboard');
                }
            }).catch((e) => console.log(e))
    }

    handleClick = (e) => {
        this.setState({
            show: !this.state.show
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleCheck = (e) => {
        this.setState({
            remember: !this.state.remember
        })
        console.log(this.state.remember)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('/employer/login', user)
        .then((response) => {
            const { success, message } = response.data
            
            if(!success) {
                this.setState({ errorMsg: message })
            } else {
                this.props.history.push('/employer/report/candidates')
            }

        }, (error) => {
            console.log(error)
        });

    }

    render() {
        return (
            <div className="company-login">
                <Navbar />
                <div className="login-container">
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
                                    (<Alert severity="error">
                                        {this.state.errorMsg}
                                    </Alert>) }
                            </div>
                            <button onClick={this.handleSubmit}>Login</button>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
