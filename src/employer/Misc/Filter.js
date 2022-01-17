import React, { useState } from 'react'
import './filter.css'
import CheckBox from '../Misc/CheckBox'
import { IoIosOptions } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
/* import Table from '@material-ui/core/table' */

function sortTypes(array) {
    let categories = []
    let passed = []
    
    for(let i = 0; i < array.length; i++) {
        if(!passed.includes(array[i].split(" ").join("").toLowerCase())) {
            categories.push(array[i])
            passed.push(array[i].split(" ").join("").toLowerCase())
        }
    }
    
    return categories
}

function cleanData(type, data) {
    let filters = []
        
    for(var i = 0; i < data.length; i++) {
        if(type === 'status') {
            filters.push(data[i].interviewStatus)
        } else if(type === 'job type') {
            filters.push(data[i].jobTitle)
        } else if(type === 'education') {
            filters.push(data[i].education)
        }
    }
    
    return sortTypes(filters)
}

function Filter({ data, updateFilters, customItems }) {
    const [filters, setFilters] = React.useState([])
    const [isFilterIconClicked, setIsFilterIconClicked] = useState(false)

    const addFilter = (name, checked) => {
        const newFilter = [...filters]

        if(checked) {
            newFilter.push(name)
        } else {
            newFilter.splice(filters.indexOf(name), 1)
        }

        setFilters(newFilter)
       updateFilters(newFilter)
    }
    
    const renderCategories = () => {
        const filterIntems = cleanData('status', data)

        if(filterIntems.length > 0) {
            return (
                <div className="checkbox-category">
                    <div className="title">Categories</div>
                    {
                       (filterIntems).map((filter, index)=>(
                        <CheckBox key={index} name={filter} total={++index * 5} addFilter={addFilter}/>
                    ))
                    }
                </div>
            )
        }
    }

    const renderJobTitles = () => {
        const filterItems = cleanData('job type', data)

        if(filterItems.length > 0) {
            return (
                <div className="checkbox-category">
                    <div className="title">Job Titles</div>
                    {
                       (filterItems).map((filter, index)=>(
                        <CheckBox key={index} name={filter} total={++index * 7} addFilter={addFilter} />
                    ))
                    }
                </div>
            )
        }
    }

    const renderEducation = () => {
        const filterItems = cleanData('education', data)
        
        if(filterItems.length > 0) {
            return (
                <div className="checkbox-category">
                    <div className="title">Education</div>
                    {
                       (filterItems).map((filter, index)=>(
                        <CheckBox key={index} name={filter} total={++index} addFilter={addFilter} />
                    ))
                    }
                </div>
            )
        }  
    }

    const renderCustomItems = () => {
        if(customItems.length > 0) {
            return (
                <div>
                    {
                        customItems.map((item, index)=>(
                            <div key={index} className="checkbox-category">
                                <div className="title">{item.title}</div>
                                {
                                    (item.list).map((filter, index)=>(
                                        <CheckBox key={index} name={filter} total={++index} addFilter={addFilter} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
    
    return (
        <>
            <div className={!isFilterIconClicked? "filter-item-list" : "filter-item-list-show"}>         
                { renderCategories() }
                { renderJobTitles() }
                { renderEducation() }
                { renderCustomItems() }
            </div>
            <div className="filter-toggle-btn" onClick={() => setIsFilterIconClicked(!isFilterIconClicked)}>
                {
                    !isFilterIconClicked? (
                        <IoIosOptions />
                    ) : (
                        <IoCloseOutline />
                    )
                }
            </div>
        </>
    )
}

export default Filter
