import { FaTimes } from 'react-icons/fa'

const SkillContainer = ({skill, type}) => {
    return (
        <div style={{
            color: "#262626",
            width: "fit-content",
            fontSize: "14px",
            padding: "10px",
            margin: "10px",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "5px",
            letterSpacing: "1px",
            backgroundColor: "#EFEFEF"
        }}>
            <div>{skill}</div>
            <FaTimes style={{marginLeft: "5px", cursor: "pointer"}}/>
        </div>
    )
}
 
export default SkillContainer