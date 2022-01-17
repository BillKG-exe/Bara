import { useState, useEffect } from 'react'
import './EducationSection.css'
import EducationFillingForm from './EducationFillingForm'
import { FiPlus } from 'react-icons/fi'
import CustomSectionCard from './CustomSectionCard'
import axios from 'axios'


const EducationSection = () => {
    const [add, setAdd] = useState(false)
    const [edList, setEdList] = useState([])
    const [editData, setEditData] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [id, setId] = useState(null)

    useEffect(() => {
        axios.get('/employee/education')
        .then((response) => {
            setEdList(response.data.list)
        }, (error) => {
            console.log(error)
        });

        setLoaded(true)
    }, [add, id])

    const handleUpdates = (newData) => {
        setEdList([...edList, newData])
    }

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
        <div className="education-section-setting">
            <div className="education-section-header">
                <div className="header-text">Education</div>
                <div className="icon" onClick={handleClickAdd}><FiPlus /></div>
            </div>
            {
                    edList.map((item, index) => (
                        <CustomSectionCard key={item.educationId} 
                            id={item.educationId? item.educationId : Math.abs(Math.random()) * -1}
                            index={index} 
                            type={"education"}
                            name={item.schoolName}
                            degree={item.degreeEarned}
                            major={item.major}
                            location={item.location}
                            startingDate={item.startingDate}
                            endingDate={item.endingDate}
                            editsHandler={handleEditClick}
                            deleteItem={handleDeleteItem} />
                    ))
            }
            <EducationFillingForm updateEdList={handleUpdates} show={add} closeModal={handleModalDisplay} data={editData} edId={editData.educationId} />
        </div>
    )
}

export default EducationSection