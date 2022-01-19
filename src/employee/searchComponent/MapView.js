import React from 'react'
import Map from 'google-map-react'
import LogoMarker from '../customTags/LogoMarker'

/* function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(positon => {
          return {
              lat: positon.coords.latitude,
              lng: positon.coords.longitude
          }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
 */

function MapView(props) {
    /* Try using the above function using useEffect hook */
    return (
        <div className={props.className}>
            <Map
                bootstrapURLKeys={{ key:"API_KEY_HERE" }}
                defaultCenter={{lat:12.371535, lng:-1.5199175}}
                defaultZoom={13}    
                /* google="" */ >
                {/* <LogoMarker 
                    lat={12.371535}
                    lng={-1.5199175}
                    icon={process.env.PUBLIC_URL + "/img/google.png"} 
                    distance={"5 km"} /> */}
            </Map>
        </div>
    )
}

export default MapView
