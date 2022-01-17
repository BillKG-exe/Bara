import './HomeFilters.css'
import { useState } from 'react';
import { IoOptionsOutline } from 'react-icons/io5'
import { IoCloseOutline } from 'react-icons/io5';
import CheckBox from '../Misc/CheckBox'


const customFilter = [
    {title: 'Company', list: ['Google', 'Microsoft', 'Oracle', 'Zillow', 'Netflix']},
    {title: 'Job Position', list: ['Software Engineer', 'Software Developer', 'Hardware Engineer', 'Artificial Inteligence']}
]
 

const HomeFilters = () => {
    const [showFilter, setShowFilter] = useState(false)

    const handleFilterChange = (name, checked) => {

    }

    return (
        <div className={'employer-home-filters'}>
            <div className="filter-icon" onClick={() => {setShowFilter(!showFilter)}}><IoOptionsOutline /></div>
            { 
                showFilter && 
                    <div className="filter-box">
                        <div className="filter-container">
                            <div className="closeIcon" onClick={() => {setShowFilter(false)}}><IoCloseOutline /></div>
                            <div className="title">Filters</div>
                            <div className="checkbox-title-container">
                                <div className="title">Company</div>
                                <div className="checkbox-list">
                                    {customFilter[0].list.map((data, index) => (
                                        <div key={index}><CheckBox id={index} name={data} addFilter={handleFilterChange}/></div>
                                    ))}
                                </div>
                            </div>
                            <div className="checkbox-title-container">
                                <div className="title">Job Position</div>
                                <div className="checkbox-list">
                                    {customFilter[1].list.map((data, index) => (
                                        <div key={index}><CheckBox id={index} name={data} addFilter={handleFilterChange}/></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
            }
            
        </div>
    )
}
 
export default HomeFilters;