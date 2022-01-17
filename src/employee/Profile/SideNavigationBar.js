import './sideNavigationBar.css'
import { Link } from 'react-router-dom'
import { FiFileText } from 'react-icons/fi'
import { BsHeart, BsFileText } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { IoSettingsOutline} from 'react-icons/io5'
import { IoMdHome, IoIosLogOut, IoIosOptions } from 'react-icons/io'
import { MdMap } from 'react-icons/md'
import { useState } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'



const SideNavigationBar = ({ navigation }) => {
    const history = useHistory()
    const [activeNav, setActiveNav] = useState("settings") 
    const [showSideBar, setShowSideBar] = useState(false)

    const handleClick = (id) => {
        if (id === "apps") {
            setActiveNav("apps")
            navigation("APPLICATIONS")
        } else if (id === "favs") {
            setActiveNav("favs")
            navigation("FAVORITES")
        } else if (id === "resume") {
            setActiveNav("resume")
            navigation("RESUME")
        } else if (id === "settings") {
            setActiveNav("settings")
            navigation("SETTINGS")
        }
    }

    const handleToggle = e => {
        setShowSideBar(!showSideBar)
    }

    const handleLogout = async e => {
        const response = await axios.get(`/employee/logout`)
        
        if(response.data.success) {
            history.push('/signin')
        }
    }

    return (
        <div className={!showSideBar? 'sideNavigationBar' : 'showSideNavBar'}>
            <div className='logo'>B</div>
            <div className='navigation-quick-links'>
                <div className='navigation-title'>Profile</div>
                <div className='quick-links'>
                    <div className={activeNav === "apps"? "quick-links-active" : 'navigation-link-icon'} onClick={() => { handleClick("apps")}} >
                        <div className='icon'><BsFileText /></div>  
                        <div className='link'>Applications</div>
                    </div>
                    <div className={activeNav === "favs"? "quick-links-active" : 'navigation-link-icon'} onClick={() => { handleClick("favs")}}>
                        <div className='icon'><BsHeart /></div>
                        <div className='link'>Favorites</div>
                    </div>
                    <div className={activeNav === "resume"? "quick-links-active" : 'navigation-link-icon'} onClick={() => { handleClick("resume")}}>
                        <div className='icon'><FiFileText /></div>
                        <div className='link'>Resume/CV</div>
                    </div>
                    <div className={activeNav === "settings"? "quick-links-active" : 'navigation-link-icon'} onClick={ () => { handleClick("settings")} }>
                        <div className='icon'><IoSettingsOutline /></div>
                        <div className='link'>Settings</div>
                    </div>
                </div>
            </div>
            <div className='navigation-page-links'>
                <div className='navigation-title'>Navigation</div>
                <div className='page-links'>
                    <Link to="/">
                        <div className='navigation-link-icon'>
                        <div className='icon'><IoMdHome /></div>
                        <div className='link'>Home</div>
                        </div>
                    </Link>
                    <Link to="/map">
                        <div className='navigation-link-icon'>
                            <div className='icon'><MdMap /></div>
                            <div className='link'>Map</div>
                        </div>
                    </Link>
                    <Link to="/logout">
                        <div className='navigation-link-icon' onClick={handleLogout}>
                            <div className='icon'><IoIosLogOut /></div>
                            <div className='link'>Log out</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='profile-filter-toggle' onClick={handleToggle}>
                {
                    !showSideBar? (
                        <IoIosOptions />
                    ) : (
                        <VscClose />
                    )
                }
            </div>
        </div>
    )
}
 
export default SideNavigationBar