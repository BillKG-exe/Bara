import './EducationFillingForm.css'
import { FaTimes } from 'react-icons/fa'

const EducationFillingForm = ({ show, closeModal }) => {
    
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
                <form>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder="School Name" defaultValue="" />
                    </div>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder="Degree" defaultValue="" />
                    </div>
                    <div className="degree-selection-back-plus">
                        <div className="back-container">BACK+</div>
                        <input type="number" placeholder="Plus" />
                    </div>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder="Field of study" defaultValue="" />
                    </div>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder="Location" defaultValue="" />
                    </div>
                    <div className="update-education-date">
                        <div className="date-box">
                            <div className="title">Start date</div>
                            <select name="month">
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                            </select>
                            <select name="Year">
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                            </select>
                        </div>
                        <div className="date-box">
                            <div className="title">End date (or expected)</div>
                            <select name="month">
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                            </select>
                            <select name="Year">
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                            </select>
                        </div>
                    </div>
                    <div className="account-update-bio">
                        <textarea placeholder="Description" defaultValue="" />
                    </div>
                    <button className="update-save-btn">Save</button>
                </form>
            </div>
        </div>
    )
}
 
export default EducationFillingForm