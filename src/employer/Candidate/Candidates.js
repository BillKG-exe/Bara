import React, { useState, useEffect } from 'react'
import './candidates.css'
import CandidateCard from './CandidateCard'
import Navbar from '../Nav/Navbar'
import ReportHeader from '../Report/ReportHeader'
import Filter from '../Misc/Filter'
import CheckBoxData from '../Ref/CheckListData'
import candidates from '../Ref/candidates'
import StringCleaner from '../Ref/StringCleaner'
import Resume from 'C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/employee/Profile/Resume'


function Candidates() {

    const [filters, setFilters] = useState([])
    const [dataWithFilters, setDataWithFilters] = useState(candidates)
    const [resume, setResume] = useState(null)
    const [showResume, setShowResume] = useState(false);

    const sortDataWithFilter = () => {
        var newFilters = []
        var cleaner = new StringCleaner()

        if(filters.length !== 0) {
            for(var i = 0; i < candidates.length; i++) {
                for(var x = 0; x < filters.length; x++) {
                    if(cleaner.compare(candidates[i].status, filters[x]) 
                        || cleaner.compare(candidates[i].jobTitle, filters[x])
                        || cleaner.beginWith(candidates[i].education[0].degree, filters[x])) {
                            newFilters.push(candidates[i])
                    }
                }
            }
            setDataWithFilters(newFilters)
        } else {
            setDataWithFilters(candidates) 
        }

    }

    const updateFilters = (newFilters) => {
        setFilters([...newFilters])
    }

    useEffect(() => {
        sortDataWithFilter()
    }, [filters])

    const renderCandidates = () => {
        return (
            <div>
                {
                   (dataWithFilters).map((candidate, index)=>(
                        <CandidateCard key={index} data={candidate} />
                    ))
                }
            </div>
        )
    }

    return (
        <>
            <Navbar />
            <ReportHeader />
            <div className="candidate-section">
                <div className="filter-section">
                    <Filter data={CheckBoxData} updateFilters={updateFilters} customItems={[]} />
                </div>
                <div className="candidate-list-section">
                    { renderCandidates() }
                </div>
                {
                    !resume && (
                        <div style={{width: "40%", height: "fit-content", margin: "0 auto", backgroundColor: "white"}}>
                            <Resume showStatusBtn={false} />
                        </div>
                    ) 
                }
            </div>
           </> 
    )
}

export default Candidates
