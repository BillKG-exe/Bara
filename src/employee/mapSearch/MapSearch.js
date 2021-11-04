import React, {useState, useEffect} from 'react'
import Search from './Search'
import Map from './Map'
import './mapSearch.css'
import MapIcon from '@material-ui/icons/Map';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

function MapSearch() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth) 
    const [showMap, setShowMap] = useState(screenWidth > 995 ? true : false)

    const updateWidth = () => {
        setScreenWidth(window.innerWidth)
        setShowMap(screenWidth < 995 ? true : false)
    }

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        console.log(screenWidth + '      '+ showMap);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const handleMapShow = (e) => {
        setShowMap(!showMap)
        console.log(!showMap)
    }

    return (
        <div className="mapSearch-page">
            <Search />
            <Map className={"show-map-comp "} />
            <div className="mobile-map-view_icon" onClick={handleMapShow}>
                <div>
                    {!showMap? (<MapIcon />) : (<FormatListBulletedIcon />) }
                </div>
            </div>
        </div>
    )
}

export default MapSearch


{/* <div className="mapSearch-page">
<Search />
<Map 
    className={showMap? "show-map-comp " : "hide-map-comp"} 
/>
<div className="mobile-map-view_icon" onClick={handleMapShow}>
    <div>
        {!showMap? (<MapIcon />) : (<FormatListBulletedIcon />) }
    </div>
</div>
</div> */}