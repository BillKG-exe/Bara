import React, { Component } from 'react'
import './Search.css'
import SearchCardList from '../searchComponent/SearchCardList'
import MapJobDescView from './MapJobDescView'
import FilterList from '../customTags/FilterList'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'


export class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jobList: [],
            jobId: null,
            showDesc: false,
            showMap: props.showMap,
            isMapShowed: props.isMapShowed,
            showFilter: false
        }
    }

    async componentDidMount () {
        const res = await axios.get('employee/jobs')
        
        if(res.data.authenticated) {
            this.setState({ jobList: res.data.jobs })
        }
    }

    handleGetIndex = (id) => {
        this.setState({jobId: id})
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
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <div className="search-scroll-view">
                        {<FilterList />}
                        <div className="job-search-list">
                            {
                                this.state.jobList.length !== 0? (
                                    <SearchCardList jobs={this.state.jobList} getIndex={this.handleGetIndex} filters={[]} />
                                ) : (
                                    <div className='loading'><CircularProgress /></div>
                                )
                            }
                            <MapJobDescView jobId={this.state.jobId} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search