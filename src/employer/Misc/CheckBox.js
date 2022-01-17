import React from 'react'
import { Checkbox } from '@material-ui/core'
import './box.css'

function CheckBox({ id, name, total, addFilter }) {
    const [checked, setChecked] = React.useState(false)

    const handleClick = (e) => {
        addFilter(name, !checked)
        setChecked(!checked)
    }

    return (
        <div className="checkBox-component" onClick={handleClick}>
            <Checkbox className="checkbox" id={id} checked={checked} color="primary"size="small" />     
            <span>{name}</span> 
            { total && (<div>{"(" + total + ")"}</div> ) }        
        </div>
    )
}

export default CheckBox
