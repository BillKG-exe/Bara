import './CustomSectionCard.css' 
import { FiEdit2 } from 'react-icons/fi'
import { IoMdTrash } from 'react-icons/io'
import axios from 'axios'


const CustomSectionCard = ({ id, index, type, name, title, location, degree, major, startingDate, endingDate, editsHandler, deleteItem }) => {
    const handleEdits = e => {
        editsHandler(index)
    }

    const handleDelete = e => {
        axios.get(`/employee/delete/${type}/${id}`)
        .then(response => {}, (error) => {
            console.log(error)
        });

        deleteItem(index)
    } 

    return (
        <div className="custom-section-card">
            <div className="header-options">
                <div className="title">{name}</div>
                <div className="options-icons">
                    <div className="icon"><FiEdit2 onClick={handleEdits} /></div>
                    <div className="icon"><IoMdTrash onClick={handleDelete} /></div>
                </div>
            </div>
            { type === "education" && (<div className="position">{degree? degree + " - " : ""}{major}</div>) }
            { type !== "education" && (<div>{title}</div>) }
            <div className="date">{startingDate} - {endingDate}</div>
            <div className="location">{location}</div>
        </div>
    )
}
 
export default CustomSectionCard