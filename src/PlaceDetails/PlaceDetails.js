import React from 'react'
import {
  Grid,
  Row
} from 'react-bootstrap'

import {fetchWeather, fetchWeatherForecast} from '../state/weather/actionCreators'
import {ActualWeather} from '../ActualWeather'
import {connect} from 'react-redux'
import './PlaceDetails.css'

const mapStateToProps = state => ({
  cityName: state.attractionAndPlaceData.place
})

const mapDispatchToProps = dispatch => ({
  fetchWeather: cityName => dispatch(fetchWeather(cityName)),
  fetchWeatherForecast: cityName => dispatch(fetchWeatherForecast(cityName))
})

class PlaceDetails extends React.Component {
  componentDidMount() {
    this.props.fetchWeather(this.props.params.placeName)
    this.props.fetchWeatherForecast(this.props.params.placeName)

  }

  componentDidUpdate() {
    console.log('Updated')

    this.props.fetchWeather(this.props.params.placeName)
    this.props.fetchWeatherForecast(this.props.params.placeName)
  }


  render() {
    return (
        <Grid className="place-details">
          <Row className="main-weather">
            <ActualWeather.actualWeather attractionName={this.props.params.attractionName}/>
          </Row>
          <Row className="weather-forecast">
            <ActualWeather.weatherForecast/>
          </Row>
        </Grid>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails)