import React, { Component } from 'react'
import SideBar from './SideBar'
import MainContent from './MainConatent'
import './home.css'

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideBar: false,
            filters: []
        }
    }

    handleSideBarStatus = (status) => {
        this.setState({
            showSideBar: status
        })
        console.log(status)
    }

    render() {
        return (
            <div className="home-page">
                <SideBar status={this.state.showSideBar} />
                <MainContent sideStatusUpdate={this.handleSideBarStatus} />
            </div>
        )
    }
}

export default Home

