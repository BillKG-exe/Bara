import './MapPage.css'
import Search from './Search'
import MapView from '../searchComponent/MapView'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { RiRoadMapFill } from 'react-icons/ri'
import { IoMdPerson } from 'react-icons/io'
import { IoLogOutOutline } from 'react-icons/io5'
import { MdPlace } from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import axios from 'axios'

const MapPage = ({ authorized }) => {
    const history = useHistory()
    const [showMap, setShowMap] = useState(false)

    useEffect(() => {
        authorized()
            .then(authenticated => {
                if(!authenticated) { 
                    history.push('/signin');
                }
            }).catch((e) => console.log(e))
    }, [])

    const handleLogout = async e => {
        const response = await axios.get(`/employee/logout`)
        
        if(response.data.success) {
            history.push('/signin')
        }
    }

    return ( 
        <div className="mappage">
            <div className="mappage-navbar">
                <div className="mappage-logo">B</div>
                <Link to="/"><div className="mappage-icons"><AiFillHome /></div></Link>
                <Link to="/maps"><div className="mappage-icons-active"><RiRoadMapFill /></div></Link>
                <Link to="/profile"><div className="mappage-icons"><IoMdPerson /></div></Link>
                <Link to="logout"><div className="mappage-icons" onClick={handleLogout}><IoLogOutOutline /></div></Link>
            </div>            
            <div className="mappage-searchList">
                <Search />
            </div>
            <div className={!showMap? "mappage-map" : "mappage-show-map"}>
                <div className="mappage-searchBar">
                    <div className="mappage-key">
                        <div className="mappage-searchBar-icons"><AiOutlineSearch /></div>
                        <input type="search" placeholder="Keyword" />
                    </div>
                    <div className="mappage-place">
                        <div className="mappage-searchBar-icons"><MdPlace /></div>
                        <input type="text" placeholder="City or Country"/>
                    </div>
                    <button className="mappage-searchBar-btn">SEARCH</button>
                </div>
                <MapView className="map-style" />
            </div>
            <div className='mappage-mapToggle' onClick={ () => { setShowMap(!showMap) }}>
                <GrMapLocation />
            </div>
        </div>
    )
}
 
export default MapPage;