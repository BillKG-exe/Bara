import { useState, useEffect } from 'react'
import './SkillBox.css'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import SkillContainer from './SkillContainer'
import axios from 'axios'



const SkillBox = ({ getSkillsList }) => {
    const [id, setSId] = useState(-1)
    const [skill, setSkill] = useState("")
    const [skillSet, setSkillSet] = useState("")
    const [skillList, setSkillList] = useState([])

    useEffect(() => {
        axios.get('/employee/skills')
        .then((response) => {
            setSkillSet(response.data.list.listOfSkills)
        }, (error) => {
            console.log(error)
        });
    }, [])

    const handleChange = e => {
        setSkill(e.target.value)
    }

    const handleAddSkill = e => {
        setSkillList([...skillList, skill])

        if(skillSet.length === 0) {
            setSkillSet(skill)
        } else {
            setSkillSet(skillSet + " - "+  skill)
        }    
        
        setSkill("")
        
        getSkillsList({ 
            id: id,
            skillSet: skillSet 
        })
    }

    return (
        <div className="skill-box-update">
            <div className="custom-section-header">
                <div className="header-text">Skills</div>
                <div className="icon"><AiOutlineUnorderedList /></div>
            </div>
            <div className="add-skill">
                <input id="add" type="text" placeholder="Skill" onChange={handleChange} value={skill} />
                <button className="add-skill-btn" onClick={handleAddSkill}>Add</button>
            </div>
            <div className="skill-list">
                {skillSet}
            </div>
            <div><button className='classic-save-btn' /* onClick={handleUpdateInfo} */>Save</button></div>
        </div>
    )
}
 
export default SkillBox
