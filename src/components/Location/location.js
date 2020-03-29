import React from 'react';
import './location.css'

class Location extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
        latitude:null,
        longitude:null,
        userAddress:null

    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates  = this.reverseGeocodeCoordinates.bind(this);

    }

    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleLocationError);
        }
        else{
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position)
    {
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        })
        this.reverseGeocodeCoordinates();
    }
    // AIzaSyCFft5ZoYeNJj3M_7nVn_YX4-3NQe_2bnU
    reverseGeocodeCoordinates(){
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&key=AIzaSyCFft5ZoYeNJj3M_7nVn_YX4-3NQe_2bnU`
        )
          .then(response => response.json())
          .then(data => this.setState({
            userAddress: data.results[0].formatted_address
          }))
          .catch(error => alert(error));

    }
    handleLocationError(error)
    {
        switch(error.code){
            case error.PERMISSION_DENIED:
                alert("user denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occured.")
                break;
            default:
                alert("An unknown error occured.")
        }
    }

    render(){
        return (
          <div className="Location">

            <button onClick={this.getLocation}>Share location</button>
            <p>Latitude:{this.state.latitude}</p>
            <p>Longitude:{this.state.longitude}</p>
            <p>Address: {this.state.userAddress}</p>
            {this.state.latitude && this.state.longitude ? (
              <img
                src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyCFft5ZoYeNJj3M_7nVn_YX4-3NQe_2bnU}`}
                alt=""
              />
            ) : null}
          </div>
        );
    }
}

export default Location;