import React from 'react'

function LittleBox(props) {
    const defaultStyle = {
        width: 'auto',
        maxHeight: '40px',
        color: "#6400e1",
        fontSize: "small",
        padding: "5px",
        margin: "auto 5px",
        textAlign: "center",
        backgroundColor: "#f0f0f0"
    }

    return (
        <div className="littleBox-container" style={defaultStyle}>
            {props.text}    
        </div>
    )
}

export default LittleBox
