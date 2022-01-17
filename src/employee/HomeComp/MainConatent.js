import React, { useState, useEffect } from 'react'
import './mainContent.css'
import { useHistory } from 'react-router'
import SearchIcon from '@material-ui/icons/Search'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SearchCardList from '../searchComponent/SearchCardList'
import JobDescription from './JobDescription'
import NavigationBar from './NavigationBar'
import {RiFilter2Fill} from 'react-icons/ri'
import { RiCloseFill } from 'react-icons/ri'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'


function MainConatent(props) {
    const history = useHistory()
    const [jobData, setJobData] = useState()
    const [jobList, setJobList] = useState([])
    const [showDesc, setShowDesc] = useState(false)
    const [showFilter, setShowFilter] = React.useState(false)

    const getJobs = async () => {
        const res = await axios.get('employee/jobs')
        if(!res.data.authenticated) history.push('/signin')
        setJobList(res.data.jobs)
    }

    useEffect(() => {
        getJobs()
    }, [])

    /* const handleSetActiveCard = (data) => {
        setJobData(data)
        setShowDesc(true)
    } */

    const handleHideDesc = () => {
        setShowDesc(false)
    }

    const handleShowFilter = () => {
        setShowFilter(!showFilter)
        props.sideStatusUpdate(!showFilter)
    }

    const handleGetIndex = (id) => {
        setJobData(id)
        setShowDesc(true)
    }

    const handleChange = (e) => {

    }

    return (
        <div className="mainContent-page">
            <div className="navigation-bar">
                    <NavigationBar />
                    {
                        !showFilter? (
                            <RiFilter2Fill className="sideBar-nav-filter" size={21} onClick={handleShowFilter} />
                        ) : (
                            <RiCloseFill className="sideBar-nav-filter" size={21} onClick={handleShowFilter} />
                        )
                    }
            </div>
            <div className="mainContent-welcome">Welcome, Jane...</div>
            {
                !showFilter? (
                    <RiFilter2Fill className="sideBar-filter" size={24} onClick={handleShowFilter} />
                ) : (
                    <RiCloseFill className="sideBar-filter" size={24} onClick={handleShowFilter} />
                )
            }
            <div className="mainContent-searchBar">
                <div className="search-container">
                    <div className="placehodler">What</div>
                    <input 
                        className="search-box" 
                        placeholder="keyword..."
                        type="text" 
                        id="keyword" 
                        onChange={handleChange}
                    />
                    <SearchIcon className="maincontent-search-icon" />
                </div>                                                                  
                <div className="search-container">
                    <div className="placehodler">Where</div>
                    <input 
                        className="search-box" 
                        placeholder="city, country"
                        type="text" 
                        id="location" 
                        onChange={handleChange}
                    />
                    <LocationOnIcon className="maincontent-search-icon" />
                </div>
                <div><button type="button">Search</button></div>
            </div>
            <div className="lists-desc-section">
                <div className="job-list">
                    {
                        jobList? (
                            <SearchCardList jobs={jobList} getIndex={handleGetIndex} filters={[]} />
                        ) : (
                            <div className='loading'><CircularProgress /></div>
                        )
                    }
                </div>
                <JobDescription jobId={jobData} show={showDesc} hide={handleHideDesc} />
            </div>
        </div>
    )
}

export default MainConatent
