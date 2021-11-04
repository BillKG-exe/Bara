import React from 'react'
import './setting.css'
import UserEdit from '../editComponents/UserEdit'
import InfoUpdates from '../customTags/InfoUpdates'
import EducationSection from '../customTags/EducationSection'
import CustomSection from '../customTags/CustomSection'
import SkillBox from '../customTags/SkillBox'

function Setting() {

    const [image, setImage] = React.useState({ preview: null, raw: null})

    const handleFileUpload = e => {
        if(e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    return (
        <div className="setting-form">
            <div className="setting-header">
                <div className="backgound-image">
                    <div className="photo-section">
                        <label htmlFor="profilePicture">
                            {image.preview? 
                                (<img 
                                src={image.preview} 
                                alt="User Profile" />) : (<img  
                                src={process.env.PUBLIC_URL + '/img/proPic.jpg'} 
                                alt="User Profile" />)
                            }
                        </label>
                        <input 
                            style={{display: "none"}}
                            id="profilePicture"
                            type="file"
                            accept=".jpg, .jpeg, .png, .svg"
                            onChange={handleFileUpload}
                            multiple={false}
                        />
                    </div>
                </div>
            </div>
            <InfoUpdates />
            <EducationSection />
            <CustomSection title="Work Experience" />
            <CustomSection title="Projects" />
            <div style={{width: "100%", height: "45px"}}></div>
            <SkillBox />
            <button className="setting-update-btn">Update</button>
        </div>
    )
}

export default Setting

/* 

            <div>
                <div className="profile-edit-title">Profile Edit</div>
                <div className="photo-info">
                    <div className="photo-section">
                        <label htmlFor="companyLogo">
                            {image.preview? 
                                (<img 
                                src={image.preview} 
                                alt="User Profile" />) : (<img  
                                src={process.env.PUBLIC_URL + '/img/proPic.jpg'} 
                                alt="User Profile" />)
                            }
                        </label>
                        <input 
                            style={{display: "none"}}
                            id="companyLogo"
                            type="file"
                            accept=".jpg, .jpeg, .png, .svg"
                            onChange={handleFileUpload}
                            multiple={false}
                        />
                    </div>
                    <div className="info-section">
                        <div>
                            <input id="name" className="setting-form-box-info" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <input id="email" className="setting-form-box-info" type="text" placeholder="Email" />
                        </div>
                        <div>
                            <input id="phone" className="setting-form-box-info" type="number" placeholder="Phone" />
                        </div>
                    </div>
                </div>
                <div className="city-country-block">
                    <input id="city" className="city" type="text" placeholder="City" />
                    <input id="country" className="country" type="text" placeholder="Country" />
                </div>
                <div>
                    <input id="password" className="setting-form-box" type="password" placeholder="Password" />
                </div>
                <div>
                    <input id="confirmation" className="setting-form-box" type="password" placeholder="Confirmation" />
                </div>
                <div><button className="profile-form-button">Make Changes</button></div>
            </div>
            <UserEdit />

*/