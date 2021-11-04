import React from 'react'
import './favorites.css'
import list from '../../utils/list'
import FavoriteCard from '../customTags/FavoriteCard'

function Favorites() {
    return (
        <div className="favorite-section">
            {
                list.map(
                    (job) => (
                        <div key={job.id}>
                            <FavoriteCard cardData={job} />
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Favorites
