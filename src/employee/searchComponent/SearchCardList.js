import React from 'react'
import SearchCard from './SearchCard'

function SearchCardList({ list, activeCard }) {
    const jobs = list

   /*  const handleActiveCard = () => {
        activeCard("some data")
    }
 */
    /* 
        Make a function that will load all the data here job lists plus their descriptions
    */

    return (
        <div>
            {
                jobs.map((job) => (
                    <div key={job.id} /* onClick={handleActiveCard} */>
                        <SearchCard 
                            info={{
                                id: job.id,
                                compagny: job.compagny,
                                title: job.title,
                                logo: job.logo,
                                salary: job.salary,
                                skills: job.skills,
                                date: job.date
                            }} 
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default SearchCardList
