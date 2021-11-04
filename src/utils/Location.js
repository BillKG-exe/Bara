/* function getPosition(position) {
    module.exports = {
        lat: position.coords.lat,
        lng: position.coords.lng
    }
} */

module.exports = class Location {
    constructor() {
        this.lat = 0;
        this.lng = 0;
    }

    getCoordinate() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                return {
                    lat: position.coords.lat,
                    lng: position.coords.lng
                }
            });
        } else {
            alert("Geolocation is not supported by this browser")
        }
    }



}