import './InfoUpdates.css'
import { useState, useEffect } from 'react'
import Validator from "../../utils/validator";
import Alert from '@material-ui/lab/Alert'
import axios from 'axios';

const InfoUpdates = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [introduction, setIntroduction] = useState('')
    const [errorMsg, setErrorMsg] = useState(null)
    const [successUpdate, setSuccessUpdate] = useState(false)
    const [successMsg, setSuccessMsg] = useState('')

    const initData = (data) => {
        const { candidateName, candidateEmail, candidatePhone, introduction } = data

        setName(candidateName)
        setEmail(candidateEmail)
        setPhone(candidatePhone)
        setIntroduction(introduction)
    }

    useEffect(() => {
        axios.get('/employee/user')
        .then((response) => {
            initData(response.data.user)
        }, (error) => {
            console.log(error)
        });
    }, [])

    const handleChange = e => {
        let validator = new Validator();

        if(e.target.id === "name") {
            setName(e.target.value)
        } else if(e.target.id === "email" && !validator.isValidEmail(e.target.value)) {
            setEmail(e.target.value)
            setErrorMsg('Please enter a valid email')
        } else if(e.target.id === "phone") {
            setPhone(e.target.value)
        } else if(e.target.id === "city") {
            setCity(e.target.value)
        } else if(e.target.id === "country") {
            setCountry(e.target.value)
        } else if(e.target.id === "introduction") {
            setIntroduction(e.target.value)
        } else {
            setErrorMsg(null)
        }
    }

    const handleUpdateInfo = e => {


        const data = {
            valid: errorMsg? false : true,
            name: name,
            email: email,
            phone: phone,
            city: city,
            country: country,
            introduction: introduction
        }   

        axios.post('/employee/update/info', data)
        .then((response) => {
            console.log(response)
            setSuccessUpdate(response.data.success)
            if(response.data.success) {
                setSuccessMsg('Data updated successfully')
            } else {
                setSuccessMsg(response.data.message)
            }

        }, (error) => {
            console.log(error)
        });

    }

    return ( 
        <div className="account-setting">
            <div className="setting-title">Account Settings</div>
            <div className="info-error-msg">
                {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
            </div>
            <div className="account-update-textfiled">
                <input id="name" type="text" placeholder="Name" value={name} onChange={handleChange} />
            </div>
            <div className="account-update-textfiled"> 
                <input id="email" type="email" placeholder="Email" value={email} onChange={handleChange} />
            </div>
            <div className="account-update-textfiled">
                <input id="phone" type="number" placeholder="Phone" value={phone} onChange={handleChange} />
            </div>
            <div className="account-update-city-country">
                <input id="city" type="text" placeholder="City" defaultValue="" onChange={handleChange} />
                <input id="country" type="text" placeholder="Country" defaultValue="" onChange={handleChange} />
            </div>
            <div className="account-update-bio">
                <textarea id="introduction" placeholder="Introduction" value={introduction} onChange={handleChange} />
            </div>
            <div>{successUpdate && (<Alert severity={successUpdate? "success" : "error"}>{successMsg}</Alert>)}</div>
            <div><button className='classic-save-btn' onClick={handleUpdateInfo}>Save</button></div>
        </div>
    )
}
 
export default InfoUpdates