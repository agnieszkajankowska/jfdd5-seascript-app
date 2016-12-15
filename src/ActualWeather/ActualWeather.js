import React from 'react'
import Fetch from 'react-fetch'


export default class ActualWeather extends React.Component {

  render() {
    const api_key = 'dc2f2e72b22d9a90fd58cf8ed86be518'
    let city_name = 'Gdańsk'
    return (
      <Fetch url={"http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&APPID=" + api_key + "&units=metric"}>
        <TestComponent/>
      </Fetch>
    )
  }
}

class TestComponent extends React.Component {
  render() {
    const placeName = this.props.name
    const placeTempreature = (this.props.main && this.props.main.temp)
    const placeMainWeather = (this.props.weather && this.props.weather[0].main && this.props.weather[0].description)
    const placeWind = (this.props.wind && this.props.wind.speed)
    const placeWindDirection = (this.props.wind && this.props.wind.deg)
    const placeClouds = (this.props.clouds && this.props.clouds.all)
    const placeHumidity = (this.props.main && this.props.main.humidity)
    const placeCountryCode = (this.props.sys && this.props.sys.country)

    console.log(this.props.weather && this.props.weather[0].icon)


    console.log(this.props)
    return (
          <div>
            <h2> Actual weather conditions </h2>
            <p> Name : {placeName}</p>
            <p> Country : {placeCountryCode}</p>
            <p> Weather condition: {placeMainWeather}</p>
            <p> Temperature : {placeTempreature} Celsius</p>
            <p> Wind : {placeWind}m/s</p>
            <p> Wind direction: {placeWindDirection} degress (to do)</p>
            <p> Cloudiness : {placeClouds}%</p>
            <p> Humidity : {placeHumidity}%</p>
          </div>

      )
  }
}

// coord
// coord.lon City geo location, longitude
// coord.lat City geo location, latitude
// weather (more info Weather condition codes)
// weather.id Weather condition id
// weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
// weather.description Weather condition within the group
// weather.icon Weather icon id
// base Internal parameter
// main
// main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//   main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
// main.humidity Humidity, %
// main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//   main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//   main.sea_level Atmospheric pressure on the sea level, hPa
// main.grnd_level Atmospheric pressure on the ground level, hPa
// wind
// wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
//   wind.deg Wind direction, degrees (meteorological)
// clouds
// clouds.all Cloudiness, %
// rain
// rain.3h Rain volume for the last 3 hours
// snow
// snow.3h Snow volume for the last 3 hours
// dt Time of data calculation, unix, UTC
// sys
// sys.type Internal parameter
// sys.id Internal parameter
// sys.message Internal parameter
// sys.country Country code (GB, JP etc.)
// sys.sunrise Sunrise time, unix, UTC
// sys.sunset Sunset time, unix, UTC
// id City ID
// name City name
// cod Internal parameter
