import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Checkbox } from '@material-ui/core'

const CustomFillingForm = ({ show, closeModal, title }) => {
    const [check, setCheck] = useState(false)

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
                <form>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder={title === "Projects"? "Project name" : "Company Name"} defaultValue="" />
                    </div>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder="Title" defaultValue="" />
                    </div>
                    <div className="account-update-textfiled">
                        <input type="text" placeholder="Location" defaultValue="" />
                    </div>
                    <div className="current-setting-checkbox" style={{display: title === "Projects"? "none" : "block"}} onClick={handleCheck}>
                        <Checkbox checked={check} color="primary" size="small" />
                        <span className="checkbox-name" style={{cursor: "pointer"}}>I currently work at that company</span>
                    </div>
                    <div className="update-education-date">
                        <div className="date-box">
                            <div className="title">Start date</div>
                            <select name="month">
                                <option value="">Month</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                            </select>
                            <select name="Year">
                                <option value="">Year</option>
                                <option value="">2021</option>
                                <option value="">2020</option>
                                <option value="">2019</option>
                            </select>
                        </div>
                        <div className="date-box">
                            <div className="title">End date (or expected)</div>
                            <select name="month">
                                <option value="">Month</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                            </select>
                            <select name="Year">
                                <option value="">Year</option>
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
 
export default CustomFillingForm