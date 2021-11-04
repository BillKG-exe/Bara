import React, { Component } from 'react'
import './profile.css'
import ProfileSideBar from './ProfileSideBar'
import ProfileMainContent from './ProfileMainContent'
import NavigationBar from '../HomeComp/NavigationBar'
import { Redirect } from 'react-router-dom'

export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainContentTitle: "SETTINGS",
            showSideNavigation: false,
            authorized: props.authorized
        }
        //console.log('authorized: ',this.state.authorized)
    }

    handleNavigation = (title) => {
        this.setState({
            mainContentTitle: title
        })
    }

    handleSideNavToggle = (status) => {
        this.setState({
            showSideNavigation: status
        })
    }

    render() {
        if(!this.state.authorized) {
            return <Redirect to="/signIn" />
        }

        return (
            <div className='profile-page'>
                <ProfileSideBar navigation={this.handleNavigation} showNav={this.state.showSideNavigation} />
                <ProfileMainContent title={this.state.mainContentTitle} toggleSideNav={this.handleSideNavToggle} />
                <div className="navigation-bar">
                    <NavigationBar />
                </div>
            </div>
        )
    }
}

export default Profile
