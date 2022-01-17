import { useState } from 'react'
import './qualifications.css'
import { MdDelete } from 'react-icons/md'

const Qualifications = ({ list_id, item, deleteItem }) => {
    const [id, setId] = useState(list_id)

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "space between"}}>
            <div className="qualification-section-list">{item}</div>
            <div className="delete-icon" onClick={() => deleteItem(id)}><MdDelete /></div>
        </div> 
    )
}
 
export default Qualifications;