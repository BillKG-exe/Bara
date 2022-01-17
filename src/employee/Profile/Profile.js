import React, { Component } from 'react'
import './profile.css'
import ProfileMainContent from './ProfileMainContent'
import SideNavigationBar from './SideNavigationBar'
import { withRouter } from 'react-router';


export class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mainContentTitle: "SETTINGS",
            showSideNavigation: false,
            authorized: 'props.authorized'
        }
    }

    componentDidMount() {
        this.props.authorized()
            .then(authenticated => {
                if(!authenticated) { 
                    this.props.history.push('/signin');
                }
            }).catch((e) => console.log(e))
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
        return (
            <div className='profile-page'>
                <SideNavigationBar navigation={this.handleNavigation} showNav={this.state.showSideNavigation} />
                <ProfileMainContent title={this.state.mainContentTitle} toggleSideNav={this.handleSideNavToggle} />
            </div>
        )
    }
}

export default withRouter(Profile)
