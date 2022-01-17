import React from 'react'
import { useState, useEffect } from 'react'
import SearchCard from './SearchCard'


function SearchCardList({ list, jobs, getIndex }) {
    const [activeId, setActiveId] = useState(-1)

    const handleActive = (id) => {
        setActiveId(id)
        getIndex(id)
    }

    return (
        <div>
            {
                jobs.map((job, index) => (
                    <div key={job.jobID}  index={index} onClick={() => {handleActive(job.jobID)} } >
                        <SearchCard 
                            info={{
                                id: job.jobID,
                                compagny: job.companyName,
                                title: job.jobTitle,
                                logo: job.companyLogo,
                                salary: job.jobSalary,
                                degree: job.degree,
                                city: job.city,
                                country: job.country,
                                skills: job.skills,
                                date: job.dateOfJobPosted
                            }} 
                            active={activeId === job.jobID}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SearchCardList