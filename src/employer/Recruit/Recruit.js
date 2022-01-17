import './Recruit.css'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Alert from '@material-ui/lab/Alert'
import Navbar from "../Nav/Navbar"
import Overview from './DescriptionOverview'
import { AiOutlinePlus } from 'react-icons/ai'
import Qualifications from './Qualifications'
import axios from 'axios'



const Recruit = ({ authorized }) => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [jobType, setJobType] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [degree, setDegree] = useState('')
    const [salary, setSalary] = useState(0)
    const [description, setDescription] = useState('')
    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [qualifications, setQualifications] = useState([])
    const [pQualifications, setPQualifications] = useState([])
    const [errorMsg, setErrorMsg] = useState('')


    /* ******************************************** */
    /* ****** Use useEffect to fetch address ****** */
    /* ******************************************** */

    useEffect(()=> {
        authorized()
            .then(authenticated => {
                if(!authenticated) {
                    history.push('/employer/login');
                }
            }).catch((e) => console.log(e))
    }, [])

    const handleInput = (e) => {

        if(e.target.id === "title") {
            setTitle(e.target.value)
        } else if(e.target.id === "address") {
            setAddress(e.target.value)
        } else if(e.target.id === "city") {
            setCity(e.target.value)
        } else if(e.target.id === "country") {
            setCountry(e.target.value)
        } else if(e.target.id === "degree") {
            setDegree(e.target.value)
        } else if(e.target.id === "salary") {
            setSalary(e.target.value)
        } else if(e.target.id === "jobType") {
            setJobType(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    const handleChange = (e) => {
        if(e.target.id === "q")
            setText(e.target.value)
        else 
            setText2(e.target.value)          
    }
    

    const addQualification = (e) => {
        setQualifications([...qualifications, text])
        setText("")
    }

    const addPQualification = (e) => {
        setPQualifications([...pQualifications, text2])
        setText2("")
    }

    const deleteQualification = (id) => {
        qualifications.splice(id, 1)
        setQualifications([...qualifications])
    }

    const deletePQualification = (id) => {
        pQualifications.splice(id, 1)
        setPQualifications([...pQualifications])
    }

    const handleSubmit = async e => {
        e.preventDefault()

        if(!title || !jobType || !city || !country || !salary || !description) {
            console.log(title, jobType, city, country, "salary: "+salary,  description)
            setErrorMsg('Please fill out all the forms')
        } else {
            setErrorMsg('')

            const data = {
                title: title,
                jobType: jobType,
                address: address,
                city: city,
                country: country,
                degree: degree,
                salary: salary,
                description: description,
                qualifications: qualifications,
                experience: pQualifications
            }
            
            const response = await axios.post('/employer/post', data)
    
            console.log(response)
        }
    }

    return (
        <div className="recruit-page">
            <Navbar />
            <div className="main-page">
                <form className="post-component" onSubmit={handleSubmit}>
                    <div className="page-title">Job Post</div>
                    <div className="error-msg">
                        { errorMsg && (<Alert severity="error">{errorMsg}</Alert>) }
                    </div>
                    <div className="textfield">
                        <div className="label">Job title</div>
                        <input id="title" type="text" placeholder="Software engineer, etc" onChange={handleInput} required />
                    </div>
                    <div className="textfield">
                        <div className="label">Job type</div>
                        <select name="job type" id="jobType" onChange={handleInput}>
                            <option value="none">Select</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Intern">Intern</option>
                            <option value="Start Ups">Start Ups</option>
                        </select>
                    </div>
                    <div className="textfield">
                        <div className="label">Address</div>
                        <input id="address" type="text" placeholder="street address" onChange={handleInput}  required />
                    </div>
                    <div className="textfield">
                        <div className="label">City</div>
                        <input id="city" type="text" placeholder="city" onChange={handleInput}  required />
                    </div>
                    <div className="textfield">
                        <div className="label">Country</div>
                        <input id="country" type="text" placeholder="country" onChange={handleInput}  required />
                    </div>
                    <div className="textfield">
                        <div className="label">Degree required</div>
                        <input id="degree" type="text" placeholder="Degree required" onChange={handleInput} />
                    </div>
                    <div className="textfield">
                        <div className="label">Salary</div>
                        <input id="salary" type="number" placeholder="exact or range" onChange={handleInput} />
                    </div>
                    <div className="textAreaField">
                        <div className="label">Job description</div>
                        <textarea id="description" type="text" placeholder="Enter job description" onChange={handleInput} />
                    </div>
                    <div className="textfield">
                        <div className="label">Qualifications</div>
                        <div className="qualification-input">
                            <div className="qualification-section"><textarea id="q" type="text" placeholder="Enter a qualification" onChange={handleChange} value={text} /></div>
                            <div className="icon" onClick={addQualification}><AiOutlinePlus /></div>
                        </div>
                        <div className="qualification-list">
                            <div>
                                {
                                    qualifications.map((item, index) => (
                                        <Qualifications key={index} list_id={index} item={item} deleteItem={deleteQualification} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="textfield">
                        <div className="label">Preferred Qualifications</div>
                        <div className="qualification-input">
                            <div className="qualification-section"><textarea id="pq" type="text" placeholder="Enter a qualification" onChange={handleChange} value={text2} /></div>
                            <div className="icon" onClick={addPQualification}><AiOutlinePlus /></div>
                        </div>
                        <div className="qualification-list">
                            <div>
                                {
                                    pQualifications.map((item, index) => (
                                        <Qualifications key={index} list_id={index} item={item} deleteItem={deletePQualification} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </form>
                <Overview className="overview-component" 
                    title={title} 
                    location={address+city+country} 
                    degree={degree} 
                    description={description} 
                    qualifications={qualifications} 
                    preferredQualifications={pQualifications} 
                />
            </div>
            <button className="employer-post-btn" onClick={handleSubmit}>Post</button>
        </div>
    )
}
 
export default Recruit;