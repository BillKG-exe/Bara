import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import './candidates.css'
import CandidateCard from './CandidateCard'
import Navbar from '../Nav/Navbar'
import ReportHeader from '../Report/ReportHeader'
import Filter from '../Misc/Filter'
import CheckBoxData from '../Ref/CheckListData'
/* import candidates from '../Ref/candidates' */
import StringCleaner from '../Ref/StringCleaner'
import Resume from '../../employee/Profile/Resume'
import { IoCloseOutline } from 'react-icons/io5'
import axios from 'axios'



function Candidates({ authorized }) {
    const history = useHistory()
    const [candidateId, setCandidateId] = useState(-1)
    const [filters, setFilters] = useState([])
    const [dataWithFilters, setDataWithFilters] = useState([])
    const [resume, setResume] = useState(null)
    const [showResume, setShowResume] = useState(false);

/*     const sortDataWithFilter = () => {
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

    } */

    const updateFilters = (newFilters) => {
        setFilters([...newFilters])
    }

    const handleResumeDispaly = data => {
        setResume(data)
        setShowResume(true)
    }

    const handleClick = e => {
        setCandidateId(e.target.id)
    }

    const getData = async () => {
        const res = await axios.get('/employer/candidates')
        setDataWithFilters(res.data.list)
    }

    useEffect(() => {
        authorized()
            .then(authenticated => {
                if(!authenticated) {
                    history.push('/employer/login');
                }
            }).catch((e) => console.log(e))
       
        /* sortDataWithFilter()  */
        getData()
    }, [filters])

    const renderCandidates = () => {
        return (
            <div>
                {
                   (dataWithFilters).map((candidate)=>(
                        <CandidateCard 
                            key={candidate.jobId} 
                            data={candidate} 
                            onClick={handleClick}
                            handleDisplayClicks={handleResumeDispaly} 
                            showApplicationTitle={true} />
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
            <Filter data={CheckBoxData} updateFilters={updateFilters} customItems={[]} />
                <div className="candidate-list-section">
                    { renderCandidates() }
                </div>
                {
                    (resume && showResume) && (
                        <div className="resume-component">
                            <div>
                                <div className="close-icon" onClick={ () => { setShowResume(false) } }><IoCloseOutline /></div>
                                <Resume showStatusBtn={false}
                                    user={resume.candidate}
                                    educationList={resume.education}
                                    experienceList={resume.experience}
                                    projectsList={resume.project}
                                    skillsList={resume.skills}
                                />
                            </div>
                        </div>
                    ) 
                }
            </div>
           </> 
    )
}

export default Candidates
