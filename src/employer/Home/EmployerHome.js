import "./Home.css"
import { useState } from "react"
import Filter from '../Misc/Filter'
import Navbar from "../Nav/Navbar"
import candidates from '../Ref/candidates'
import CandidateCard from "../Candidate/CandidateCard"
import CustomSearch from "../CustomComponents/CustomSearch"
import Resume from 'C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/employee/Profile/Resume'


const customFilter = [
    {title: 'Company', list: ['Google', 'Microsoft', 'Uber', 'Tesla', 'Lift', 'Mercedes', 'Oracle', 'Zillow', 'Netflix']},
    {title: 'Job Position', list: ['Software Engineer', 'Software Developer', 'Hardware Engineer', 'Artificial Inteligence']}
]

const renderCandidates = () => {
    return (
        <div className="employer-home-candidates">
            {
               (candidates).map((candidate, index)=>(
                    <CandidateCard key={index} data={candidate} />
                ))
            }
        </div>
    )
}


const EmployerHome = () => {
    const [filter, setFilter] = useState([])

    const updateFilters = (newFilter) => {
        setFilter([...newFilter])
        console.log(    )
    }

    return (
        <>
            <Navbar />
            <div className="employer-home">
                <div className="employer-home-filter">
                    <div className="filter-search-title">Search</div>
                    <CustomSearch />
                    <Filter data={[]} updateFilters={updateFilters} customItems={[...customFilter]} />
                </div>
                { renderCandidates() }
                <div className="employer-home-resume">
                    <Resume showStatusBtn={false} />
                </div>
            </div>
        </>
    )
}
 
export default EmployerHome