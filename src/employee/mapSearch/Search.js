import React, { Component } from 'react'
import './Search.css'
import SearchNav from '../HeaderComponent/SearchNav'
import SearchCardList from '../searchComponent/SearchCardList'
import list from '../../utils/list'
import SearchIcon from '@material-ui/icons/Search'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import FilterList from '../customTags/FilterList'
import Filter from '../../employer/Misc/Filter'

export class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMap: props.showMap,
            isMapShowed: props.isMapShowed,
            showFilter: false
        }
    }

    handleSearchKeyChange = (e) => {

    }

    handleShowFilter = (response) => {
        this.setState({
            showFilter: response
        })
    }

    render() {
        return (
            <div className="search-comp">
                <div className="search-scroll-view">
                    {<FilterList />}
                    <div className="job-search-list">
                        <SearchCardList list={list} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search



                {/* <SearchNav  updateFilterToggle={this.handleShowFilter}  /> */}
{/*                 <div className="map-searchBar">
                    <div className="map-search-container">
                        <div className="placehodler">What</div>
                        <input 
                            className="search-box" 
                            placeholder="keyword..."
                            type="text" 
                            id="keyword" 
                            onChange={this.handleSearchKeyChange}
                        />
                        <SearchIcon className="maincontent-search-icon" />
                    </div>                                                                  
                    <div className="map-search-container">
                        <div className="placehodler">Where</div>
                        <input 
                            className="search-box" 
                            placeholder="city, country"
                            type="text" 
                            id="location" 
                            onChange={this.handleSearchKeyChange}
                        />
                        <LocationOnIcon className="maincontent-search-icon" />
                    </div>
                    <div><button type="button">Search</button></div>
                </div> */}