import { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Checkbox } from '@material-ui/core'
import axios from 'axios'


const CustomFillingForm = ({ show, closeModal, title, sectionId }) => {
    const [id, setId] = useState(-1)
    const [check, setCheck] = useState(false)
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [location, setLocation] = useState('')
    const [startingDate, setStartingDate] = useState('')
    const [endingDate, setEndingDate] = useState('')
    const [description, setDescription] = useState('')

    const isProjectSection = () => { return title === "Projects" }

    const initData = (data) => {
        setName(data? (isProjectSection()? data.projectName : data.companyName) : "")
        setPosition(data? data.jobTitle : "")
        setLocation(data? data.location : "")
        setStartingDate(data? data.startingDate : "")
        setEndingDate(data? data.endingDate : "")
        setDescription(data? data.description : "")
    } 

    useEffect(() => {
        if(sectionId) {
            const urlType = isProjectSection()? "project" : "experience"

            axios.get(`/employee/${urlType}/${sectionId}`)
            .then((response) => {
                initData(response.data.result)
                console.log(response)
            }, (error) => {
                console.log(error)
            });
        } else {
            initData({})
        }
    }, [sectionId])


    const handleChange = e => {
        if(e.target.id === "name") {
            setName(e.target.value)
        } else if(e.target.id === "title") {
            setPosition(e.target.value)
        }  else if(e.target.id === "location")  {
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
            setDescription(e.target.value)
        }
    }

    const updateEducation = data => {
        const urlType = isProjectSection()? "project" : "experience"
        
        axios.post(`employee/update/${urlType}/${sectionId}`, data)
            .then((response) => {}, (error) => {
                console.log(error)
        });
    }

    const addEducation = data => {
        const urlType = isProjectSection()? "project" : "experience"

        axios.post(`employee/add/${urlType}`, data)
            .then((response) => {}, (error) => {
                console.log(error)
        });
    }

    const handleSave = (e) => {
        e.preventDefault()
        
        const experienceScheme = {
            workId: id,
            type: title,
            companyName: name,
            jobTitle: position,
            location: location,
            checked: check,
            startingDate: startingDate,
            endingDate: endingDate,
            description: description
        }
        
        const projectScheme = {
            workId: id,
            type: title,
            projectName: name,
            jobTitle: position,
            location: location,
            checked: check,
            startingDate: startingDate,
            endingDate: endingDate,
            description: description
        }

        if(sectionId) {
            updateEducation(isProjectSection()? projectScheme : experienceScheme)
        } else {
            addEducation(isProjectSection()? projectScheme : experienceScheme)
        }
        closeModal()
    }

    const handleCheck = (e) => {
        setCheck(!check)
    }

    const handleCloseBtn = (e) => {
        closeModal()
    }

    return (
        <div className="filling-form-education-setting-background" style={{display: show? "block" : "none"}}>
            <div className="filling-form-education-setting">
                <div className="setting-fill-pop-up">
                    <div>{title}</div>
                    <div style={{cursor: "pointer"}} onClick={handleCloseBtn} ><FaTimes /></div>
                </div>
                <form onSubmit={handleSave}>
                    <div className="account-update-textfiled">
                        <input id="name" type="text" placeholder={title === "Projects"? "Project name" : "Company Name"} 
                            defaultValue={name} onChange={handleChange} />
                    </div>
                    <div className="account-update-textfiled">
                        <input id="title" type="text" placeholder="Title" 
                            defaultValue={position} onChange={handleChange} />
                    </div>
                    <div className="account-update-textfiled">
                        <input id="location" type="text" placeholder="Location" defaultValue={location} onChange={handleChange} />
                    </div>
                    <div className="current-setting-checkbox" style={{display: title === "Projects"? "none" : "block"}} onClick={handleCheck}>
                        <Checkbox checked={check} color="primary" size="small" />
                        <span className="checkbox-name" style={{cursor: "pointer"}}>I currently work at that company</span>
                    </div>
                    <div className="update-education-date">
                        <div className="date-box">
                            <div className="title">Start date</div>
                            <select name="month" id="startMonth" onChange={handleChange} >
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
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
                                <option value="3">March</option>
                            </select>
                            <select name="Year" id="endYear" onChange={handleChange} >
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                    </div>
                    <div className="account-update-bio">
                        <textarea id="description" placeholder="description" defaultValue={description? description : ""} onChange={handleChange} />
                    </div>
                    <button className="update-save-btn" onClick={handleSave} >Save</button>
                </form>
            </div>
        </div>
    )
}
 
export default CustomFillingForm