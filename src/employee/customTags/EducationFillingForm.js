import './EducationFillingForm.css'
import { FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'


const EducationFillingForm = ({ show, closeModal, updateEdList, data, edId }) => {
    const [id, setId] = useState(-1)
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [backPlus, setBackPlus] = useState(0)
    const [studyField, setStudyField] = useState('')
    const [location, setLocation] = useState('')
    const [startingDate, setStartingDate] = useState('')
    const [endingDate, setEndingDate] = useState('')
    const [description, SetDescription] = useState('')


    const initData = data => {
        setSchool(data? data.schoolName : "")
        setDegree(data? data.degreeEarned : "")
        setStudyField(data? data.major : "")
        setLocation(data? data.location : "")
        setStartingDate(data? data.startingDate : "")
        setEndingDate(data? data.endingDate : "")
        SetDescription(data? data.description : "")
    } 

    useEffect(() => {
        if(edId) {
            axios.get(`/employee/education/${edId}`)
            .then((response) => {
                initData(response.data.education)
            }, (error) => {
                console.log(error)
            });
        } else {
            initData({})
        }
    }, [edId])

    const handleChange = e => {

        if(e.target.id === "school") {
            setSchool(e.target.value)
        } else if(e.target.id === "degree") {
            setDegree(e.target.value)
        } else if(e.target.id === "backPlus")  {
            setBackPlus(e.target.value)
        } else if(e.target.id === "field") {
            setStudyField(e.target.value)
        } else if(e.target.id === "location")  {
            setLocation(e.target.value)
        } else if(e.target.id === "startMonth")  {
            setStartingDate(e.target.value)
        } else if(e.target.id === "startYear")  {
            setStartingDate(startingDate + "/" + e.target.value)
        } else if(e.target.id === "endMonth")  {
            setStartingDate(e.target.value)
        } else if(e.target.id === "endYear")  {
            setEndingDate(endingDate + "/" + e.target.value)
        } else if(e.target.id === "description") {
            SetDescription(e.target.value)
        }
    }

    const updateEducation = data => {
        axios.post(`employee/update/education/${edId}`, data)
            .then((response) => {
                
                console.log(response)
            }, (error) => {
                console.log(error)
        });
    }

    const addEducation = data => {
        axios.post(`employee/add/education`, data)
            .then((response) => {
                console.log(response)
            }, (error) => {
                console.log(error)
        });
    }

    const handleAddSection = e => { 
        e.preventDefault()

        const data = {
            educationId: id,
            schoolName: school,
            degreeEarned: degree,
            backPlus: backPlus,
            major: studyField,
            location: location,
            startingDate: startingDate,
            endingDate: endingDate,
            description: description
        }

        

        if(edId) {
            updateEducation(data)
        } else {
            addEducation(data)
        }
        
        closeModal()
    }

    const handleCloseBtn = (e) => {
        closeModal()
    }

    return (
        <div className="filling-form-education-setting-background" style={{display: show? "block" : "none"}}>
            <div className="filling-form-education-setting">
                <div className="setting-fill-pop-up">
                    <div>Education</div>
                    <div style={{cursor: "pointer"}} onClick={handleCloseBtn} ><FaTimes /></div>
                </div>
                <form onSubmit={handleAddSection} >
                    <div className="account-update-textfiled">
                        <input id="school" type="text" placeholder="School Name" defaultValue={school} onChange={handleChange} />
                    </div>
                    <div className="account-update-textfiled">
                        <input id="degree" type="text" placeholder="Degree" defaultValue={degree} onChange={handleChange} />
                    </div>
                    <div className="degree-selection-back-plus">
                        <div className="back-container">BACK+</div>
                        <input id="backPlus" type="number" placeholder="Plus" defaultValue={backPlus} onChange={handleChange} />
                    </div>
                    <div className="account-update-textfiled">
                        <input id="field" type="text" placeholder="Field of study" defaultValue={studyField} onChange={handleChange} />
                    </div>
                    <div className="account-update-textfiled">
                        <input id="location" type="text" placeholder="Location" defaultValue={location} onChange={handleChange} />
                    </div>
                    <div className="update-education-date">
                        <div className="date-box">
                            <div className="title">Start date</div>
                            <select name="month" id="startMonth" onChange={handleChange} >
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="0">March</option>
                            </select>
                            <select name="Year" id="startYear" onChange={handleChange} >
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <div className="date-box">
                            <div className="title">End date (or expected)</div>
                            <select name="month" id="endMonth" onChange={handleChange} >
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="0">March</option>
                            </select>
                            <select name="Year" id="endYear" onChange={handleChange} >
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                    </div>
                    <div className="account-update-bio">
                        <textarea placeholder="Description" defaultValue={description} id="description" onChange={handleChange} />
                    </div>
                    <button className="update-save-btn" onClick={handleAddSection} >Save</button>
                </form>
            </div>
        </div>
    )
}
 
export default EducationFillingForm