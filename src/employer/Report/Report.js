import React, { Component } from 'react'
import './report.css'
import Navbar from '../Nav/Navbar'
import ReportHeader from './ReportHeader'
import Settings from './Settings'


export class Report extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="employer-report">
                <Navbar />
                <ReportHeader />
                <Settings />
            </div>
        )
    }
}

export default Report