import React, { useState, useEffect } from 'react'
import './favorites.css'
import FavoriteCard from '../customTags/FavoriteCard'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'


function Favorites() {
    const [favorites, setFavorites] = useState([])
    const [loaded, setLoaded] = useState(false)

    const getData = async () => {
        const res = await axios.get('/employee/likes')
        setFavorites([...res.data.favorites])
        setLoaded(true)
    }

    const updateFavoritesList = () => {
        getData()
    }

    useEffect(() => {
        getData()
    }, [loaded])

    return (
        <div className="favorite-section">
            {
                loaded? (
                    favorites.length !== 0? (
                        favorites.map(
                            (job) => (
                                <div key={job.jobID}>
                                    <FavoriteCard cardData={job} updateFavList={updateFavoritesList} />
                                </div>
                            )
                        )
                    ) : (
                        <div className='applied-status'>Your favorites list is empty</div>
                    )
                ) : (
                    <div className='loading'><CircularProgress /></div>
                )
            }
        </div>
    )
}

export default Favorites
