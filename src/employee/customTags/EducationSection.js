import { useState, useEffect } from 'react'
import './EducationSection.css'
import EducationFillingForm from './EducationFillingForm'
import { FiPlus } from 'react-icons/fi'
import CustomSectionCard from './CustomSectionCard'

const EducationSection = () => {
    const [add, setAdd] = useState(false)

    const handleClickAdd = (e) => {
        setAdd(true)
    }

    const handleModalDisplay = () => {
        setAdd(false)
    }

    return (
        <div className="education-section-setting">
            <div className="education-section-header">
                <div className="header-text">Education</div>
                <div className="icon" onClick={handleClickAdd}><FiPlus /></div>
            </div>
            <CustomSectionCard />
            <CustomSectionCard />
            <CustomSectionCard />
            <EducationFillingForm show={add} closeModal={handleModalDisplay} />
        </div>
    )
}
 
export default EducationSection