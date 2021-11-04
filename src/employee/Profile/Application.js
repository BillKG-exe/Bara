import React from 'react'
import './Application.css'
import list from '../../utils/list'
import FavoriteCard from '../customTags/FavoriteCard'

function Application() {
    return (
        <div className="application-section">
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

export default Application
