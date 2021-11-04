import './MapPage.css'
import Search from './Search'
import MapView from '../searchComponent/MapView'

import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { RiRoadMapFill } from 'react-icons/ri'
import { IoMdPerson } from 'react-icons/io'
import { IoLogOutOutline } from 'react-icons/io5'
import { MdPlace } from 'react-icons/md'


const MapPage = () => {
    return ( 
        <div className="mappage">
            <div className="mappage-navbar">
                <div className="mappage-logo">Bara</div>
                <div className="mappage-icons"><AiFillHome /></div>
                <div className="mappage-icons-active"><RiRoadMapFill /></div>
                <div className="mappage-icons"><IoMdPerson /></div>
                <div className="mappage-icons"><IoLogOutOutline /></div>
            </div>            
            <div className="mappage-searchList">
                <Search />
            </div>
            <div className="mappage-map">
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
        </div>
    )
}
 
export default MapPage;