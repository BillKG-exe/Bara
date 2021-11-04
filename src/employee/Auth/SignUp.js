import React, { Component } from 'react'
import Header from '../HeaderComponent/Header'
import Validator from "C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/utils/validator";
import './signUp.css'
import { MdEmail } from 'react-icons/md'
import { IoMdLock, IoMdEye, IoMdEyeOff } from 'react-icons/io'
import Error from '../customTags/Error'
import Alert from '@material-ui/lab/Alert'
import axios from 'axios'


export class signUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            password1: null,
            password2: null,
            show1: false,
            show2: false,
            errorMsg: null,
            style: {
                type: "init",
                label: "signUp-form-container",
                icons: "icon-disable",
                inputField: "singUp-inputField"
            }
        }
    }

    setErrorMsg = (msg) => {
        this.setState({
            errorMsg: msg
        })
    }

    handleChange = (e) => {
        let type = null;

        this.setState({
            [e.target.id]: e.target.value
        })

        //console.log(this.state)
        let validator = new Validator();
        
        if(e.target.id === "name" && !validator.isValidName(e.target.value)) {
            type = "name";
            this.setErrorMsg("Please enter a valid name")
        } else if(e.target.id === "email" && !validator.isValidEmail(e.target.value)) {
            type = "email";
            this.setErrorMsg("Please enter a valid email")
        } else if(e.target.id === "password1" && !validator.isValidPassword(e.target.value)) {
            type = "password1";
            this.setErrorMsg("Please enter a valid password")
        } else if(e.target.id === "password2" && !validator.isValidPassword(e.target.value)) {
            type = "password2";
            this.setErrorMsg("Please enter a valid confirmation password")
        } else {
            this.setErrorMsg(null)
        }
        
        this.setState ({
            style: {
                type: type,
                label: "error-signUp-label",
                icons: "signUp-error-icon",
                inputField: "error-signUp-input"
            }
        })
    }

    handleShow = (e) => {
        this.setState({
            show1: !this.state.show1
        })
    }

    handleShow2 = (e) => {
        this.setState({
            show2: !this.state.show2
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        
        if(!this.state.name || !this.state.email || !this.state.password1 || !this.state.password2) {
            this.setErrorMsg("Please fill out all the form")
            console.log('empty')
        } else if(this.state.password1 !== this.state.password2) {
            this.setErrorMsg("The passwords do not match")
        } else {
            const user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password1
            }
    
            axios.post('http://localhost:8000/api/register', user)
              .then((response) => {
                if(response.status === 200) {
                    this.props.history.push('/profile')
                }
              }, (error) => {
                console.log(error);
              });
            //console.log(user)
        }
    }
    
    render() {
        return (
            <div>
                {<Header />}
                <div className="signUpContainer">
                    <div className="content-Container">
                        <img className="allura" 
                            src={process.env.PUBLIC_URL + "/img/personal_information.svg"} 
                            alt="Allura Design svg"/>
                        <div className="signUp-form-container">
                            <form className="signUpForm" onSubmit={this.handleSubmit}>
                                {<h3 className="sign-up-h">Sign Up</h3>}
                                <div className="error-msg-spot">
                                    {this.state.errorMsg && (<Alert severity="error">{this.state.errorMsg}</Alert>)}
                                </div>
                                <label className={
                                    (this.state.style.type === "name")? this.state.style.label : "" }>
                                        Name * 
                                </label>
                                <div className={
                                    (this.state.style.type === "name")? 
                                        this.state.style.inputField : "singUp-inputField" }>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        placeholder="full name"
                                        onChange={this.handleChange} 
                                        required />
                                </div>
                                <label className={
                                    (this.state.style.type === "email")? this.state.style.label : "" }>Email *</label>
                                <div className={
                                    (this.state.style.type === "email")? 
                                        this.state.style.inputField : "singUp-inputField" }>
                                    <MdEmail className="signUp-error-icon signUp-icon icon-disable" />
                                    <input 
                                        type="email" 
                                        id="email" 
                                        placeholder="example@example.mail" 
                                        onChange={this.handleChange}
                                        required />
                                    <MdEmail id="not-to-display" />
                                </div>
                                <label className={
                                    (this.state.style.type === "password1")? this.state.style.label : "" }>Password *</label>
                                <div className={
                                    (this.state.style.type === "password1")? 
                                        this.state.style.inputField : "singUp-inputField" }>
                                    <IoMdLock className="signUp-error-icon signUp-icon" />
                                    <input 
                                        type={!this.state.show1? "password" : "text"}
                                        id="password1" 
                                        placeholder="password"
                                        onChange={this.handleChange}
                                        required />
                                    {
                                        !this.state.show1? (
                                            <IoMdEye className="signUp-error-icon signUp-icon"
                                            onClick={this.handleShow} />
                                        ) : (
                                            <IoMdEyeOff className="signUp-error-icon signUp-icon"
                                            onClick={this.handleShow} />
                                        )
                                    }
                                </div>
                                <label className={
                                    (this.state.style.type === "password2")? this.state.style.label : "" }>Confirmation *</label>
                                <div className={
                                    (this.state.style.type === "password2")? 
                                        this.state.style.inputField : "singUp-inputField" }>
                                    <IoMdLock className="signUp-error-icon signUp-icon" />
                                    <input 
                                        type={!this.state.show2? "password" : "text"}
                                        id="password2"
                                        placeholder="Confirm password" 
                                        onChange={this.handleChange}
                                        required />
                                    {
                                        !this.state.show2? (
                                            <IoMdEye className="signUp-error-icon signUp-icon"
                                            onClick={this.handleShow2} />
                                        ) : (
                                            <IoMdEyeOff className="signUp-error-icon signUp-icon"
                                            onClick={this.handleShow2} />
                                        )
                                    }
                                </div>
                                <button className="signUp-btn">SIGN UP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default signUp
