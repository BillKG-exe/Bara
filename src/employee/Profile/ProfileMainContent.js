import React from 'react'
import './profileMainContent.css'
import ProfileCircle from '../customTags/ProfileCircle'
import Setting from './Setting'
import Application from './Application'
import Favorites from './Favorites'
import NavigationBar from '../HomeComp/NavigationBar'
import Resume from './Resume'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';


{/* Try to find a way to simplify the rendering 
    of the diffrents components */}
function renderTargetNav(title) {
    if (title === "apps") {
        console.log("in here")
        return ( <Application /> )
    } else if (title === "favs") {
        return ( <Favorites /> )
    } else if (title === "resume") {
       return ( <Resume /> )
    } else if (title === "settings") {
        return ( <Setting /> )
    }
}


function ProfileMainContent({ title, toggleSideNav}) {
    const [isMenuClicked, setIsMenuClicked] = React.useState(false);
    
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
            {title === "RESUME"? (<Resume showStatusBtn={false} />) : ("")}
            {title === "SETTINGS"? (<Setting />) : ("")}
        </div>
    )
}

export default ProfileMainContent
