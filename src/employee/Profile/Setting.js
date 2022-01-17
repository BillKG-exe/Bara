import React from 'react'
import './setting.css'
import InfoUpdates from '../customTags/InfoUpdates'
import EducationSection from '../customTags/EducationSection'
import CustomSection from '../customTags/CustomSection'
import SkillBox from '../customTags/SkillBox'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Setting() {
    const [image, setImage] = React.useState({ preview: null, raw: null})
    const [picture, setPicture] = useState('')
    const [userInfo, setUserInfo] = React.useState({
        picture: image,
        userInfo: {},
        educationList: [],
        experienceList: [],
        projectsList: [],
        skillsList: ""
    })

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('/employee/profile')
            .then((response) => {

                if(response.data.authenticated) {
                    const { user, educations, experiences, projects, skills } = response.data.userData

                    setUserInfo({
                        ...userInfo,
                        picture: user.candidatePicture,
                        userInfo: user,
                        educationList: educations,
                        experienceList: experiences,
                        projectsList: projects,
                        skillsList: skills
                    })  
                    setPicture(user.candidatePicture)
                }

                setLoaded(true)
            }, (error) => {
                console.log(error)
                setLoaded(false)
        });

    }, [loaded])

    const handleAddSkillsList = (skillsList) => {
        setUserInfo({...userInfo, skillsList: skillsList})
    }

    const handleFileUpload = e => {
        if(e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }

        const form = new FormData()

        form.append('picture', e.target.files[0], e.target.files[0].name)

        axios.post('/employee/upload/picture', form)
    }

    const handleUpdateBtn = async e => {
        const response = await axios.post(`/employee/update`, userInfo)
    }

    return (
        <div>
            {
                loaded? (
                    <div className="setting-form">
                        <div className="setting-header">
                            <div className="backgound-image">
                                <div className="photo-section">
                                    <label htmlFor="profilePicture">
                                        {image.preview? 
                                            (<img 
                                            src={image.preview} 
                                            alt="User Profile" />) : (<img  
                                            src={picture} 
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
                        <SkillBox getSkillsList={handleAddSkillsList} />
                        <button className="setting-update-btn" onClick={handleUpdateBtn} >Update</button>
                    </div>
                ) : (
                    <div className='loading'><CircularProgress /></div>
                )
            }
        </div>
    )
}

export default Setting
