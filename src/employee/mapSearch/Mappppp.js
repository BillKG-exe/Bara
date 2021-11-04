import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbHkyMjYiLCJhIjoiY2txdzFrNTJzMGswZzJvbjN4amlyeGx5MSJ9.LugAiZBs_uBESR9noA3qjA'

export class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lng: 12.371535,
            lat: -1.5199175,
            zoom: 12
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })

        map.addControl(new mapboxgl.NavigationControl());
    }

    render() {
        return (
            <div>
                <div className={"map-container"} ref={el => this.mapContainer = el} />
            </div>
        )
    }
}

export default Map

