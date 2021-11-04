import React from 'react'

const errorStyle = {
    color: "#ff5f5f",
    fontSize: "small"
}

const divStyle = {
    width: "100%",
    padding: "10px",
    paddingLeft: "25px",
    margin: "auto",
    backgroundColor: "#fed2d2",
    borderRadius: "5px",
    transitionDuration: ".4s"
}

function Error({ message }) {
    return (
        <div style={divStyle}>
           <p style={errorStyle}>{message}</p>
        </div>
    )
}

export default Error
