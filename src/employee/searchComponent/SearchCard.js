import React, { useState, useEffect } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import './SearchCard.css'
import LittleBox from '../customTags/LittleBox'
import moment from 'moment'
import axios from 'axios'
const convert = require('../../utils/salaryRangeConverter');


function SearchCard({ info, active }) {
    const [liked, setLiked] = useState(false)
    const [activeId, setActiveId] = useState(-1)
    const [postDate, setPostDate] = useState('')

    const getLikedStatus = async () => {
        const res = await axios.get(`/employee/liked/${info.id}`)
        setLiked(res.data.liked)
    }

    useEffect(() => {
        getLikedStatus()
        const currentMoment = moment()
        const m = moment(info.date)
        setPostDate(m.from(currentMoment))
    }, [])

    const handleClick = async e => {
        const val = !liked

        setLiked(val)
    
        const res = await axios.get(`employee/likes/${info.id}/${val? 1 : -1}`)
    }

    const handleActive = (id) => {
        setActiveId(id)
    }

    return (
        <div id={info.id} 
            className={active? "active-card" : "job-search-card-container"}
            onDoubleClick={handleClick}
            onClick={() => {handleActive(info.id)} }
            >
            <div className="searchCardLogo">
                <img className="search-card-logo" src={info.logo} alt="compagny logo"/>
            </div>
            <div className="search-card-content">
                <div className="search-title">
                    <div className="search-card-compagny-name">{info.compagny}</div>
                    {/* <div className="optional-display-draft">favorite</div> */}
                    <div className="optional-display-draft"><LittleBox text="New" /></div>
                </div>
                <div className="search-card-position">
                    {info.title}
                </div>
                <div className="search-card-degree">{info.degree}</div>
                <em>{info.city}, {info.country}</em>
                <div className='number-of-applicants'>{Math.round(Math.random() * 100)} applicants</div>
            </div>
            <div className="search-card-info">
                {
                    liked? (
                        <BsHeartFill 
                        className="search-card-icon" 
                        onClick={handleClick}/>
                    ) : (
                        <BsHeart 
                        className="search-card-icon"
                        onClick={handleClick} />
                    )
                }
                <div className="search-card-salary">{convert(info.salary)}</div>
                <em>{postDate}</em>
            </div>
        </div>
    )
}

export default SearchCard