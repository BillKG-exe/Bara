import { useState } from 'react'
import './SkillBox.css'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import SkillContainer from './SkillContainer'

const SkillBox = () => {
    const [skill, setSkill] = useState("")
    const [skillList, setSkillList] = useState([])

    const handleChange = e => {
        setSkill(e.target.value)
    }

    const handleAddSkill = e => {
        setSkillList([...skillList, skill])
        setSkill("")
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
                <SkillContainer skill="Engineering" />
                {
                    skillList.map((skill, index) => (
                        <SkillContainer key={index} skill={skill} />
                    ))
                }
            </div>
        </div>
    )
}
 
export default SkillBox