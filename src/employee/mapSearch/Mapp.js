import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbHkyMjYiLCJhIjoiY2txdzFrNTJzMGswZzJvbjN4amlyeGx5MSJ9.LugAiZBs_uBESR9noA3qjA'


const Mapp = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}
 
export default Mapp