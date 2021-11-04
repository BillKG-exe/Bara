import './CustomSection.css'
import { useState } from 'react'
import { FiPlus } from "react-icons/fi"

import CustomFillingForm from './CustomFillingForm'


const CustomSection = ({ title }) => {

    const [add, setAdd] = useState(false)

    const handleClickAdd = (e) => {
        setAdd(true)
    }

    const handleModalDisplay = () => {
        setAdd(false)
    }

    return (
        <div className="custom-section-setting">
            <div className="custom-section-header">
                <div className="header-text">{title}</div>
                <div className="icon" onClick={handleClickAdd}><FiPlus /></div>
            </div>
            <CustomFillingForm show={add} closeModal={handleModalDisplay} title={title} />
        </div>
    )
}
 
export default CustomSection