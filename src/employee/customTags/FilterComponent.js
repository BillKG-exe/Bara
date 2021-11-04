import React from 'react'
import { Checkbox, Typography, Slider } from '@material-ui/core';

function FilterComponent({ status }) {
    const handleChange = (e) => {

    };

    return (
        <div className={status? "show-home-side-bar" : "home-sideBar"}>            
            <div className={"sideBar-container"}>
                <div className="sideBar-header">Categories</div>
                <div className="checkbox-list">
                    <div>
                        <Checkbox checked={true} color="primary" size="small" />
                        <span className="checkbox-name">Full Time</span>
                    </div>
                    <div>
                        <Checkbox checked={true} color="primary" size="small" />
                        <span className="checkbox-name">Part Time</span>
                    </div>
                    <div>
                        <Checkbox checked={false} color="primary" size="small" />
                        <span className="checkbox-name">Intern</span>
                    </div>
                    <div>
                        <Checkbox checked={false} color="primary"size="small" />
                        <span className="checkbox-name">Freelancer</span>
                    </div>
                    <div>
                        <Checkbox checked={true} color="primary"size="small" />
                        <span className="checkbox-name">Start Ups</span>
                    </div>
                </div>
                <div className="range-filter">
                    Salary Range
                    <div className="range-container">
                        <div>From</div>
                        <input className="range-box" 
                            type="number" 
                            id="Start" 
                            placeholder="start (in cfa)" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="range-container">
                        <div>To</div>
                        <input className="range-box" 
                            type="number" 
                            id="end" 
                            placeholder="end (in cfa)" 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="sideBar-profile-image">
                    <img src={process.env.PUBLIC_URL + '/img/proPic.jpg'} />
                    <div>Jane Doe</div>
                </div>
            </div>
        </div>
    )
}

export default FilterComponent
