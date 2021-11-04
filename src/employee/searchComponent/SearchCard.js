import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import './SearchCard.css'
import LittleBox from '../customTags/LittleBox'
const convert = require('C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/utils/salaryRangeConverter')



function SearchCard({ info }) {
    const [liked, setLiked] = useState(false)
    /* const [isActive, setIsActive] = useState(false) */
    const [activeId, setActiveId] = useState(-1)

    /* useEffect(() => {
        console.log(activeId)
    })  */

    /* Change the function to handle like */
    const handleClick = (e) => {
        setLiked(!liked)
    }

    const handleActive = (id) => {
        if(activeId !== id) {
            console.log(id)
            
            setActiveId(id)
        } else {
            setActiveId(-1)
        }
    }


    return (
        <div id={info.id} 
            className={activeId === info.id? "active-card" : "job-search-card-container"}
            onDoubleClick={handleClick}
            onClick={() => {handleActive(info.id)} }
            >
            <div className="searchCardLogo">
                <img className="search-card-logo" src={process.env.PUBLIC_URL + info.logo} alt="compagny logo"/>
                {/* <div>{activeId + ' ' + info.id}</div> */}
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
                <div className="search-card-degree">Bachelor Degree or equivilent</div>
                <em>Bobo Dioulasso, BF</em>
                {<div className="search-card-list">
                    {
                        (info.skills).map((skill, index)=>(
                            <LittleBox key={index * 5} text={skill} />
                        ))
                    }
                </div>   }             
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
                <em>{info.date}</em>
            </div>
        </div>
    )
}

export default SearchCard
