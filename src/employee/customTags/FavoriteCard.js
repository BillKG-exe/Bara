import React, { useState } from 'react'
import './FavoriteCard.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import convertSalary from '../../utils/salaryRangeConverter'
import axios from 'axios'


function FavoriteCard({ cardData, updateFavList }) {
    const [clicked, setClicked] = useState(false)

    const handleClicks = e => {
        if(!clicked) {
            /* employee/likes/${info.id}/${val? 1 : -1} */
            const res = axios.get(`employee/likes/${cardData.jobID}/${-1}`)
            updateFavList()
        }

        setClicked(!clicked)
    }

    return (
        <div className="favorite-card">
            <div className="favorite-card-icon">
                <img src={cardData.companyLogo} alt="Favorite Company Logo" />
            </div>
            <div className="favorite-card-info">
                <div className="favorite-line-side">
                    <div className="favorite-job-company">{cardData.companyName}</div>
                    {/* <FavoriteBorderIcon className="favorite-job-logo" fontSize="small" /> */}
                    {
                        !clicked? (
                            <BsHeartFill className="favorite-job-logo" onClick={handleClicks} />
                        ) : (
                            <BsHeart className="favorite-job-logo" onClick={handleClicks} />
                        )
                    }
                </div>
                <div className="favorite-line-side">
                    <div className="favorite-job-title">{cardData.jobTitle}</div>
                    <div className="favorite-job-salary">{convertSalary(cardData.jobSalary)}</div>
                </div>
                <div className="favorite-card-location">{cardData.city + ", " + cardData.country}</div>
                <div className="favorite-line-side">
                    <div className="favorite-job-status"><em>Applied</em></div>
                    <div className="favorite-job-date"><em>{cardData.date}</em></div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard
