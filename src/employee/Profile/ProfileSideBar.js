import React, {useState} from 'react'
import './profileSideBar.css'
import ListAltIcon from '@material-ui/icons/ListAlt'
import DescriptionIcon from '@material-ui/icons/Description'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import SettingsIcon from '@material-ui/icons/Settings'


function ProfileSideBar(props) {
    const [activeNav, setActiveNav] = useState("settings") 

    const handleClick = (id) => {
        if (id === "apps") {
            setActiveNav("apps")
            props.navigation("APPLICATIONS")
        } else if (id === "favs") {
            setActiveNav("favs")
            props.navigation("FAVORITES")
        } else if (id === "resume") {
            setActiveNav("resume")
            props.navigation("RESUME")
        } else if (id === "settings") {
            setActiveNav("settings")
            props.navigation("SETTINGS")
        }
        /* console.log(id) */
    }

    return (
        <div className={!props.showNav? "sideBar" : "show-sideBar"}>
            <div className="sideBar-logo">Bara</div>
            <div className="navigation-links">
                <div className={activeNav === "apps"? "active-nav" : "dynamic-link-cursor"} 
                    onClick={() => handleClick("apps")}>              
                    <ListAltIcon fontSize="small" className="profile-icon"/>
                    <div className="name">APPLICATION</div>
                </div>
                <div className={activeNav === "favs"? "active-nav" : "dynamic-link-cursor"} 
                    onClick={() => handleClick("favs")}>
                    <FavoriteBorderIcon fontSize="small" className="profile-icon" />
                    <div className="name">FAVORITES</div>
                </div>
                <div className={activeNav === "resume"? "active-nav" : "dynamic-link-cursor"}
                    onClick={() => handleClick("resume")}>
                    <DescriptionIcon fontSize="small" className="profile-icon" />
                    <div className="name">RESUME</div>
                </div>
                <div className={activeNav === "settings"? "active-nav" : "dynamic-link-cursor"} 
                    onClick={() => handleClick("settings")}>
                    <SettingsIcon fontSize="small" className="profile-icon" />
                    <div className="name">SETTINGS</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideBar
