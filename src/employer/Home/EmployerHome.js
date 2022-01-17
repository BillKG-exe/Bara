import "./Home.css"
import { useState, useEffect } from "react"
import Filter from '../Misc/Filter'
import Navbar from "../Nav/Navbar"
/* import candidates from '../Ref/candidates' */
import CandidateCard from "../Candidate/CandidateCard"
import CustomSearch from "../CustomComponents/CustomSearch"
import Resume from '../../employee/Profile/Resume'
import { IoCloseOutline } from 'react-icons/io5'
import axios from "axios"
import { useHistory } from "react-router"


const customFilter = [
    {title: 'Company', list: ['Google', 'Microsoft', 'Uber', 'Tesla', 'Lift', 'Mercedes', 'Oracle', 'Zillow', 'Netflix']},
    {title: 'Job Position', list: ['Software Engineer', 'Software Developer', 'Hardware Engineer', 'Artificial Inteligence']}
]


const EmployerHome = ({ authorized }) => {
    const history = useHistory()
    const [filter, setFilter] = useState([])
    const [isCardClicked, setIsCardClicked] = useState(false)
    const [candidates, setCandidates] = useState([])
    const [resume, setResume] = useState(null)
    const [showResume, setShowResume] = useState(false)

    const updateFilters = (newFilter) => {
        setFilter([...newFilter])
        console.log(    )
    }

    const handleResumeDispaly = data => {
        setResume(data)
        setShowResume(true)
    }

    const getData = async () => {
        const res = await axios.get('/employer/candidates')
        setCandidates([...res.data.list])
    }

    useEffect(() => {
        authorized()
            .then(authenticated => {
                if(!authenticated) {
                    history.push('/employer/login');
                }
            }).catch((e) => console.log(e))
       
        getData()
    }, [])

    return (
        <div style={{ backgroundColor: "#f0f0f0" }}>
            <Navbar />
            <CustomSearch />
            <div className="employer-home">
                <div className="employer-home-candidates">
                    {
                        (candidates).map((candidate, index)=>(
                            <CandidateCard key={index} data={candidate} handleDisplayClicks={handleResumeDispaly} />
                        ))
                    }
                </div>
                {
                    showResume && (
                        <div className={showResume ? "employer-home-resume" : "show-employer-home-resume"}>
                            <div className="dashboard-resume-close-icon" onClick={() => { setShowResume(false) }}><IoCloseOutline /></div>
                            <Resume showStatusBtn={false} 
                                user={resume.candidate}
                                educationList={resume.education}
                                experienceList={resume.experience}
                                projectsList={resume.project}
                                skillsList={resume.skills}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}
 
export default EmployerHome