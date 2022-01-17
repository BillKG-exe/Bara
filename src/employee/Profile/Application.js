import React, { useState, useEffect } from 'react'
import './Application.css'
import list from '../../utils/list'
import FavoriteCard from '../customTags/FavoriteCard'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'


function Application() {
    const [loaded, setLoaded] = useState(false)
    const [appliedJobs, setAppliedJobs] = useState([])

    const getAppliedJobs = async () => {
        const res = await axios.get('/employee/applications')
        const { applied } = res.data

        setAppliedJobs([...applied])
    }

    useEffect(() => {
        getAppliedJobs()
        setLoaded(true)
    }, [])

    return (
        <div className="application-section">
            {
                loaded? (
                    appliedJobs.length !== 0? (
                        appliedJobs.map(
                            (job) => (
                                <div key={job.id+ Math.random()}>
                                    <FavoriteCard cardData={job} updateFavList={() => {}} />
                                </div>
                            )
                        )
                    ) : (
                        <div className='applied-status'>You haven't applied to any jobs yet</div>
                    )
                ) : (
                    <div className='loading'><CircularProgress /></div>
                )
            }
        </div>
    )
}

export default Application
