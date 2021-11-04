import React from 'react'
import './FavoriteCard.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function FavoriteCard({ cardData }) {
    return (
        <div className="favorite-card">
            <div className="favorite-card-icon">
                <img src={process.env.PUBLIC_URL +  cardData.logo} alt="Favorite Company Logo" />
            </div>
            <div className="favorite-card-info">
                <div className="favorite-line-side">
                    <div className="favorite-job-company">{cardData.compagny}</div>
                    <FavoriteBorderIcon className="favorite-job-logo" fontSize="small" />
                </div>
                <div className="favorite-line-side">
                    <div className="favorite-job-title">{cardData.title}</div>
                    <div className="favorite-job-salary">115k</div>
                </div>
                <div className="favorite-card-location">London, UK</div>
                <div className="favorite-line-side">
                    <div className="favorite-job-status"><em>Applied</em></div>
                    <div className="favorite-job-date"><em>05/30/2021</em></div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard
