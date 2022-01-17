import React from 'react'
import { useEffect } from 'react'
import './profileMainContent.css'
import ProfileCircle from '../customTags/ProfileCircle'
import Setting from './Setting'
import Application from './Application'
import Favorites from './Favorites'
import NavigationBar from '../HomeComp/NavigationBar'
import Resume from './Resume'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'


function ProfileMainContent({ title, toggleSideNav}) {
    const [isMenuClicked, setIsMenuClicked] = React.useState(false)
    const [userInfo, setUserInfo] = React.useState({
        userInfo: {},
        educationList: [],
        experienceList: [],
        projectsList: [],
        skillsList: ""
    })

    
    const getData = async () => {
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
                        skillsList: skills.listOfSkills
                    })
                }
            }, (error) => {
                console.log(error)
        });
    }

    useEffect(() => {
        getData()
    }, [title])

    function handleShowSideNav() {
        setIsMenuClicked(!isMenuClicked)
        toggleSideNav(!isMenuClicked)
    } 

    return (
        <div className="profile-main-content">
            <div className="main-content-header">
                <div className="main-content-title">{title}</div>
                <ProfileCircle />
            </div>
            <div className="mobile-main-content-header">
                <div className="navigation-bar">
                    <NavigationBar />
                    {
                        !isMenuClicked? (
                            <MenuIcon className="sideBar-nav-filter" onClick={handleShowSideNav} />
                        ) : (
                            <CloseIcon className="sideBar-nav-filter" onClick={handleShowSideNav} />
                        )
                    }
                </div>
            </div>
            {title === "APPLICATIONS"? (<Application />) : ("")}
            {title === "FAVORITES"? (<Favorites />) : ("")}
            {title === "RESUME"? (
                <Resume showStatusBtn={false}
                    user={userInfo.userInfo}
                    educationList={userInfo.educationList}
                    experienceList={userInfo.experienceList}
                    projectsList={userInfo.projectsList}
                    skillsList={userInfo.skillsList}
                />
            ) : ("")}
            {title === "SETTINGS"? (<Setting />) : ("")}
        </div>
    )
}

export default ProfileMainContent
