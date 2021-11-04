import React from 'react'
import './analytics.css'
import Navbar from '../Nav/Navbar'
import ReportHeader from './ReportHeader'
import WorkIcon from '@material-ui/icons/Work'
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import { Line } from 'react-chartjs-2'
import Table from './Table'



/*

import data from 'C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/utils/graphData'
import rows from 'C:/Users/ouatt/Desktop/Bara/Frontend/bara/src/utils/tableData'

*/

const data = {
    labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
    datasets: [
      {
        label: 'VIEWS',
        data: [40, 10, 400, 800, 150],
        fill: false,
        backgroundColor:"#6400e1",
        borderColor:"#6400e1"
      },{
        label: 'RATES',
        data: [320, 2100, 110, 750, 890],
        fill: false,
        backgroundColor:"#1e90ff",
        borderColor:"#1e90ff"
      },
    ],
}


function Analytics() {
    return (
        <>
            <Navbar />
            <ReportHeader />
            <div className="report-analytics">
                <div className="analytics-container">
                    <div className="analytics-header">ANALYTICS DASHBOARD</div>
                    <div className="analytics-prospects-graph">
                        <div className="prospects">
                            <div className="left-prospects">
                                <div>
                                    <div className="title">
                                        <div className="icon"><WorkIcon /></div>
                                        <div className="texts">Job Post</div>
                                    </div>
                                    <div className="number">395</div>
                                </div>
                                <div>
                                    <div className="title">
                                        <div className="icon"><RemoveRedEyeIcon /></div>
                                        <div className="texts">Views</div>
                                    </div>
                                    <div className="number">194</div>
                                </div>
                            </div>
                            <div className="left-prospects">
                                <div>
                                    <div className="title">
                                        <div className="icon"><InsertDriveFileIcon /></div>
                                        <div className="texts">Applicants</div>
                                    </div>
                                    <div className="number">395</div>
                                </div>
                                <div>
                                    <div className="title">
                                        <div className="icon"><TrendingUpIcon /></div>
                                        <div className="texts">Rate</div>
                                    </div>
                                    <div className="number">194</div>
                                </div>
                            </div>
                        </div>
                        <div className="graph">
                            <Line data={data} />
                        </div>
                    </div>
                    <section>
                        <div className="section-box" style={{marginLeft: "15px"}}>
                            <div className="number">216</div>
                            <div className="name">Interviewed</div>
                        </div>
                        <div className="section-box">
                            <div className="number">183</div>
                            <div className="name">Hired</div>
                        </div>
                    </section>
                    <Table />
                </div>
            </div>
        </>    
    )
}

export default Analytics
