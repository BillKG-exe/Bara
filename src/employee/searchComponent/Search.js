import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import SearchNav from '../HeaderComponent/SearchNav'
import MapView from './MapView'
import SearchCardList from './SearchCardList'
import list from '../../utils/list'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { ImList } from 'react-icons/im'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import './search.css'

export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            place: null,
            showMap: false
        }

        this.position = {
            lat: 0,
            lng: 0    
        }
    }

    handleShowMap = (e) => {
        this.setState({
            showMap: !this.state.showMap
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSearch = (e) => {
        console.log(this.state)
    }

    handleOnMapClick = (e) => {
        console.log(1);
    }

    render() {
        return (
            <div className="search-page disable-select">   
                <div className={
                        this.state.showMap? "user-section hide-list" : "user-section show-list"
                    }
                >
                    <SearchNav showMap={this.handleShowMap} isMapShowed={this.state.showMap}/>
                    {/* <Header /> */}
                    <div className="search-scroll-view">
                        <div className="search-box">
                            <div className="searchField">
                                <label>What</label>
                                <input type="search" id="title" placeholder="job title" onChange={this.handleChange} />
                                <AiOutlineSearch className="search-field-icon" />
                            </div>
                            <div className="searchField">
                                <label>Where</label>
                                <input type="search" id="place" placeholder="city" onChange={this.handleChange} />
                                <HiOutlineLocationMarker className="search-field-icon" />
                            </div>
                            <Button 
                                className="search-button" 
                                variant="contained" 
                                color="primary"
                                onClick={this.handleSearch}>SEARCH</Button>
                        </div>
                        <div className="job-search-list">
                            <SearchCardList list={list} />
                        </div>
                    </div>
                </div>
                <MapView 
                    className={
                        this.state.showMap? "map-section show-map" : "map-section hide-map"
                    }
                />
                {/* onClick={this.handleShowMap} */}
                <div className="map-list-button" onTouchStart={this.handleShowMap} >
                    {
                        this.state.showMap? (
                            <ImList className="icon" />
                        ) : (
                            <FaMapMarkedAlt className="icon" />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Search