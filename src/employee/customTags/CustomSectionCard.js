import './CustomSectionCard.css' 
import { FiEdit2 } from 'react-icons/fi'
//import { VscTrash } from 'react/icons/vsc'
import { IoMdTrash } from 'react-icons/io'

const CustomSectionCard = () => {
    return (
        <div className="custom-section-card">
            <div className="header-options">
                <div className="title">University of California Berkeley</div>
                <div className="options-icons">
                    <div className="icon"><FiEdit2 /></div>
                    <div className="icon"><IoMdTrash /></div>
                </div>
            </div>
            <div className="position">Bachelor of Science - Electrical Engineering and Computer Sience</div>
            <div className="date">2022 - 2024</div>
            <div className="location"></div>
        </div>
    )
}
 
export default CustomSectionCard