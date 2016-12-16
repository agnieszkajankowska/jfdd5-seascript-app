import React from 'react'
import Fetch from 'react-fetch'
import icons from './icons.json'
import 'weather-icons/css/weather-icons.css'
import {
  Row,
  Col
} from 'react-bootstrap'


export default class ActualWeather extends React.Component {

  render() {
    const api_key = 'dc2f2e72b22d9a90fd58cf8ed86be518'
    let city_name = 'Gdańsk'
    return (
      <Fetch
        url={"http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&APPID=" + api_key + "&units=metric"}>
        <ActualWeatherDetailed/>
      </Fetch>
    )
  }
}

class ActualWeatherDetailed extends React.Component {
  render() {
    const placeName = this.props.name
    const placeTempreature = (this.props.main && this.props.main.temp)
    const placeMainWeather = (this.props.weather && this.props.weather[0].main)
    const placeWind = (this.props.wind && this.props.wind.speed)
    const placeWindDirection = (this.props.wind && this.props.wind.deg)
    const placeClouds = (this.props.clouds && this.props.clouds.all)
    const placeHumidity = (this.props.main && this.props.main.humidity)
    const placeCountryCode = (this.props.sys && this.props.sys.country)

    let icon = ''
    let iconLabel = ''
    const prefix = 'wi wi-'
    const code = (this.props.weather && this.props.weather[0].id)

    if (code === undefined) {
      console.log(code)
    } else {
      iconLabel = (icons[code].icon)
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = prefix + 'day-' + iconLabel;
      } else {
        icon = prefix + iconLabel;
      }
    }
    console.log(this.props)

    return (
      <Col md={12}>
        <h2> Actual weather conditions </h2>
        <Col sm={12}>
          <h2>{placeName} {placeCountryCode}</h2>
        </Col>
        <Col sm={12}>
          <icon className={icon}/>
          <h2>{placeMainWeather}</h2>
        </Col>
        <Col sm={12}>
          <h2>{placeTempreature}<icon className="wi wi-celsius"/></h2>
        </Col>
        <Col sm={4}>
          <icon className="wi wi-strong-wind"/>
          <h2>{placeWind}m/s {placeWindDirection}</h2>
        </Col>
        <Col sm={4}>
          <icon className="wi wi-cloudy"/>
          <h2>{placeClouds}%</h2>
        </Col>
        <Col sm={4}>
          <icon className="wi wi-smoke"/>
          <h2>{placeHumidity}%</h2>
        </Col>
      </Col>
    )
  }
}

