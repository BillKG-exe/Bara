import React from 'react'
import './profileCircle.css'

function ProfileCircle() {
    return (
        <div className="profile-circle-image">
            <img src={process.env.PUBLIC_URL + '/img/proPic.jpg'} alt="Circled "/>
        </div>
    )
}

export default ProfileCircle
