import './CustomSection.css'
import { useState, useEffect } from 'react'
import { FiPlus } from "react-icons/fi"
import CustomSectionCard from './CustomSectionCard'
import CustomFillingForm from './CustomFillingForm'
import axios from 'axios'

const CustomSection = ({ title }) => {
    const [add, setAdd] = useState(false)
    const [edList, setEdList] = useState([])
    const [editData, setEditData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [id, setId] = useState(null)

    const isWork = () => { return title !== "Projects" }

    const getProject = () => {
        axios.get('/employee/projects')
        .then((response) => {
            setEdList(response.data.list)
            setLoaded(true)
        }, (error) => {
            console.log(error)
        });
    }

    const getExperience = () => {
        axios.get('/employee/experience')
        .then((response) => {
            setEdList(response.data.list)
        }, (error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        if(title === "Projects") {
            getProject()
        } else {
            getExperience()
        }
    }, [add, id])

    const handleClickAdd = (e) => {
        setAdd(true)
    }

    const handleModalDisplay = () => {
        setAdd(false)
        setEditData({})
    }

    const handleEditClick = (index) => {
        setAdd(true)
        setEditData(edList[index])
    }

    const handleDeleteItem = (id) => {
        setId(id)
    } 

    return (
        <div className="custom-section-setting">
            <div className="custom-section-header">
                <div className="header-text">{title}</div>
                <div className="icon" onClick={handleClickAdd}><FiPlus /></div>
            </div>
            {
                    title !== "Projects" && (
                        edList.map((item, index) => (
                            <CustomSectionCard key={Math.random()} 
                                id={item.workId? item.workId : Math.abs(Math.random()) * -1}
                                type={"experience"}
                                index={index}
                                name={item.companyName}
                                title={item.jobTitle}
                                location={item.location}
                                startingDate={item.startingDate}
                                endingDate={item.endingDate}
                                editsHandler={handleEditClick}
                                deleteItem={handleDeleteItem} />
                        ))
                    )
            }
            {
                title === "Projects" && (
                    edList.map((item, index) => (
                        <CustomSectionCard key={Math.random()} 
                            id={item.projectId? item.projectId : Math.random() * -1}
                            type={"project"}
                            index={index}
                            name={item.projectName}
                            title={item.jobTitle}
                            location={item.location}
                            startingDate={item.startingDate}
                            endingDate={item.endingDate}
                            editsHandler={handleEditClick}
                            deleteItem={handleDeleteItem} />
                    ))
                )
            }
            <CustomFillingForm 
                show={add} 
                closeModal={handleModalDisplay} 
                title={title} 
                sectionId={isWork()? editData.workId : editData.projectId} 
            />
        </div>
    )
}
 
export default CustomSection