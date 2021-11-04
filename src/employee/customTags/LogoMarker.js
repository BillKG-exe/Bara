import React from 'react'
import './logoMarker.css'

function LogoMarker({ style, icon, distance }) {
    return (
        <div className="marker-box">
            <img src={icon} alt="Logo Marker" className="marker-icon" />
            <div className="marker-pin">
            </div>
        </div>
    )
}

export default LogoMarker
